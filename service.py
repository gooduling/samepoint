from flask import Flask, request, send_from_directory, jsonify
from flask_cors import CORS, cross_origin
import os
from model import findSentenses

app = Flask(__name__, static_folder='client/build')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route("/api/similarity", methods=['GET'])
@cross_origin()
def similarity_route():
    query = request.args.get("query")
    if query:
        simList = findSentenses(query)
        return jsonify({
            "similar": simList
        })
    else:
        return jsonify({ "error": "No query parameter"}), 400

if __name__ == "__main__":
    app.run(port=8000, debug=True)

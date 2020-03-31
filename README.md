## Description
Instead of looking for texts containing sentences that are close
in meaning, V 1 of this app uses the small word2vec magnitude model
and finds similarities separately  for each word in the original sentence, composing new sentences from them.

## Quick start

1.  Make sure that you have Python 3, Node.js v8.15.1 and npm v5 or above installed.
2.  Run <br />
 `source venv/bin/activate` <br />
         `pip3 install -r requirements.txt` <br />
         `python3 service.py` <br /> to install python dependencies and run the server.
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>/client`.<br />
4.  Run `npm install` in order to install dependencies.<br />
5.  Run `npm run build` to generate the code served by python server.
8.  See the app on `http://localhost:8000`


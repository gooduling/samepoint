## Description
Instead of looking for texts containing sentences that are close
in meaning, V 1 of this app uses the small word2vec magnitude model
and finds similarities separately  for each word in the original sentence, composing new sentences from them.

## Quick start

1.  Make sure that you have Python 3, virtualenv, Node.js v8.15.1 and npm v5 or above installed.
2.  Run <br />
        `git clone https://github.com/gooduling/samepoint.git` <br />
        `cd samepoint` <br />
        `python3 -m venv env` <br />
        `source env/bin/activate` <br />
         `pip3 install -r requirements.txt` <br />
         to install python dependencies.
3.  Move to the client directory: `cd client`.<br />
4.  Run `npm install` in order to install frontend dependencies.<br />
5.  Run `npm run build` to generate the frontend code for serving by server.
6.  Run 
        `cd ..` <br />
        `python3 service.py` <br /> 
    to run the python server
7.  See the app on `http://localhost:8000`


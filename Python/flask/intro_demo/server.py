from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
  print("got a request from the client in the index method")
  return "response from the server"

@app.route('/cats')
def cats():
  print('in cats route')
  return "info about cats"


app.run(debug = True)

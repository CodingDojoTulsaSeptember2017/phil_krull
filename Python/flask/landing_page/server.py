from flask import Flask, render_template, redirect

app = Flask(__name__)

print("working server")

@app.route("/")
def index():
  print("In index method from the root route")
  return render_template("index.html")

@app.route("/create", methods=["POST"])
def create():
  print("Just submitted a post request")
  return redirect('/')

@app.route("/create2", methods=["POST"])
def create2():
  print("Just submitted a new email")
  return redirect('/')

@app.route("/page")
def page():
  return render_template("page.html")

app.run(debug = True)
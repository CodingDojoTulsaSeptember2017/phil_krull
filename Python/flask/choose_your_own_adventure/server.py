from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = "my super sercet key"

@app.route('/', methods=["GET"])
def index():
  print(session['input_name'])
  return render_template('index.html', name = "Phil")


@app.route('/create', methods=["POST"])
def create():
  # print(name)
  print(request.form)
  # conditionals for validations
  session['input_name'] = request.form['name']
  return redirect('/')

app.run(debug=True)
from random import randint
from flask import Flask, render_template, redirect, request, session, flash

app = Flask(__name__)
app.secret_key = "my super duper secret key"

@app.route('/')
def index():
    if 'wins' not in session:
        session['wins'] = 0
        session['loses'] = 0
        session['ties'] = 0
    return render_template('index.html')

@app.route('/process_play', methods=["POST"])
def process():
    if request.method == 'POST':
        options = ["Rock", "Paper", "Scissors"]
        server_choice = randint(0, 2)
        print(server_choice)
        client_choice = int(request.form['choice_from_client'])
        outcome = ""
        if server_choice == client_choice:
            outcome = "tie"
            session['ties'] += 1
            print("tie, you both picked {}".format(options[server_choice]))
        elif server_choice == 0 and client_choice == 1:
            outcome = "win"
            session['wins'] += 1
            print("client wins client: paper, server: rock")
        elif server_choice == 0 and client_choice == 2:
            outcome = "lose"
            session['loses'] += 1
            print("server wins client: scissors, server: rock")
        elif server_choice == 1 and client_choice == 2:
            outcome = "win"
            session['wins'] += 1
            print("client wins client: scissors, server: paper")
        elif server_choice == 1 and client_choice == 0:
            outcome = "lose"
            session['loses'] += 1
            print("server wins client: rock, server: paper")
        elif server_choice == 2 and client_choice == 0:
            outcome = "win"
            session['wins'] += 1
            print("client wins client: rock, server: scissors")
        else:
            outcome = "lose"
            session['loses'] += 1
            print("server wins client: paper, server: scissors")

        flash("The server picked {}, and the client picked {}, you {}".format(options[server_choice], options[client_choice], outcome))
    return redirect('/')

@app.route('/start_over')
def clear():
    session.clear()
    return redirect('/')

app.run(debug=True)

from flask import Flask, render_template, redirect, request, flash, session
from mysqlconnection import MySQLConnector

import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = "my super secret key"

mysql = MySQLConnector(app, 'email_validations')

# 1 step render the index page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/email', methods=['POST'])
def create():
    # add form validations
    print('1')
    form_email = request.form['email']
    is_valid = True

    query = "SELECT * FROM emails WHERE email = :email_from_form"

    data = {
        'email_from_form': form_email
    }

    # check if email already exists in DB
    email_from_db = mysql.query_db(query, data)

    if email_from_db:
        print('Email found')
        flash('Email already exists!')
        is_valid = False

    if len(form_email) < 1:
        print('2')
        # blank entry
        flash("Email is required!")
        is_valid = False

    if not EMAIL_REGEX.match(form_email):
        print('3')
        flash("Invalid email entered!")
        is_valid = False

    # if we passed the validations
    if is_valid:
        print('4')
        # save the email
        query = "INSERT INTO emails (email, created_at) VALUES (:email, NOW())"
        data = {
            'email': request.form['email']
        }

        mysql.query_db(query, data)
        flash("You just entered {} as a valid email".format(form_email))

        return redirect('/success')
    else:
        # failed the validation checks
        return redirect('/')

# 2 step render another html page
@app.route('/success')
def success():

    query = "SELECT * FROM emails"

    all_emails = mysql.query_db(query)

    return render_template('success.html', emails = all_emails)

app.run(debug=True)
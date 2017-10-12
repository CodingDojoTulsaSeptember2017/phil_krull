from flask import Flask
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'users')

query = "SELECT * FROM users"

print(mysql.query_db(query, data))


app.run(debug=True)
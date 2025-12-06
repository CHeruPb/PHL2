from flask import Flask, render_template
import sqlite3
from database import create_tables

app = Flask(__name__)
create_tables()

app.route('/')
def index():
    return render_template('index.html')
from flask import Flask, send_from_directory, render_template, request

import os
from flask import send_from_directory

app = Flask(__name__)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/')
def home():
    return render_template('home.html', active_page='home')

@app.route('/egypt')
def egypt():
    return render_template('egypt.html', active_page='egypt')

@app.route('/machu_picchu')
def machu_picchu():
    return render_template('machu_picchu.html', active_page='machu_picchu')

@app.route('/mayans')
def mayans():
    return render_template('mayans.html', active_page='mayans')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        message = request.form.get('message')
        print(f"Message from {name}: {message}")
    return render_template('contact.html', active_page='contact')
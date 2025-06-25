from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', active_page='home')

@app.route('/projects')
def projects():
    return render_template('projects.html', active_page='projects')

@app.route("/skills")
def skills():
    return render_template("skills.html", active_page='skills')

@app.route("/about")
def about():
    return render_template("about.html", active_page='about')

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        message = request.form.get("message")
        print(f"Contact form submitted: {name} - {message}")
    return render_template("contact.html", active_page='contact')

if __name__ == "__main__":
    app.run(debug=True)
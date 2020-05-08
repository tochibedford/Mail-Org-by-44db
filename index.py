from flask import Flask, render_template, request
from forms import MailOrgForm
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
app.secret_key = "0114242e6dc45c945f86b2614365fdcd7e23d0ed560dfbb6"
csrf = CSRFProtect(app)

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/use", methods=["GET", "POST"])
def use():
    form = MailOrgForm()
    return render_template("44index.html", form=form)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port='5000')
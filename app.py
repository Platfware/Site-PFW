from flask import Flask,render_template,request


app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def home():

    if request.method == 'POST':
        name = request.form.get("name")
        email = request.form.get("email")
        number = request.form.get("number")
        message = request.form.get("message")
        print("Name:", name)
        print("Email:", email)
        print("Number:", number)
        print("Message:", message)

    return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True)
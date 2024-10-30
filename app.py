from flask import Flask,render_template,request
import mail

app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def home():

    if request.method == 'POST':
        name = request.form.get("name")
        email = request.form.get("email")
        number = request.form.get("number")
        message = request.form.get("message")
        mail.acknowledge(name,email)
        mail.send_contact_info_to_platfware(name,email,number,message)

    return render_template("index.html")



if __name__ == "__main__":
    app.run()
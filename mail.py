import smtplib

# SMTP configuration
HOST = "smtp.gmail.com"
PORT = 587
FROM_EMAIL = "sadhasivam.a07@gmail.com"
PASSWORD = "mbfpbromoibrfifq"  # Use App Passwords for security

def send_contact_info_to_platfware(name, email, mobile, message):
    # Define recipients
    recipients = ["sadhamlbb@gmail.com", "prathimaselvaraj15@gmail.com"]  # Replace with actual email addresses
    
    # Compose subject and body for the contact info email
    subject = "New Contact Information Submission"
    body = f"""Contact Information:
    
Name: {name}
Email: {email}
Mobile Number: {mobile}
Message: {message}

Best regards,
Platfware Team
"""
    message = f"Subject: {subject}\n\n{body}"
    
    # Send email
    smtp = smtplib.SMTP(HOST, PORT)
    smtp.ehlo()
    smtp.starttls()
    
    try:
        smtp.login(FROM_EMAIL, PASSWORD)
        smtp.sendmail(FROM_EMAIL, recipients, message)
        print("[*] Email sent successfully!")
    except smtplib.SMTPAuthenticationError as e:
        print("Authentication error:", e)
    except smtplib.SMTPRecipientsRefused as e:
        print("Recipient error:", e)
    finally:
        smtp.quit()

def acknowledge(user_name, user_email):
    subject = "Thank You for Contacting Platfware"
    body = f"""Dear {user_name},

Thank you for reaching out to Platfware! We appreciate your interest and will get back to you shortly to address your inquiry.

If you have any urgent questions, please feel free to reply directly to this email.

Warm regards,
The Platfware Team
"""
    message = f"Subject: {subject}\n\n{body}"
    cc_emails =  ["prathimaselvaraj15@gmail.com"]
    # Combine TO and CC recipients
    all_recipients = [user_email] + (cc_emails if cc_emails else [])
    
    # Send email
    smtp = smtplib.SMTP(HOST, PORT)
    smtp.ehlo()
    smtp.starttls()
    
    try:
        smtp.login(FROM_EMAIL, PASSWORD)
        smtp.sendmail(FROM_EMAIL, all_recipients, message)
        print("[*] Email sent successfully!")
    except smtplib.SMTPAuthenticationError as e:
        print("Authentication error:", e)
    except smtplib.SMTPRecipientsRefused as e:
        print("Recipient error:", e)
    finally:
        smtp.quit()

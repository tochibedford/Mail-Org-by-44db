from flask_wtf import FlaskForm
from wtforms import SubmitField, BooleanField
from wtforms.validators import DataRequired, Email

class MailOrgForm(FlaskForm):
    all_ = BooleanField("All", id='all_')
    inbox = BooleanField("Inbox", id="inbox")
    sent = BooleanField("Sent", id="sent", default="checked")
    drafts = BooleanField("Drafts", id="drafts")
    submit = SubmitField("Check Attatchments", id="submit")

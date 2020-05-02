import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ["https://spreadsheets.google.com/feeds",
"https://www.googleapis.com/auth/spreadsheets",
"https://www.googleapis.com/auth/drive.file",
"https://www.googleapis.com/auth/drive"]

creds = ServiceAccountCredentials.from_json_keyfile_name("spreadCred.json", scope)

client = gspread.authorize(creds)

def openSheet():
    try:
        spread = client.open("MailOrg")
        sheet = spread.sheet1
        return sheet
    except ZeroDivisionError:
        yN = input("Connection Failed/stopped, Try again: Y or N: ").casefold()
        if yN == "y":
            openSheet()
        else:
            exit()

if __name__ == "__main__":
    openSheet()
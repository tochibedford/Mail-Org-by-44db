from googleapiclient.discovery import build
from httplib2 import Http
from oauth2client import file, client, tools
import spread
import threading
import time


credentials = './credentials.json'
SCOPES = 'https://www.googleapis.com/auth/gmail.readonly'
# flow = client.flow_from_clientsecrets(credentials, SCOPES)
# store = file.Storage('./token.json')
# creds = tools.run_flow(flow, store)


sheet = spread.openSheet()


def main():
    store = file.Storage('./token.json')
    creds = store.get()
    if not creds or creds.invalid:
        flow = client.flow_from_clientsecrets(credentials, SCOPES)
        creds = tools.run_flow(flow, store)
        
    service = build('gmail', 'v1', http=creds.authorize(Http()))
    return service

def checkSent(service):
    results = service.users().messages().list(userId='me', labelIds=['SENT'], maxResults=1000).execute()
    messages = results.get("messages", [])
    return messages

def mainMeth():
        try: 
            service = main()
            sentMessages = checkSent(service)
            if not sentMessages:
                print("No messages in your 'SENT' folder")
            else:
                print("Message snippets:")
                for message in sentMessages:
                    msg = service.users().messages().get(userId='me', id=message['id'], format="full").execute()
                    payload = msg["payload"]
                    part = payload["parts"][1]
                    filename = part["filename"]
                    if filename:
                        headers = payload["headers"]
                        for header in headers:
                            if header["name"] == "To":
                                to = header["value"]
                            else:
                                pass
                        sheet.insert_row([f"{filename}", f"{to}", f"{message['id']}"], len(sheet.get_all_records())+2)
                        print(f"sent: {filename}, To: {to}, MsgId: {message['id']}")

        except ZeroDivisionError:
            yN = input("Connection Failed/stopped, Try again: Y or N: ").casefold()
            if yN == "y":
                mainMeth()
            else:
                exit()
            
if __name__ == "__main__":
    mainMethThread = threading.Thread(target=mainMeth, name='mainMeth', daemon=True)
    mainMethThread.start()
    time.sleep(10)
    
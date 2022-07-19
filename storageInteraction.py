from datetime import datetime
import pytz
import json

#This function opens the json file, turns it into a python dictionary, adds the new info and writes the dictionary as a json object into the json file again.
def updateData(title, text):

    file = open("posts.json", "r")
    jsonData = json.load(file)
    file.close()

    timezone = pytz.timezone('Europe/London')
    frmtdTime = datetime.now(timezone)
    date= frmtdTime.strftime("%d/%m/%Y")
  
    id = jsonData["idCount"] + 1
    jsonData["idCount"] += 1

    post = {"title": title, "text": text, "date": date, "id": id}
    jsonData["posts"].append(post)

    with open('./posts.json', 'w') as outfile:
      json.dump(jsonData, outfile)

#this function gets the data from the json file.
def getData():
    
  file = open("posts.json", "r")
  jsonData = json.load(file)
  jsonData = json.dumps(jsonData)
  file.close()

  return jsonData
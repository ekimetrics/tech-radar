import json
import getpass
import pandas as pd

USER = getpass.getuser()
PATH = f"C:/Users/{USER}/Ekimetrics/Ekimetrics. - Eki.Innovation/Opensource Tech Radar.xlsx"

data = pd.read_excel(PATH).iloc[:,:6]

data["quadrant"] = data["quadrant"].replace({"Data Science":2,"Data Engineering":3,"Web Development":1,"Software Development":0})
data["ring"] = data["ring"].replace({"ADOPT":0,"TRIAL":1,"ASSESS":2,"HOLD":3})
data["active"].fillna(True,inplace = True)
data["moved"].fillna(0,inplace = True)
data.drop("url",axis = 1,inplace = True)

json_data = data.to_json(orient = "records")
js_data = f"""
var radarData = {json_data};
"""

with open("technos.js","w") as file:
	file.write(js_data)

import sqlite3
import json
import DnD_db_manip

#import data
with open('object.json', 'r') as infile:
	data = json.load(infile)

print type(data)

data = str(data)
print type(data)

id_token = "H"

DnD_db_manip.db_char_push(id_token,data)

print DnD_db_manip.db_char_pull(id_token, 'Trogdor')

print DnD_db_manip.db_get_char_list(id_token)

import sqlite3
import json
import DnD_db_manip

#import data
with open('object.json', 'r') as infile:
	data = json.load(infile)

id_token = "H"

DnD_db_manip.db_char_push(id_token,data)

DnD_db_manip.db_char_pull(id_token, 'Trogdor')

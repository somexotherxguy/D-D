import sqlite3
import json

#Given an input string 'id_token' representing the user, and character name, output a json file
#containing that character's information.
def db_char_pull(id_token, char_name):
	conn = sqlite3.connect('DnD.db')
	conn.row_factory = sqlite3.Row
	c = conn.cursor()

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")

	c.execute("SELECT * FROM char_info WHERE id_token=? AND char_name=?", (id_token, char_name))
	char_data = c.fetchone()

	#Make dictionary
	char_obj = {
		'Str': char_data['str'],
		'Con': char_data['con'],
		'Wis': char_data['wis'],
		'Dex': char_data['dex'],
		'Int': char_data['intel'],
		'Chr': char_data['chr'],
		'HP': char_data['hp'],
		'Level': char_data['level'],
		'Languages': char_data['languages'],
		'Feats': char_data['feat'],
		'Spells': char_data['available_spells'],
		'Abilities': char_data['ability'],
		'Tool Proficiencies': char_data['tool_prof'],
		'Weapon Proficiencies': char_data['weapon_prof'],
		'Name': char_name,
		'Age': char_data['age'],
		'Height': char_data['height'],
		'Weight': char_data['weight'],
		'Gender': char_data['gender'],
		'Race': char_data['race'],
		'Class': char_data['class'],
		'Archetype': char_data['archetype'],
		'Fighting_style': char_data['fighting_style'],
		'Background': char_data['background'],
		'Traits': char_data['traits'],
		'Bonds': char_data['bonds'],
		'Physical Description': char_data['description'],
		'Miscellaneous Notes': char_data['notes'],
		'Armor': char_data['armor'],
		'Weapons': char_data['weapon'],
		'Tools': char_data['tools'],
		'Platinum': char_data['platinum'],
		'Gold': char_data['gold'],
		'Electrum': char_data['electrum'],
		'Silver': char_data['silver'],
		'Copper': char_data['copper'],
		
		#'ideal': char_data['ideal'],
		#'flaw': char_data['flaw'],
		#'story': char_data['story'],
		#'alignment': char_data['alignment'],
		#'proficiency_mod': char_data['proficiency_mod'],
		#'spellcasting': char_data['spellcasting'],
		#'char_name': char_name,
		#'notable_traits': char_data['notable_traits'],
		#'sub_race': char_data['sub_race'],
		#'exp': char_data['exp'],
		#'skills': char_data['skills'],
		#'saves': char_data['saves'],
		#'equipment': char_data['equipment'],
	}
	
	#export data as json
	#with open('object.json', 'w') as outfile:
	#	json.dump(char_obj, outfile)
		
	#test
	#with open('test.json', 'w') as outfile:
	#	json.dump(char_obj, outfile)


	#commit changes to database
	conn.commit()

	#close connection to database, creation completed
	conn.close()
	
	#return json
	char_obj = str(char_obj)
	return json.dump(char_obj)

#Given string 'id_token' representing a user, and input dictionary, pull information into the database.
def db_char_push(id_token, info_string):
	conn = sqlite3.connect('DnD.db')
	c = conn.cursor()
	data = json.load(info_string)

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")

	#If new user, add to table of user id_tokens
	c.execute('''INSERT OR REPLACE INTO users 
		(id_token)
		VALUES
		(?)''',
		(id_token,))

	#If new character, add to character table
	c.execute('''INSERT OR REPLACE INTO characters 
		(char_name, id_token)
		VALUES
		(?,?)''',
		(data['Name'], id_token))

	#Update or create entry in char_entry table
	c.execute('''INSERT OR REPLACE INTO char_info(
		id_token,
		ideal,
		flaw,
		story,
		gender,
		height,
		race,
		alignment,
		class,
		fighting_style,
		background,
		--armor,
		--weapon,
		proficiency_mod,
		--ability,
		str,
		con,
		wis,
		dex,
		intel,
		chr,
		feat,
		char_name,
		traits,
		bonds,
		notable_traits,
		description,
		age,
		weight,
		sub_race,
		exp,
		archetype,
		level,
		hp,
		tool_prof,
		weapon_prof,
		skills,
		--saves,
		--equipment,
		platinum,
		gold,
		electrum,
		silver,
		copper,
		--money,
		available_spells,
		notes,
		languages)
		VALUES
		(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?^^,?,?,?,?,?,?,?)''',
		(
		id_token,
		data['ideal'],
		data['flaw'],
		data['story'],
		data['gender'],
		data['height'],
		data['race'],
		data['alignment'],
		data['class'],
		data['fighting_style'],
		data['background'],
		#data['armor'],
		#data['weapon'],
		data['proficiency_mod'],
		#data['ability'],
		data['str'],
		data['con'],
		data['wis'],
		data['dex'],
		data['int'],
		data['chr'],
		#data['spellcasting'],
		data['feat'],
		data['char_name'],
		data['traits'],
		data['bonds'],
		data['notable_traits'],
		data['description'],
		data['age'],
		data['weight'],
		data['sub_race'],
		data['exp'],
		data['archetype'],
		data['level'],
		data['hp'],
		data['tool_prof'],
		data['weapon_prof'],
		data['skills'],
		#data['saves'],
		#data['equipment'],
		data['platinum'],
		data['gold'],
		data['electrum'],
		data['silver'],
		data['copper'],
		#data['money'],
		data['available_spells'],
		data['notes'],
		data['languages'],
		))
	#commit changes to database
	conn.commit()

	#close connection to database, creation completed
	conn.close()

#Given a string 'id_token' representing the user, return a json object containing a list of that user's characters
def db_get_char_list(id_token):
	conn = sqlite3.connect('DnD.db')
	c = conn.cursor()

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")

	c.execute("SELECT char_name FROM characters WHERE id_token=?", (id_token,))
	char_list = c.fetchall()

	#export data
	#with open('char_list.json', 'w') as outfile:
	#	json.dump(char_list, outfile)

	#commit changes to database
	conn.commit()

	#close connection to database, creation completed
	conn.close()
	
	return json.dump(char_list)

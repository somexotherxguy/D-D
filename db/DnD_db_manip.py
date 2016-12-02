import sqlite3
import json
import ast

#Given an input string 'id_token' representing the user, and character name, output a json formatted string
#containing all data relevant to that id_token/character combo.
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
		'Feats': char_data['feats'],
		'Spells': char_data['spells'],
		'Abilities': char_data['abilities'],
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
		'Fighting Style': char_data['fighting_style'],
		'Background': char_data['background'],
		'Traits': char_data['traits'],
		'Bonds': char_data['bonds'],
		'Physical Description': char_data['description'],
		'Miscellaneous Notes': char_data['notes'],
		'Armor': char_data['armor'],
		'Weapons': char_data['weapons'],
		'Tools': char_data['tools'],
		'Platinum': char_data['platinum'],
		'Gold': char_data['gold'],
		'Electrum': char_data['electrum'],
		'Silver': char_data['silver'],
		'Copper': char_data['copper'],
		'Alignment': char_data['alignment']
		
		#'ideal': char_data['ideal'],
		#'flaw': char_data['flaw'],
		#'story': char_data['story'],
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
	#char_obj = str(char_obj)
	return json.dumps(char_obj)

#Given string 'id_token' representing a user, and input json formatted string, pull information into the database.
def db_char_push(id_token, info_string):
	conn = sqlite3.connect('DnD.db')
	c = conn.cursor()
	data = ast.literal_eval(info_string)
	#data = json.loads(info_string)

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")

	#If new user, add to table of user id_tokens
	c.execute("SELECT * FROM users WHERE id_token=?", (id_token))
	check = c.fetchall()
	if not check:
		c.execute('''REPLACE INTO users 
			(id_token)
			VALUES
			(?)''',
			(id_token,))

	#If new character, add to character table
	c.execute('''REPLACE INTO characters 
		(char_name, id_token)
		VALUES
		(?,?)''',
		(data['Name'], id_token))

	#Update or create entry in char_entry table
	c.execute('''REPLACE INTO char_info(
		id_token,
		str,
		con,
		wis,
		dex,
		intel,
		chr,
		hp,
		level,
		languages,
		feats,
		spells,
		abilities,
		tool_prof,
		weapon_prof,
		char_name,
		age,
		height,
		weight,
		gender,
		race,
		class,
		archetype,
		fighting_style,
		background,
		traits,
		bonds,
		description,
		notes,
		armor,
		weapons,
		tools,
		platinum,
		gold,
		electrum,
		silver,
		copper,
		alignment

		--ideals,
		--flaws,
		--backstory,
		--alignment,
		--exp,
		--sub-race,
		--prof_mod
		)
		VALUES
		(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)''',
		(
		id_token,
		data['Str'],
		data['Con'],
		data['Wis'],
		data['Dex'],
		data['Int'],
		data['Char'],
		data['HP'],
		data['Level'],
		data['Languages'],
		data['Feats'],
		data['Spells'],
		data['Abilities'],
		data['Tool Proficiencies'],
		data['Weapon Proficiencies'],
		data['Name'],
		data['Age'],
		data['Height'],
		data['Weight'],
		data['Gender'],
		data['Race'],
		data['Class'],
		data['Archetype'],
		data['Fighting Style'],
		data['Background'],
		data['Traits'],
		data['Bonds'],
		data['Physical Description'],
		data['Miscellaneous Notes'],
		data['Armor'],
		data['Weapons'],
		data['Tools'],
		data['Platinum'],
		data['Gold'],
		data['Electrum'],
		data['Silver'],
		data['Copper'],
		data['Alignment']
		))
	#commit changes to database
	conn.commit()

	#close connection to database, creation completed
	conn.close()

#Given a string 'id_token' representing the user, return a json formatted string containing a list of that user's characters
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
	
	return json.dumps(char_list)

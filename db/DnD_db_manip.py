import sqlite3
import json

def db_char_pull(id_token, char_name):
	conn = sqlite3.connect('DnD.db')
	conn.row_factory = sqlite3.Row
	c = conn.cursor()

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")

	c.execute("SELECT * FROM char_info WHERE id_token=? AND char_name=?", (id_token, char_name))
	char_data = c.fetchone()

	c.execute("")

	char_obj = {
		'ideal': char_data['ideal'],
		'flaw': char_data['flaw'],
		'story': char_data['story'],
		'gender': char_data['gender'],
		'height': char_data['height'],
		'race': char_data['race'],
		'alignment': char_data['alignment'],
		'class': char_data['class'],
		'fighting_style': char_data['fighting_style'],
		'background': char_data['background'],
		#'armor': char_data['armor'],
		#'weapon': char_data['weapon'],
		'proficiency_mod': char_data['proficiency_mod'],
		#'ability': char_data['ability'],
		'str': char_data['str'],
		'con': char_data['con'],
		'wis': char_data['wis'],
		'dex': char_data['dex'],
		'int': char_data['intel'],
		'chr': char_data['chr'],
		#'spellcasting': char_data['spellcasting'],
		'feat': char_data['feat'],
		'char_name': char_name,
		'traits': char_data['traits'],
		'bonds': char_data['bonds'],
		'notable_traits': char_data['notable_traits'],
		'description': char_data['description'],
		'age': char_data['age'],
		'weight': char_data['weight'],
		'sub_race': char_data['sub_race'],
		'exp': char_data['exp'],
		'archetype': char_data['archetype'],
		'level': char_data['level'],
		'hp': char_data['hp'],
		'tool_prof': char_data['tool_prof'],
		'weapon_prof': char_data['weapon_prof'],
		'skills': char_data['skills'],
		#'saves': char_data['saves'],
		#'equipment': char_data['equipment'],
		'platinum': char_data['platinum'],
		'gold': char_data['gold'],
		'electrum': char_data['electrum'],
		'silver': char_data['silver'],
		'copper': char_data['copper'],
		#'money': char_data['money'],
		'available_spells': char_data['available_spells'],
		'notes': char_data['notes'],
		'languages': char_data['languages']
	}
	#export data
	with open('object.json', 'w') as outfile:
		json.dump(char_obj, outfile)
		
	#test
	#with open('test.json', 'w') as outfile:
	#	json.dump(char_obj, outfile)


	#commit changes to database
	conn.commit()

	#close connection to database, creation completed
	conn.close()

def db_char_push(id_token, data):
	conn = sqlite3.connect('DnD.db')
	c = conn.cursor()

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")

	#If new user, add to table of user id_tokens
	c.execute('''INSERT OR REPLACE INTO users 
		(id_token)
		VALUES
		(?)
	''',(id_token))

	#If new character, add to character table
	c.execute('''INSERT OR REPLACE INTO characters 
		(char_name, id_token)
		VALUES
		(?,?)
	''',(data['char_name'], id_token))

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
		proficiency_mod,
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
		platinum,
		gold,
		electrum,
		silver,
		copper,
		available_spells,
		notes,
		languages)
		VALUES
		(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)''',
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
		data['proficiency_mod'],
		data['str'],
		data['con'],
		data['wis'],
		data['dex'],
		data['int'],
		data['chr'],
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
		data['platinum'],
		data['gold'],
		data['electrum'],
		data['silver'],
		data['copper'],
		data['available_spells'],
		data['notes'],
		data['languages'],
		))
	#commit changes to database
	conn.commit()

	#close connection to database, creation completed
	conn.close()

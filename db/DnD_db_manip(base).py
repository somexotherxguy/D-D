import sqlite3
import json

conn = sqlite3.connect('DnD.db')
conn.row_factory = sqlite3.Row
c = conn.cursor()

#Enable foreign key support
c.execute("PRAGMA foreign_keys = ON")

#Query database for all character info given a username and character name.  Package as json output.
def db_character_pull(username, char_name):
	c.execute("SELECT * FROM char_info WHERE username=? AND char_name=?", (username, char_name))
	char_info = c.fetchone()
	
	#Fill in dictionary of character info to pass as json
	char_obj = {
		'ideal': char_info['ideal'],
		'flaw': char_info['flaw'],
		'story': char_info['backstory'],
		'gender': char_info['gender'],
		'height': char_info['height'],
		'race': char_info['race'],
		'alignment': char_info['alignment'],
		'class_name': char_info['class'],
		'fighting_style': char_info['fighting_style'],	#check how we handle this for other classes
		'background': char_info['background'],
		'language': char_info['languages'],
		'armor': char_info['armor'],
		'weapon': char_info['weapon'],
		'proficiency_mod': char_info['proficiency_mod'],
		'ability': char_info['ability'],
		'str': char_info['str'],
		'con': char_info['con'],
		'wis': char_info['wis'],
		'dex': char_info['dex'],
		'int': char_info['intel'],
		'chr': char_info['chr'],
		'spellcasting': char_info['spellcasting'],
		'feat': char_info['feats'],
		'char_name': char_name,
		'traits': char_info['traits'],
		'bonds': char_info['bonds'],
		'notable_traits': char_info['notable_traits'],
		'description': char_info['description'],
		'age': char_info['age'],
		'weight': char_info['weight'],
		'sub_race': char_info['sub_race'],
		'exp': char_info['exp'],
		'archetype': char_info['archetype'],
		'level': char_info['level'],
		'hp': char_info['hp'],
		'tool_prof': char_info['tool_prof'],
		'weapon_prof': char_info['weapon_prof'],
		'skills': char_info['skills'],
		'saves': char_info['saves'],
		'equipment': char_info['equipment'],
		#'platinum': char_info['platinum'],
		#'gold': char_info['gold'],
		#'electrum': char_info['electrum'],
		#'silver': char_info['silver'],
		#'copper': char_info['copper'],
		'money': char_info['money'],
		'available_spells': char_info['available_spells'],
		'notes': char_info['notes']
	}

	#export data
	with open('object.json', 'w') as outfile:
		json.dump(char_obj, outfile)

#FIX THIS
def db_char_update(username, char_name):
	#import data
	with open('object.json', 'r') as infile:
		data = json.load(infile)

	c.execute('''UPDATE char_info SET 
		ideal=?, flaw=?, backstory=?, gender=?, height=?, race=?, alignment=?, class=?, fighting_style=?, background=?, languages=?, armor=?, weapon=?, proficiency_mod=?, ability=?, str=?, con=?, wis=?, dex=?, intel=?, chr=?, spellcasting=?, feats=?, char_name=?, traits=?, bonds=?, notable_traits=?, description=?, age=?, weight=?, sub_race=?, exp=?, archetype=?, level=?, hp=?, tool_prof=?, weapon_prof=?, skills=?, saves=?, equipment=?, money=?, available_spells=?, notes=?''', 
		(data['ideal'], data['flaw'], data['story'], data['gender'], data['height'], data['race'], data['alignment'], data['class_name'], data['fighting_style'], data['background'], data['language'], data['armor'], data['weapon'], data['proficiency_mod'], data['ability'], data['str'], data['con'], data['wis'], data['dex'], data['int'], data['chr'], data['spellcasting'], data['feat'], data['char_name'], data['traits'], data['bonds'], data['notable_traits'], data['description'], data['age'], data['weight'], data['sub_race'], data['exp'], data['archetype'], data['level'], data['hp'], data['tool_prof'], data['weapon_prof'], data['skills'], data['saves'], data['equipment'], data['money'], data['available_spells'], data['notes']))
	
	conn.commit()

#Given a username, email, and password, creates an entry in the 'users' database table for a new account
def db_account_create(username, user_email, password):
	c.execute("INSERT INTO users(username, user_email, user_pw) VALUES (?,?,?)", (username, user_email, password))

#assuming we take full character creation before submitting into the database.  If we just take a name, then we can skip the series of inserts
def db_add_character(username):
	#import data
	with open('object.json', 'r') as infile:
		data = json.load(infile)

	#Create new entry in 'characters' table
	c.execute("INSERT INTO characters(char_name, username) VALUES (?,?)", (data['char_name'], username))  
	
	#Input values for new character in 'char_info' table
	c.execute('''INSERT INTO 
		char_info(username, ideal, flaw, backstory, gender, height, race, alignment, class, fighting_style, background, languages, armor, weapon, proficiency_mod, ability, str, con, wis, dex, intel, chr, spellcasting, feats, char_name, traits, bonds, notable_traits, description, age, weight, sub_race, exp, archetype, level, hp, tool_prof, weapon_prof, skills, saves, equipment, money, available_spells, notes) 
		VALUES
		(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)''',
		(username, data['ideal'], data['flaw'], data['story'], data['gender'], data['height'], data['race'], data['alignment'], data['class_name'], data['fighting_style'], data['background'], data['language'], data['armor'], data['weapon'], data['proficiency_mod'], data['ability'], data['str'], data['con'], data['wis'], data['dex'], data['int'], data['chr'], data['spellcasting'], data['feat'], data['char_name'], data['traits'], data['bonds'], data['notable_traits'], data['description'], data['age'], data['weight'], data['sub_race'], data['exp'], data['archetype'], data['level'], data['hp'], data['tool_prof'], data['weapon_prof'], data['skills'], data['saves'], data['equipment'], data['money'], data['available_spells'], data['notes']))
	conn.commit()
	
def db_get_char_list(username):
	c.execute("SELECT * from characters WHERE username=?", (username))
	#return/output code, decide how we want to handle

#commit changes to database
conn.commit()

#close connection to database, creation completed
conn.close()

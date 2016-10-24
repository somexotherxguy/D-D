#edit tables based on what website has slots for, comment out other stuff?
#edit dummy inserts based on what is changed

import sqlite3
conn = sqlite3.connect('DnD.db')

c = conn.cursor()

#Enable foreign key support
c.execute("PRAGMA foreign_keys = ON")

#Create all database tables
c.execute('''CREATE TABLE users(
	username TEXT NOT NULL,
	user_pw TEXT NOT NULL,
	#player_name TEXT NOT NULL,

	PRIMARY KEY (username)
)''')

c.execute('''CREATE TABLE characters(
	char_name TEXT NOT NULL,
	username TEXT,

	PRIMARY KEY (char_name),
	FOREIGN KEY (user) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE char_info(
	username TEXT NOT NULL,
	ideal TEXT,
	flaw TEXT,
	backstory TEXT,
	gender TEXT NOT NULL,
	height INTEGER NOT NULL,
	race TEXT NOT NULL,
	alignment TEXT NOT NULL,
	class TEXT NOT NULL,
	fighting_style TEXT, 	#??????????????????????
	background TEXT, 		#?????????? same as backstory?
	proficiency_mod INTEGER,
	str INTEGER NOT NULL,
	con INTEGER NOT NULL,
	wis INTEGER NOT NULL,
	dex INTEGER NOT NULL,
	intel INTEGER NOT NULL,
	chr INTEGER NOT NULL,
	feats TEXT,
	char_name TEXT NOT NULL,
	traits TEXT,			#personality
	bonds TEXT,
	notable_traits TEXT,	#features_traits
	description TEXT, 		#??????????????????
	age INTEGER,
	weight INTEGER NOT NULL,
	sub_race TEXT,
	exp INTEGER NOT NULL,
	archetype TEXT NOT NULL,	#???
	level INTEGER NOT NULL,
	hp INTEGER NOT NULL,
	tool_prof TEXT NOT NULL,
	weapon_prof TEXT NOT NULL,
	skills TEXT NOT NULL,
	platinum INTEGER,
	gold INTEGER,
	electrum INTEGER,		#????
	silver INTEGER,
	copper INTEGER,
	available_spells TEXT NOT NULL,
	notes TEXT,				#????
	languages TEXT NOT NULL,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''')

#commit changes to database
conn.commit()

#close connection to database, creation completed
conn.close()
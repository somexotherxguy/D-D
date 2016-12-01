import sqlite3

conn = sqlite3.connect('DnD.db')
c = conn.cursor()

#Enable foreign key support
c.execute("PRAGMA foreign_keys = ON")

c.execute('''CREATE TABLE IF NOT EXISTS users(
	id_token TEXT NOT NULL,

	PRIMARY KEY (id_token)
)''')

c.execute('''CREATE TABLE IF NOT EXISTS characters(
	char_name TEXT NOT NULL,
	id_token TEXT NOT NULL,

	PRIMARY KEY (char_name),
	FOREIGN KEY (id_token) REFERENCES users(id_token) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE IF NOT EXISTS char_info(
	id_token TEXT NOT NULL,
	ideal TEXT,
	flaw TEXT,
	story TEXT,
	gender TEXT NOT NULL,
	height INTEGER NOT NULL,
	race TEXT NOT NULL,
	alignment TEXT NOT NULL,
	class TEXT NOT NULL,
	fighting_style TEXT,
	background TEXT,
	proficiency_mod INTEGER,
	str INTEGER NOT NULL,
	con INTEGER NOT NULL,
	wis INTEGER NOT NULL,
	dex INTEGER NOT NULL,
	intel INTEGER NOT NULL,
	chr INTEGER NOT NULL,
	feat TEXT,
	char_name TEXT NOT NULL,
	traits TEXT,
	bonds TEXT,
	notable_traits TEXT,
	description TEXT,
	age INTEGER,
	weight INTEGER NOT NULL,
	sub_race TEXT,
	exp INTEGER NOT NULL,
	archetype TEXT NOT NULL,
	level INTEGER NOT NULL,
	hp INTEGER NOT NULL,
	tool_prof TEXT NOT NULL,
	weapon_prof TEXT NOT NULL,
	skills TEXT NOT NULL,
	platinum INTEGER,
	gold INTEGER,
	electrum INTEGER,
	silver INTEGER,
	copper INTEGER,
	available_spells TEXT NOT NULL,
	notes TEXT,
	languages TEXT NOT NULL,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (id_token) REFERENCES users(id_token) ON DELETE CASCADE
)''')

#commit changes to database
conn.commit()

#close connection to database, creation completed
conn.close()
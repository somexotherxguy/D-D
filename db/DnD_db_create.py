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
	str INTEGER,
	con INTEGER,
	wis INTEGER,
	dex INTEGER,
	intel INTEGER,
	chr INTEGER,
	hp INTEGER,
	level INTEGER,
	languages TEXT,
	feats TEXT,
	spells TEXT,
	abilities TEXT,
	tool_prof TEXT,
	weapon_prof TEXT,
	char_name TEXT NOT NULL,
	age INTEGER,
	height INTEGER,
	weight INTEGER,
	gender TEXT,
	race TEXT,
	class TEXT,
	archetype TEXT,
	fighting_style TEXT,
	background TEXT,
	traits TEXT,
	bonds TEXT,
	description TEXT,
	notes TEXT,
	armor TEXT,
	weapons TEXT,
	tools TEXT,
	platinum INTEGER,
	gold INTEGER,
	electrum INTEGER,
	silver INTEGER,
	copper INTEGER,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (id_token) REFERENCES users(id_token) ON DELETE CASCADE
)''')

#commit changes to database
conn.commit()

#close connection to database, creation completed
conn.close()

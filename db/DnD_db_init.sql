--PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users(
	username TEXT NOT NULL,
	user_pw TEXT NOT NULL,
	user_email TEXT NOT NULL,

	PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS characters(
	char_name TEXT NOT NULL,
	username TEXT,

	PRIMARY KEY (char_name),
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS char_info(
	username TEXT NOT NULL,
	ideal TEXT,
	flaw TEXT,
	backstory TEXT,
	gender TEXT NOT NULL,
	height INTEGER NOT NULL,
	race TEXT NOT NULL,
	alignment TEXT NOT NULL,
	class TEXT NOT NULL,
	fighting_style TEXT,
	background TEXT,
	languages TEXT NOT NULL,
	armor TEXT,
	weapon TEXT,
	proficiency_mod INTEGER,
	ability TEXT NOT NULL,
	str INTEGER NOT NULL,
	con INTEGER NOT NULL,
	wis INTEGER NOT NULL,
	dex INTEGER NOT NULL,
	intel INTEGER NOT NULL,
	chr INTEGER NOT NULL,
	spellcasting TEXT,
	feats TEXT,
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
	saves TEXT NOT NULL,
	equipment TEXT,
	--platinum INTEGER,
	--gold INTEGER,
	--electrum INTEGER,
	--silver INTEGER,
	--copper INTEGER,
	money INTEGER NOT NULL,
	available_spells TEXT NOT NULL,
	notes TEXT,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
);

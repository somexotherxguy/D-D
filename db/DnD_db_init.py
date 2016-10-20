import sqlite3
conn = sqlite3.connect('DnD.db')

c = conn.cursor()

#Enable foreign key support
c.execute("PRAGMA foreign_keys = ON")

#Create all database tables
c.execute('''CREATE TABLE users(
	username TEXT NOT NULL,
	user_pw TEXT NOT NULL,
	player_name TEXT NOT NULL,

	PRIMARY KEY (username)
)''')

c.execute('''CREATE TABLE characters(
	char_name TEXT NOT NULL,
	user TEXT,

	PRIMARY KEY (char_name),
	FOREIGN KEY (user) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE basic_info(
	char_name TEXT NOT NULL,
	username TEXT NOT NULL,
	level INT,
	race TEXT NOT NULL,
	alignment TEXT,
	exp INT,
	age INT,
	height INT NOT NULL,
	weight INT NOT NULL,
	eyes TEXT NOT NULL,
	skin TEXT NOT NULL,
	hair TEXT NOT NULL,
	hp_total INT,
	hp_current INT,
	hp_temp INT,
	hit_die INT,
	armor_class INT,
	initiative INT,
	speed INT,
	Inspiration BOOLEAN NOT NULL,
	prof INT,
	melee_mod INT,
	range_mod INT,
	
	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE deathsaves(
	char_name TEXT NOT NULL,
	username TEXT NOT NULL,
	successes INT,
	failures INT,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE attributes(
	char_name TEXT NOT NULL,
	username TEXT NOT NULL,
	str INT,
	dex INT,
	con INT,
	intel INT,
	wis INT,
	cha INT,
	str_mod INT,
	dex_mod INT,
	con_mod INT,
	intel_mod INT,
	wis_mod INT,
	cha_mod INT,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE skills(
	char_name TEXT NOT NULL,
	username TEXT NOT NULL,
	acro INT,
	ani_hand INT,
	arcana INT,
	athl INT,
	decep INT,
	hist INT,
	insight INT,
	intim INT,
	invest INT,
	medi INT,
	nat INT,
	percep INT,
	perform INT,
	pers INT,
	reli INT,
	soh INT,
	stealth INT,
	survival INT,
	pass_invest INT,
	pass_insight INT,
	pass_percep INT,
	acro_prof BOOLEAN NOT NULL,
	ani_hand_prof BOOLEAN NOT NULL,
	arcana_prof BOOLEAN NOT NULL,
	athl_prof BOOLEAN NOT NULL,
	decep_prof BOOLEAN NOT NULL,
	hist_prof BOOLEAN NOT NULL,
	insight_prof BOOLEAN NOT NULL,
	intim_prof BOOLEAN NOT NULL,
	invest_prof BOOLEAN NOT NULL,
	medi_prof BOOLEAN NOT NULL,
	nat_prof BOOLEAN NOT NULL,
	percep_prof BOOLEAN NOT NULL,
	perform_prof BOOLEAN NOT NULL,
	pers_prof BOOLEAN NOT NULL,
	reli_prof BOOLEAN NOT NULL,
	soh_prof BOOLEAN NOT NULL,
	stealth_prof BOOLEAN NOT NULL,
	survival_prof BOOLEAN NOT NULL,
	pass_invest_prof BOOLEAN NOT NULL,
	pass_insight_prof BOOLEAN NOT NULL,
	pass_percep_prof BOOLEAN NOT NULL,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE background(
	char_name TEXT NOT NULL,
	username TEXT NOT NULL,
	personality TEXT,
	ideals TEXT,
	bonds TEXT,
	flaws TEXT,
	features_traits TEXT,
	feats TEXT,
	languages TEXT,
	tool_prof TEXT,
	backstory TEXT,
	weap_prof TEXT,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE equipment_treasure(
	char_name TEXT NOT NULL,
	username TEXT NOT NULL,
	equip TEXT,
	treasure TEXT,
	plat INT,
	gold INT,
	silver INT,
	copper INT,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE saves(
	char_name TEXT NOT NULL,
	username TEXT NOT NULL,
	str_save INT,
	dex_save INT,
	con_save INT,
	intel_save INT,
	wis_save INT,
	cha_save int
	str_prof BOOLEAN NOT NULL,
	dex_prof BOOLEAN NOT NULL,
	con_prof BOOLEAN NOT NULL,
	intel_prof BOOLEAN NOT NULL,
	wis_prof BOOLEAN NOT NULL,
	cha_prof BOOLEAN NOT NULL,

	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''')

c.execute('''CREATE TABLE class (
	char_name TEXT NOT NULL,
	username TEXT NOT NULL,
	rage INT,
	inspiration_die INT,
	beast_shifts INT,
	action_surges INT,
	superiority_die INT,
	channeled_div INT,
	ki_points INT,
	lay_on_hands INT,
	sorceror_points INT,
	invocations INT,
	cantrip_slots INT,
	one_slot INT,
	two_slot INT,
	three_slot INT,
	four_slot INT,
	five_slot INT,
	six_slot INT,
	seven_slot INT,
	eight_slot INT,
	nine_slot INT,
	spells_known INT,
	
	FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE,
	FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
)''') 

c.execute('''CREATE TABLE feats (
	feat_name TEXT NOT NULL,
	description TEXT NOT NULL
)''')

c.execute('''CREATE TABLE class_features(
	class TEXT NOT NULL,
	level INT,
	feature_name TEXT NOT NULL,
	description varchar(3000) NOT NULL
)''')

#commit changes to database
conn.commit()

#close connection to database, creation completed
conn.close()
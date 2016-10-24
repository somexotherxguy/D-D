PRAGMA foreign_keys = ON;

INSERT INTO users(username, user_pw) 
VALUES ('test', 'password');

INSERT INTO characters(char_name, username)
VALUES ('testchar', 'test');

INSERT INTO char_info(username, ideal, flaw, backstory, gender, height, race, alignment, class, fighting_style, background, proficiency_mod, str, con, wis, dex, intel, chr, feats, char_name, traits, bonds, notable_traits, description, age, weight, sub_race, exp, archetype, level, hp, tool_prof, weapon_prof, skills, platinum, gold, electrum, silver, copper, available_spells, notes, languages) 
VALUES ('test', 'some ideals', 'some flaws', 'backstory', 'male', 72, 'Man', 'Neutral', 'fighter', 'Duelist', 'background', 0, 10, 10, 10, 10, 10, 10, 'feats', 'testchar', 'some traits', 'some bonds', 'some notable traits', 'desription', 25, 190, 'sub-race', 10, 'archetype', 10, 100, 'some tools', 'axes', 'much skills', 10, 10, 10, 10, 10, 'Spelly spells', 'git gud', 'People-speak');


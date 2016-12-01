import sqlite3 
conn = sqlite3.connect('DnD.db')

c = conn.cursor()

#Enable foreign key support
c.execute("PRAGMA foreign_keys = ON")

#Insert table values
"""
c.execute('''INSERT INTO 
	users(username, user_pw, player_name) 
	VALUES 
	('Sean_test', 'test', 'Sean L')
''')

c.execute('''INSERT INTO 
	characters(char_name, user)
	VALUES 
	('Liekki', 'Sean_test')
''')

c.execute('''INSERT INTO 
	basic_info(char_name, username, level, race, alignment, exp, age, height, weight, eyes, skin, hair, hp_total, hp_current, hp_temp, hit_die, armor_class, initiative, speed, inspiration, prof, melee_mod, range_mod) 
	VALUES('Liekki', 'Sean_test', 15, 'Fire Genasi', 'Neutral Evil', 0, 26, 71, 195, 'Orange', 'Red', 'Orange', 97, 97, 0, 15, 16, 3, 30, 0, 5, 6, 8)
''')

c.execute('''INSERT INTO
	deathsaves(char_name, username, successes, failures)
	VALUES
	('Liekki', 'Sean_test', 0, 0)
''')

c.execute('''INSERT INTO
	attributes(char_name, username, str, dex, con, intel, wis, cha, str_mod, dex_mod, con_mod, intel_mod, wis_mod, cha_mod)
	VALUES
	('Liekki', 'Sean_test', 12, 16, 16, 13, 14, 18, 1, 3, 3, 1, 2, 4)
''')

c.execute('''INSERT INTO
	skills(char_name, username, acro, ani_hand, arcana, athl, decep, hist, insight, intim, invest, medi, nat, percep, perform, pers, reli, soh, stealth, survival, pass_invest, pass_insight, pass_percep, acro_prof, ani_hand_prof, arcana_prof, athl_prof, decep_prof, hist_prof, insight_prof, intim_prof, invest_prof, medi_prof, nat_prof, percep_prof, perform_prof, pers_prof, reli_prof, soh_prof, stealth_prof, survival_prof, pass_invest_prof, pass_insight_prof, pass_percep_prof)
	VALUES
	('Liekki', 'Sean_test', 3, 2, 6, 1, 9, 1, 2, 9, 1, 2, 1, 7, 4, 4, 1, 3, 3, 2, 11, 12, 16, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,2,2,2)
''')

c.execute('''INSERT INTO
	background(char_name, username, personality, ideals, bonds, flaws, features_traits, feats, languages, tool_prof, backstory, weap_prof)
	VALUES
	('Liekki', 'Sean_test', 'short temper', 'None', 'None', 'typical evil things', 'Darkvision, Fire Resistance, Fire Genasi Race Spells, Sorcery Points, Heightened Spell, Quickened Spell, Twinned Spell, Dragon Ancestor, Draconic Resilience, Elemental Affinity, Dragon Wings', 'War Caster, Elemental Adept (Fire)', 'Common, Ignan, Draconic', 'None', 'So deep you could drown in it', 'Simple, Martial')

''')

c.execute('''INSERT INTO
	equipment_treasure(char_name, username, equip, treasure, plat, gold, silver, copper)
	VALUES
	('Liekki', 'Sean_test', 'Stuff', 'Stuff', 0, 0, 0, 0)
''')

c.execute('''INSERT INTO
	saves(char_name, username, str_save, dex_save, con_save, intel_save, wis_save, cha_save, str_prof, dex_prof, con_prof, intel_prof, wis_prof, cha_prof)
	VALUES
	('Liekki', 'Sean_test', 1, 3, 8, 1, 2, 9, 0, 0, 1, 0, 0, 1)
''')
"""
c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	('Alert', 'Always on the lookout for danger, you gain the
	following benefits:
	• You gain a +5 bonus to initiative.
	• You can't be surprised while you are conscious.
	• Other creatures don't gain advantage on attack rolls
	against you as a result of being hidden from you.')
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Athlete", "You have undergone extensive physical training to gain
	the following benefits:
	• Increase your Strength or Dexterity score by 1, to a
	maximum o f 20.
	• When you are prone, standing up uses only 5 feet of
	your movement.
	• Climbing doesn't halve your speed.
	• You can make a running long jump or a running high
	jump after moving only 5 feet on foot, rather than
	10 feet.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Actor", "Skilled at mimicry and dramatics, you gain the
	following benefits:
	• Increase your Charisma score by 1, to a maximum of 20.
	• You have advantage on Charisma (Deception) and
	Charisma (Performance) checks when trying to pass
	yourself off as a different person.
	• You can mimic the speech of another person or the
	sounds made by other creatures. You must have
	heard the person speaking, or heard the creature
	make the sound, for at least 1 minute. A successful
	Wisdom (Insight) check contested by your Charisma
	(Deception) check allows a listener to determine that
	the effect is faked.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Charger", "When you use your action to Dash, you can use a
	bonus action to make one melee weapon attack or to
	shove a creature.
	If you move at least 10 feet in a straight line
	immediately before taking this bonus action, you either
	gain a +5 bonus to the attack's damage roll (if you chose
	to make a melee attack and hit) or push the target up
	to 10 feet away from you (if you chose to shove and
	you succeed).")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Crossbow Expert", "Thanks to extensive practice with the crossbow, you
	gain the following benefits:
	• You ignore the loading quality of crossbows with
	which you are proficient.
	• Being within 5 feet of a hostile creature doesn't
	impose disadvantage on your ranged attack rolls.
	• When you use the Attack action and attack with a onehanded
	w eapon, you can use a bonus action to attack
	with a loaded hand crossbow you are holding.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Defensive Duelist", "Prerequisite: Dexterity 13 or higher
	When you are wielding a finesse weapon with which
	you are proficient and another creature hits you with
	a melee attack, you can use your reaction to add your
	proficiency bonus to your AC for that attack, potentially
	causing the attack to miss you.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Dual Wielder", "You master fighting with two weapons, gaining the
	following benefits:
	• You gain a +1 bonus to AC while you are wielding a
	separate melee weapon in each hand.
	• You can use two-weapon fighting even when the onehanded
	melee weapons you are wielding aren't light.
	• You can draw or stow two one-handed weapons when
	you w ould normally be able to draw or stow only one.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Dungeon Delver", "Alert to the hidden traps and secret doors found in many
	dungeons, you gain the following benefits:
	• You have advantage on Wisdom (Perception) and
	Intelligence (Investigation) checks made to detect the
	presence o f secret doors.
	• You have advantage on saving throws made to avoid
	or resist traps.
	• You have resistance to the damage dealt by traps.
	• You can search for traps while traveling at a normal
	pace, instead of only at a slow pace.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Durable", "Hardy and resilient, you gain the following benefits:
	• Increase your Constitution score by 1, to a
	maximum of 20.
	• When you roll a Hit Die to regain hit points, the
	minimum number of hit points you regain from
	the roll equals twice your Constitution modifier
	(minimum of 2).")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Elemental Adept", "Prerequisite: The ability to cast at least one spell
	When you gain this feat, choose one of the following
	damage types: acid, cold, fire, lightning, or thunder.
	Spells you cast ignore resistance to damage of the
	chosen type. In addition, when you roll damage for a
	spell you cast that deals damage of that type, you can
	treat any 1 on a damage die as a 2.
	You can select this feat multiple times. Each time
	you do so, you must choose a different damage type.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Grappler", "Prerequisite: Strength 13 or higher
	You've developed the skills necessary to hold your
	own in close-quarters grappling. You gain the
	following benefits:
	• You have advantage on attack rolls against a creature
	you are grappling.
	• You can use your action to try to pin a creature grappled
	by you. To do so, make another grapple check. If
	you succeed, you and the creature are both restrained
	until the grapple ends.
	• Creatures that are one size larger than you don't automatically
	succeed on checks to escape your grapple.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Great Weapon Master", "You've learned to put the weight of a weapon to your
	advantage, letting its momentum empower your strikes.
	You gain the following benefits:
	• On your turn, when you score a critical hit with a
	melee weapon or reduce a creature to 0 hit points
	with one, you can make one melee weapon attack as a
	bonus action.
	• Before you make a melee attack with a heavy weapon
	that you are proficient with, you can choose to take a
	- 5 penalty to the attack roll. If the attack hits, you add
	+10 to the attack's damage.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Healer", "You are an able physician, allowing you to mend wounds
	quickly and get your allies back in the fight. You gain the
	following benefits:
	• When you use a healer's kit to stabilize a dying creature,
	that creature also regains 1 hit point.
	• As an action, you can spend one use of a healer's kit to
	tend to a creature and restore 1d6 + 4 hit points to it,
	plus additional hit points equal to the creature's maximum
	number of Hit Dice. The creature can't regain
	hit points from this feat again until it finishes a short
	or long rest.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Heavily Armored", "Prerequisite: Proficiency with medium armor
	You have trained to master the use of heavy armor,
	gaining the following benefits:
	• Increase your Strength score by 1, to a maximum of 20.
	• You gain proficiency with heavy armor.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Heavy Armor Master", "Prerequisite: Proficiency with heavy armor
	You can use your armor to deflect strikes that would kill
	others. You gain the following benefits:
	• Increase your Strength score by 1, to a maximum o f 20.
	• While you are wearing heavy armor, bludgeoning,
	piercing, and slashing damage that you take from non
	magical weapons is reduced by 3.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Inspiring Leader", "Prerequisite: Charisma 13 or higher
	You can spend 10 minutes inspiring your companions,
	shoring up their resolve to fight. When you do so, choose
	up to six friendly creatures (which can include yourself)
	within 30 feet of you who can see or hear you and w ho
	can understand you. Each creature can gain temporary
	hit points equal to your level + your Charisma modifier.
	A creature can't gain temporary hit points from this feat
	again until it has finished a short or long rest.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Keen Mind", "You have a mind that can track time, direction,
	and detail with uncanny precision. You gain the
	following benefits.
	• Increase your Intelligence score by 1, to a maximum
	of 20.
	• You always know which way is north.
	• You always know the number of hours left before the
	next sunrise or sunset.
	• You can accurately recall anything you have seen or
	heard within the past month.")
	''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Lightly Armored", "You have trained to master the use of light armor,
	gaining the following benefits:
	• Increase your Strength or Dexterity score by 1, to a
	maximum of 20.
	• You gain proficiency with light armor.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Linguist", "You have studied languages and codes, gaining the
	following benefits:
	• Increase your Intelligence score by 1, to a maximum of 20.
	• You learn three languages of your choice.
	• You can ably create written ciphers. Others can't decipher
	a code you create unless you teach them, they
	succeed on an Intelligence check (DC equal to your
	Intelligence score + your proficiency bonus), or they
	use magic to decipher it.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Lucky", "You have inexplicable luck that seems to kick in at just
	the right moment.
	You have 3 luck points. Whenever you make an attack
	roll, an ability check, or a saving throw, you can spend
	one luck point to roll an additional d20. You can choose
	to spend one of your luck points after you roll the die,
	but before the outcome is determined. You choose which
	of the d20s is used for the attack roll, ability check, or
	saving throw.
	You can also spend one luck point when an attack
	roll is made against you. Roll a d20, and then choose
	whether the attack uses the attacker's roll or yours.
	If more than one creature spends a luck point to
	influence the outcome of a roll, the points cancel each
	other out; no additional dice are rolled.
	You regain your expended luck points w hen you
	finish a long rest.")
	''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Mage Slayer", "You have practiced techniques useful in melee combat
	against spellcasters, gaining the following benefits:
	• When a creature within 5 feet of you casts a spell, you
	can use your reaction to make a melee weapon attack
	against that creature.
	• When you damage a creature that is concentrating on
	a spell, that creature has disadvantage on the saving
	throw it makes to maintain its concentration.
	• You have advantage on saving throws against spells
	cast by creatures within 5 feet of you.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Magic Initiate", "Choose a class: bard, cleric, druid, sorcerer, warlock, or
	wizard. You learn two cantrips of your choice from that
	class's spell list.
	In addition, choose one 1st-level spell from that same
	list. You learn that spell and can cast it at its lowest
	level. Once you cast it, you must finish a long rest before
	you can cast it again.
	Your spellcasting ability for these spells depends
	on the class you chose: Charisma for bard,
	sorcerer, or warlock; Wisdom for cleric or druid: or
	Intelligence for wizard.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Martial Adept", "You have martial training that allows you to
	perform special combat maneuvers. You gain the
	following benefits:
	• You learn two maneuvers of your choice from among
	those available to the Battle Master archetype in the
	fighter class. If a maneuver you use requires your target
	to make a saving throw to resist the maneuver's
	effects, the saving throw DC equals 8 + your proficiency
	bonus + your Strength or Dexterity modifier
	(your choice).
	• If you already have superiority dice, you gain one
	more; otherwise, you have one superiority die, which
	is a d6. This die is used to fuel your maneuvers. A
	superiority die is expended when you use it. You
	regain your expended superiority dice when you
	finish a short or long rest.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Medium Armor Master", "Prerequisite: Proficiency with medium armor
	You have practiced moving in medium armor to gain the
	following benefits:
	• Wearing medium armor doesn't impose disadvantage
	on your Dexterity (Stealth) checks.
	• When you wear medium armor, you can add 3,
	rather than 2, to your AC if you have a Dexterity of
	16 or higher")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Mobile", "You are exceptionally speedy and agile. You gain the
	following benefits:
	• Your speed increases by 10 feet.
	• When you use the Dash action, difficult terrain doesn't
	cost you extra movement on that turn.
	• When you make a melee attack against a creature, you
	don't provoke opportunity attacks from that creature
	for the rest of the turn, whether you hit or not.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Moderately Armored", "Prerequisite: Proficiency with light armor
	You have trained to master the use of medium armor
	and shields, gaining the following benefits:
	• Increase your Strength or Dexterity score by 1, to a
	maximum of 20.
	• You gain proficiency with medium armor and shields.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Mounted Combatant", "You are a dangerous foe to face while mounted. While
	you are mounted and aren't incapacitated, you gain the
	following benefits:
	• You have advantage on melee attack rolls against any
	unmounted creature that is smaller than your mount.
	• You can force an attack targeted at your mount to target
	you instead.
	• If your mount is subjected to an effect that allows it to
	make a Dexterity saving throw to take only half damage,
	it instead takes no damage if it succeeds on the
	saving throw, and only half damage if it fails.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Observant", "Quick to notice details of your environment, you gain
	the following benefits:
	• Increase your Intelligence or Wisdom score by 1, to a
	maximum of 20.
	• If you can see a creature's mouth while it is speaking
	a language you understand, you can interpret what it's
	saying by reading its lips.
	• You have a +5 bonus to your passive Wisdom
	(Perception) and passive Intelligence (Investigation)
	scores.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Polearm Master", "You can keep your enemies at bay with reach weapons.
	You gain the following benefits:
	• When you take the Attack action and attack with only
	a glaive, halberd, or quarterstaff, you can use a bonus
	action to make a melee attack with the opposite end of
	the weapon. The weapon's damage die for this attack
	is a d4, and the attack deals bludgeoning damage.
	• While you are wielding a glaive, halberd, pike, or quarterstaff,
	other creatures provoke an opportunity attack
	from you when they enter your reach.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Resilient", "Choose one ability score. You gain the following benefits:
	• Increase the chosen ability score by 1, to a maximum
	of 20.
	• You gain proficiency in saving throws using the
	chosen ability.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Ritual Caster", "Prerequisite: Intelligence or Wisdom 13 or higher
	You have learned a number of spells that you can cast as
	rituals. These spells are written in a ritual book, which
	you must have in hand while casting one of them.
	When you choose this feat, you acquire a ritual book
	holding two 1st-level spells of your choice. Choose one
	of the following classes: bard, cleric, druid, sorcerer,
	warlock, or wizard. You must choose your spells
	from that class's spell list, and the spells you choose
	must have the ritual tag. The class you choose also
	determines your spellcasting ability for these spells:
	Charisma for bard, sorcerer, or warlock; Wisdom for
	cleric or druid; or Intelligence for wizard.
	If you come across a spell in written form, such as a
	magical spell scroll or a wizard's spellbook, you might
	be able to add it to your ritual book. The spell must be
	on the spell list for the class you chose, the spell's level
	can be no higher than half your level (rounded up), and
	it must have the ritual tag. The process of copying the
	spell into your ritual book takes 2 hours per level of the
	spell, and costs 50 gp per level. The cost represents
	material components you expend as you experiment
	with the spell to master it, as well as the fine inks you
	need to record it.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Savage Attacker", "Once per turn when you roll damage for a melee weapon
	attack, you can reroll the weapon's damage dice and use
	either total.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Sentinel", "You have mastered techniques to take advantage
	of every drop in any enemy's guard, gaining the
	following benefits:
	• When you hit a creature with an opportunity attack,
	the creature's speed becomes 0 for the rest of
	the turn.
	• Creatures within 5 feet of you provoke opportunity
	attacks from you even if they take the Disengage
	action before leaving your reach.
	• When a creature within 5 feet of you makes an attack
	against a target other than you (and that target doesn't
	have this feat), you can use your reaction to make a
	melee weapon attack against the attacking creature.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Sharpshooter", "You have mastered ranged weapons and can make
	shots that others find impossible. You gain the
	following benefits:
	• Attacking at long range doesn't impose disadvantage
	on your ranged weapon attack rolls.
	• Your ranged weapon attacks ignore half cover and
	three-quarters cover.
	• Before you make an attack with a ranged weapon that
	you are proficient with, you can choose to take a - 5
	penalty to the attack roll. If the attack hits, you add +10
	to the attack's damage.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Shield Master", "You use shields not just for protection but also for
	offense. You gain the following benefits while you are
	wielding a shield:
	• If you take the Attack action on your turn, you can use
	a bonus action to try to shove a creature within 5 feet
	of you with your shield.
	• If you aren't incapacitated, you can add your shield's AC
	bonus to any Dexterity saving throw you make against
	a spell or other harmful effect that targets only you.
	• If you are subjected to an effect that allows you to
	make a Dexterity saving throw to take only half damage,
	you can use your reaction to take no damage if
	you succeed on the saving throw, interposing your
	shield between yourself and the source of the effect.")
''')

c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Skilled", "You gain proficiency in any combination of three skills
	or tools of your choice.")
''')


c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Skulker", "Prerequisite: Dexterity 13 or higher
	You are expert at slinking through shadows. You gain
	the following benefits:
	• You can try to hide when you are lightly obscured
	from the creature from which you are hiding.
	• When you are hidden from a creature and miss it with
	a ranged weapon attack, making the attack doesn't
	reveal your position.
	• Dim light doesn't impose disadvantage on your
	Wisdom (Perception) checks relying on sight.")
''')


c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Spell Sniper", "Prerequisite: The ability to cast at least one spell
	You have learned techniques to enhance your
	attacks with certain kinds of spells, gaining the
	following benefits:
	• When you cast a spell that requires you to make an
	attack roll, the spell's range is doubled.
	• Your ranged spell attacks ignore half cover and
	three-quarters cover.
	• You learn one cantrip that requires an attack roll.
	Choose the cantrip from the bard, cleric, druid, sorcerer,
	warlock, or wizard spell list. Your spellcasting
	ability for this cantrip depends on the spell list you
	chose from: Charisma for bard, sorcerer, or warlock;
	Wisdom for cleric or druid; or Intelligence for wizard.")
''')


c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Tavern Brawler", "Accustomed to rough-and-tumble fighting using
	whatever weapons happen to be at hand, you gain the
	following benefits:
	• Increase your Strength or Constitution score by 1,
	to a maximum of 20.
	• You are proficient with improvised weapons and
	unarmed strikes.
	• Your unarmed strike uses a d4 for damage.
	• When you hit a creature with an unarmed strike or an
	improvised weapon on your turn, you can use a bonus
	action to attempt to grapple the target.")
''')


c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Tough", "Your hit point maximum increases by an amount equal
	to twice your level when you gain this feat. Whenever
	you gain a level thereafter, your hit point maximum
	increases by an additional 2 hit points.")
''')


c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("War Caster", "Prerequisite: The ability to cast at least one spell
	You have practiced casting spells in the midst of
	combat, learning techniques that grant you the
	following benefits:
	• You have advantage on Constitution saving throws
	that you make to maintain your concentration on a
	spell when you take damage.
	• You can perform the somatic components of spells
	even when you have weapons or a shield in one or
	both hands.
	• When a hostile creature's movement provokes an
	opportunity attack from you, you can use your reaction
	to cast a spell at the creature, rather than making
	an opportunity attack. The spell must have a casting
	time of 1 action and must target only that creature.")
''')


c.execute('''INSERT INTO
	feats(feat_name, description)
	VALUES
	("Weapon Master", "You have practiced extensively with a variety of
	weapons, gaining the following benefits:
	• Increase your Strength or Dexterity score by 1, to a
	maximum of 20.
	• You gain proficiency with four weapons of your choice.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 1, "Rage", "In battle, you fight with primal ferocity. On your turn,
	you can enter a rage as a bonus action.
	While raging, you gain the following benefits if you
	aren't wearing heavy armor:
	• You have advantage on Strength checks and Strength
	saving throws.
	• When you make a melee weapon attack using
	Strength, you gain a bonus to the damage roll that
	increases as you gain levels as a barbarian, as shown
	in the Rage Damage column of the Barbarian table.
	• You have resistance to bludgeoning, piercing, and
	slashing damage.
	If you are able to cast spells, you can't cast them or
	concentrate on them while raging.
	Your rage lasts for 1 minute. It ends early if you are
	knocked unconscious or if your turn ends and you
	haven't attacked a hostile creature since your last turn
	or taken damage since then. You can also end your rage
	on your turn as a bonus action.
	Once you have raged the number of times shown
	for your barbarian level in the Rages column of the
	Barbarian table, you must finish a long rest before you
	can rage again.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 1, "Unarmored Defense", "While you are not wearing any armor, your Armor Class
	equals 10 + your Dexterity modifier + your Constitution
	modifier. You can use a shield and still gain this benefit.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 2, "Reckless Attack", "Starting at 2nd level, you can throw aside all concern
	for defense to attack with fierce desperation. When
	you make your first attack on your turn, you can decide
	to attack recklessly. Doing so gives you advantage on
	melee weapon attack rolls using Strength during this
	turn, but attack rolls against you have advantage until
	your next turn.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 2, "Danger Sense", "At 2nd level, you gain an uncanny sense o f when things
	nearby aren't as they should be, giving you an edge
	when you dodge away from danger.
	You have advantage on Dexterity saving throws
	against effects that you can see, such as traps and spells.
	To gain this benefit, you can't be blinded, deafened, or
	incapacitated.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 3, "Primal Path", "At 3rd level, you choose a path that shapes the nature of
	your rage. Choose the Path of the Berserker or the Path
	of the Totem Warrior, both detailed at the end of the
	class description. Your choice grants you features at 3rd
	level and again at 6th, 10th, and 14th levels.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 4, "Ability Score Improvement", "When you reach 4th level, and again at 8th, 12th, 16th,
	and 19th level, you can increase one ability score of your
	choice by 2, or you can increase two ability scores of
	your choice by 1. As normal, you can't increase an ability
	score above 20 using this feature.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 5, "Extra Attack", "Beginning at 5th level, you can attack twice, instead of
	once, whenever you take the Attack action on your turn.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 5, "Fast Movement", "Starting at 5th level, your speed increases by 10 feet
	while you aren't wearing heavy armor.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 7, "Feral Instinct", "By 7th level, your instincts are so honed that you have
	advantage on initiative rolls.
	Additionally, if you are surprised at the beginning of
	combat and aren't incapacitated, you can act normally
	on your first turn, but only if you enter your rage before
	doing anything else on that turn.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 9, "Brutal Critical", "Beginning at 9th level, you can roll one additional
	weapon damage die when determining the extra
	damage for a critical hit with a melee attack.
	This increases to two additional dice at 13th level
	and three additional dice at 17th level.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 11, "Relentless Rage", "Starting at 11th level, your rage can keep you fighting
	despite grievous wounds. If you drop to 0 hit points
	while you're raging and don't die outright, you can make
	a DC 10 Constitution saving throw. If you succeed, you
	drop to 1 hit point instead.
	Each time you use this feature after the first, the DC
	increases by 5. When you finish a short or long rest, the
	DC resets to 10.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 15, "Persistant Rage", "Beginning at 15th level, your rage is so fierce that
	it ends early only if you fall unconscious or if you
	choose to end it.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 18, "Indomitable Might", "Beginning at 18th level, if your total for a Strength
	check is less than your Strength score, you can use that
	score in place of the total.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Barbarian", 20, "Primal Champion", "At 20th level, you embody the power of the wilds. Your
	Strength and Constitution scores increase by 4. Your
	maximum for those scores is now 24.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 1, "Spellcasting", "You have learned to untangle and reshape the fabric of
	reality in harmony with your wishes and music. Your
	spells are part of your vast repertoire, magic that you
	can tune to different situations.
	Cantrips
	You know two cantrips of your choice from the bard
	spell list. You learn additional bard cantrips o f your
	choice at higher levels, as shown in the Cantrips Known
	column of the Bard table.
	Spell Slots
	The Bard table shows how many spell slots you have to
	cast your spells of 1st level and higher. To cast one of
	these spells, you must expend a slot of the spell's level
	or higher. You regain all expended spell slots when you
	finish a long rest.
	For example, if you know the 1st-level spell cure
	wounds and have a 1st-level and a 2nd-level spell slot
	available, you can cast cure wounds using either slot.
	Spells Known of 1st Level and Higher
	You know four 1st-level spells of your choice from the
	bard spell list.
	The Spells Known column of the Bard table shows
	when you learn more bard spells of your choice. Each of
	these spells must be of a level for which you have spell
	slots, as shown on the table. For instance, when you
	reach 3rd level in this class, you can learn one new spell
	of 1st or 2nd level.
	Additionally, when you gain a level in this class, you
	can choose one of the bard spells you know and replace
	it with another spell from the bard spell list, which also
	must be o f a level for which you have spell slots.
	Spellcasting Ability
	Charisma is your spellcasting ability for your bard
	spells. Your magic comes from the heart and soul you
	pour into the performance of your music or oration.
	You use your Charisma whenever a spell refers to your
	spellcasting ability. In addition, you use your Charisma
	modifier when setting the saving throw DC for a bard
	spell you cast and when making an attack roll with one.
	Spell save DC = 8 + your proficiency bonus +
	your Charisma modifier
	Spell attack modifier = your proficiency bonus +
	your Charisma modifier
	Ritual Casting
	You can cast any bard spell you know as a ritual if that
	spell has the ritual tag.
	Spellcasting Focus
	You can use a musical instrument (found in chapter 5)
	as a spellcasting focus for your bard spells.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 1, "Bardic Inspiration", "You can inspire others through stirring words or music.
	To do so, you use a bonus action on your turn to choose
	one creature other than yourself within 60 feet of you
	who can hear you. That creature gains one Bardic
	Inspiration die, a d6.
	Once within the next 10 minutes, the creature can roll
	the die and add the number rolled to one ability check,
	attack roll, or saving throw it makes. The creature can
	wait until after it rolls the d20 before deciding to use the
	Bardic Inspiration die, but must decide before the DM
	says whether the roll succeeds or fails. Once the Bardic
	Inspiration die is rolled, it is lost. A creature can have
	only one Bardic Inspiration die at a time.
	You can use this feature a number of times equal
	to your Charisma modifier (a minimum of once). You
	regain any expended uses when you finish a long rest.
	Your Bardic Inspiration die changes when you reach
	certain levels in this class. The die becomes a d8 at 5th
	level, a d10 at 10th level, and a dl2 at 15th level.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 2, "Jack of All Trades", "Starting at 2nd level, you can add half your proficiency
	bonus, rounded down, to any ability check you make that
	doesn't already include your proficiency bonus.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 2, "Song of Rest", "Beginning at 2nd level, you can use soothing music or
	oration to help revitalize your wounded allies during
	a short rest. If you or any friendly creatures w ho can
	hear your performance regain hit points at the end of
	the short rest, each of those creatures regains an extra
	1d6 hit points.
	The extra hit points increase when you reach certain
	levels in this class: to 1d8 at 9th level, to 1d 10 at 13th
	level, and to 1d 12 at 17th level.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 3, "Bard College", "At 3rd level, you delve into the advanced techniques of
	a bard college of your choice: the College of Lore or the
	College of Valor, both detailed at the end of the class
	description. Your choice grants you features at 3rd level
	and again at 6th and 14th level.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 3, "Expertise", "At 3rd level, choose two of your skill proficiencies. Your
	proficiency bonus is doubled for any ability check you
	make that uses either of the chosen proficiencies.
	At 10th level, you can choose another two skill
	proficiencies to gain this benefit.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 4, "Ability Score Improvement", "When you reach 4th level, and again at 8th, 12th, 16th,
	and 19th level, you can increase one ability score of your
	choice by 2, or you can increase two ability s cores of
	your choice by 1. As normal, you can't increase an ability
	score above 20 using this feature.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 5, "Font of Inspiration", "Beginning when you reach 5th level, you regain all of
	your expended uses of Bardic Inspiration when you
	finish a short or long rest.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 6, "Countercharm", "At 6th level, you gain the ability to use musical notes or
	words of power to disrupt mind-influencing effects. As
	an action, you can start a performance that lasts until
	the end of your next turn. During that time, you and any
	friendly creatures within 30 feet of you have advantage
	on saving throws against being frightened or charmed.
	A creature must be able to hear you to gain this benefit.
	The performance ends early if you are incapacitated or
	silenced or if you voluntarily end it (no action required).")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 10, "Magical Secrets", "By 10th level, you have plundered magical knowledge
	from a wide spectrum of disciplines. Choose two spells
	from any class, including this one. A spell you choose
	must be of a level you can cast, as shown on the Bard
	table, or a cantrip.
	The chosen spells count as bard spells for you and are
	included in the number in the Spells Known column of
	the Bard table.
	You learn two additional spells from any class at 14th
	level and again at 18th level.")
''')


c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Bard", 20, "Superior Inspiration", "At 20th level, when you roll initiative and have no uses
	of Bardic Inspiration left, you regain one use.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Cleric", 1, "Spellcasting", "As a conduit for divine power, you can cast cleric spells.
	Cantrips
	At 1st level, you know three cantrips of your choice from
	the cleric spell list. You learn additional cleric cantrips
	of your choice at higher levels, as shown in the Cantrips
	Known column of the Cleric table.
	Preparing and Casting Spells
	The Cleric table shows how many spell slots you have
	to cast your spells of 1st level and higher. To cast one of
	these spells, you must expend a slot of the spell's level
	or higher. You regain all expended spell slots when you
	finish a long rest.
	You prepare the list of cleric spells that are available
	for you to cast, choosing from the cleric spell list. When
	you do so, choose a number of cleric spells equal to
	your Wisdom modifier + your cleric level (minimum of
	one spell). The spells must be of a level for which you
	have spell slots.
	For example, if you are a 3rd-level cleric, you have four
	1st-level and two 2nd-level spell slots. With a Wisdom
	of 16, your list of prepared spells can include six spells
	of 1st or 2nd level, in any combination. If you prepare
	the 1st-level spell cure wounds, you can cast it using
	a 1st-level or 2nd-level slot. Casting the spell doesn't
	remove it from your list of prepared spells.
	You can change your list of prepared spells when you
	finish a long rest. Preparing a new list of cleric spells
	requires time spent in prayer and meditation: at least 1
	minute per spell level for each spell on your list.
	Spellcasting Ability
	Wisdom is your spellcasting ability for your cleric spells.
	The power of your spells comes from your devotion to
	your deity. You use your Wisdom whenever a cleric spell
	refers to your spellcasting ability. In addition, you use
	your Wisdom modifier when setting the saving throw
	DC for a cleric spell you cast and when making an
	attack roll with one.
	Spell save DC = 8 + your proficiency bonus +
	your Wisdom modifier
	Spell attack modifier = your proficiency bonus +
	your Wisdom modifier
	Ritual Casting
	You can cast a cleric spell as a ritual if that spell has the
	ritual tag and you have the spell prepared.
	Spellcasting Focus
	You can use a holy symbol as a
	spellcasting focus for your cleric spells.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Cleric", 1, "Divine Domain", "Choose one domain related to your deity: Knowledge,
	Life, Light, Nature, Tempest, Trickery, or War. Each
	domain is detailed at the end of the class description,
	and each one provides examples of gods associated
	with it. Your choice grants you domain spells and other
	features when you choose it at 1st level. It also grants
	you additional ways to use Channel Divinity when you
	gain that feature at 2nd level, and additional benefits at
	6th, 8th, and 17th levels.
	Domain Spells
	Each domain has a list of spells—its domain spells—
	that you gain at the cleric levels noted in the domain
	description. Once you gain a domain spell, you always
	have it prepared, and it doesn't count against the
	number of spells you can prepare each day.
	If you have a domain spell that doesn't appear on the
	cleric spell list, the spell is nonetheless a cleric spell for you.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Cleric", 2, "Channel Divinity", "At 2nd level, you gain the ability to channel divine
	energy directly from your deity, using that energy to fuel
	magical effects. You start with two such effects: Turn
	Undead and an effect determined by your domain. Some
	domains grant you additional effects as you advance in
	levels, as noted in the domain description.
	When you use your Channel Divinity, you choose
	which effect to create. You must then finish a short or
	long rest to use your Channel Divinity again.
	Some Channel Divinity effects require saving throws.
	When you use such an effect from this class, the DC
	equals your cleric spell save DC.
	Beginning at 6th level, you can use your Channel
	Divinity twice between rests, and beginning at 18th level.
	you can use it three times between rests. When you finish
	a short or long rest, you regain your expended uses.
	Channel Divinity: Turn Undead
	As an action, you present your holy symbol and speak a
	prayer censuring the undead. Each undead that can see
	or hear you within 30 feet of you must make a Wisdom
	saving throw. If the creature fails its saving throw, it is
	turned for 1 minute or until it takes any damage.
	A turned creature must spend its turns trying to move
	as far away from you as it can, and it can't willingly
	move to a space within 30 feet of you. It also can't take
	reactions. For its action, it can use only the Dash action
	or try to escape from an effect that prevents it from
	moving. If there's nowhere to move, the creature can use
	the Dodge action.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Cleric", 4, "Ability Score Improvement", "When you reach 4th level, and again at 8th, 12th, 16th,
	and 19th level, you can increase one ability score of your
	choice by 2, or you can increase two ability scores of
	your choice by 1. As normal, you can't increase an ability
	score above 20 using this feature.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Cleric", 5, "Destroy Undead", "Starting at 5th level, when an undead fails its saving
	throw against your Turn Undead feature, the creature is
	instantly destroyed if its challenge rating is at or below a
	certain threshold, as shown in the Destroy Undead table.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Cleric", 10, "Divine Intervention", "Beginning at 10th level, you can call on your deity to
	intervene on your behalf when your need is great.
	Imploring your deity's aid requires you to use your
	action. Describe the assistance you seek, and roll
	percentile dice. If you roll a number equal to or lower
	than your cleric level, your deity intervenes. The DM
	chooses the nature of the intervention; the effect of any
	cleric spell or cleric domain spell would be appropriate.
	If your deity intervenes, you can't use this feature
	again for 7 days. Otherwise, you can use it again after
	you finish a long rest.
	At 20th level, your call for intervention succeeds
	automatically, no roll required.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Druid", 1, "Spellcasting", "Drawing on the divine essence of nature itself, you
	can cast spells to shape that essence to your will. 
	Cantrips
	At 1st level, you know two cantrips of your choice from
	the druid spell list. You learn additional druid cantrips
	of your choice at higher levels, as shown in the Cantrips
	Known column of the Druid table.
	Preparing and Casting Spells
	The Druid table shows how many spell slots you have
	to cast your spells of 1st level and higher. To cast one of
	these druid spells, you must expend a slot of the spell's
	level or higher. You regain all expended spell slots when
	you finish a long rest.
	You prepare the list of druid spells that are available
	for you to cast, choosing from the druid spell list. When
	you do so, choose a number of druid spells equal to
	your Wisdom modifier + your druid level (minimum of
	one spell). The spells must be of a level for which you
	have spell slots.
	For example, if you are a 3rd-level druid, you have four
	1st-level and two 2nd-level spell slots. With a Wisdom
	of 16, your list of prepared spells can include six spells
	of 1st or 2nd level, in any combination. If you prepare
	the 1st-level spell cure wounds, you can cast it using
	a 1st-level or 2nd-level slot. Casting the spell doesn't
	remove it from your list of prepared spells.
	You can also change your list of prepared spells when
	you finish a long rest. Preparing a new list of druid
	spells requires time spent in prayer and meditation: at
	least 1 minute per spell level for each spell on your list.
	Spellcasting Ability
	Wisdom is your spellcasting ability for your druid
	spells, since your magic draws upon your devotion and
	attunement to nature. You use your Wisdom whenever
	a spell refers to your spellcasting ability. In addition,
	you use your Wisdom modifier when setting the saving
	throw DC for a druid spell you cast and when making an
	attack roll with one.
	Spell save DC = 8 + your proficiency bonus +
	your Wisdom modifier
	Spell attack modifier = your proficiency bonus +
	your Wisdom modifier
	Ritual Casting
	You can cast a druid spell as a ritual if that spell has the
	ritual tag and you have the spell prepared.
	Spellcasting Focus
	You can use a druidic focus as a
	spellcasting focus for your druid spells.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Druid", 1, "Druidic", "You know Druidic, the secret language of druids. You
	can speak the language and use it to leave hidden
	messages. You and others who know this language
	automatically spot such a message. Others spot the
	message's presence with a successful DC 15 Wisdom
	(Perception) check but can't decipher it without magic.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Druid", 1, "Wild Shape", "Starting at 2nd level, you can use your action to
	magically assume the shape of a beast that you have
	seen before. You can use this feature twice. You regain
	expended uses when you finish a short or long rest.
	Your druid level determines the beasts you can
	transform into, as shown in the Beast Shapes table. At
	2nd level, for example, you can transform into any beast
	that has a challenge rating of 1/4 or lower that doesn't
	have a flying or swimming speed.
	You can stay in a beast shape for a number o f hours
	equal to half your druid level (rounded down). You then
	revert to your normal form unless you expend another
	use of this feature. You can revert to your normal
	form earlier by using a bonus action on your turn. You
	automatically revert if you fall unconscious, drop to
	0 hit points, or die.
	While you are transformed, the following rules apply:
	• Your game statistics are replaced by the statistics of
	the beast, but you retain your alignment, personality,
	and Intelligence, Wisdom, and Charisma scores. You
	also retain all of your skill and saving throw proficiencies,
	in addition to gaining those of the creature. If
	the creature has the same proficiency as you and the
	bonus in its stat block is higher than yours, use the
	creature's bonus instead of yours. If the creature has
	any legendary or lair actions, you can't use them.
	• When you transform, you assume the beast's hit
	points and Hit Dice. When you revert to your normal
	form, you return to the number of hit points you had
	before you transformed. However, if you revert as a
	result of dropping to 0 hit points, any excess damage
	carries over to your normal form. For example, if you
	take 10 damage in animal form and have only 1 hit
	point left, you revert and take 9 damage. As long as
	the excess damage doesn't reduce your normal form
	to 0 hit points, you aren't knocked unconscious.
	• You can't cast spells, and your ability to speak or
	take any action that requires hands is limited to the
	capabilities of your beast form. Transforming doesn't
	break your concentration on a spell you've already
	cast, however, or prevent you from taking actions that
	are part of a spell, such as call lightning, that you've
	already cast.
	• You retain the benefit of any features from your class,
	race, or other source and can use them if the new
	form is physically capable of doing so. However, you
	can't use any of your special senses, such as darkvision,
	unless your new form also has that sense.
	• You choose whether your equipment falls to the
	ground in your space, merges into your new form, or
	is w orn by it. Worn equipment functions as normal,
	but the DM decides whether it is practical for the new
	form to wear a piece of equipment, based on the creature's
	shape and size. Your equipment doesn't change
	size or shape to match the new form, and any equipment that the new form can't wear
	must either fall to the ground or merge with it.
	Equipment that merges with the form has no
	effect until you leave the form.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Druid", 2, "Druidic Circle", "At 2nd level, you choose to
	identify with a circle of druids:
	the Circle of the Land or the Circle of the Moon, both
	detailed at the end of the class description. Your choice
	grants you features at 2nd level and again at 6th, 10th,
	and 14th level.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Druid", 4, "Ability Score Improvement", "When you reach 4th level, and again at 8th, 12th, 16th,
	and 19th level, you can increase one ability score of
	your choice by 2, or you can increase two ability scores
	of your choice by 1. As normal, you can't increase an
	ability score above 20 using this feature.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Druid", 18, "Timeless Body", "Starting at 18th level, the primal magic that you wield
	causes you to age more slowly. For every 10 years that
	pass, your body ages only 1 year.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Druid", 18, "Beast Spells", "Beginning at 18th level, you can cast many of your druid
	spells in any shape you assume using Wild Shape. You
	can perform the somatic and verbal components of a
	druid spell while in a beast shape, but you aren't able to
	provide material components.")
''')

c.execute('''INSERT INTO
	class_features(class, level, feature_name, description)
	VALUES
	("Druid", 20, "Archdruid", "At 20th level, you can use your Wild Shape an unlimited
	number of times.")
''')

#c.execute('''
#''')

#commit changes to database
conn.commit()

#close connection to database, creation completed
conn.close()

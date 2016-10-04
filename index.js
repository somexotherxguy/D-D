/*setTimeout(function(){
  document.body.innerHTML += "tralala"
  aarg = 'testerdoo'
  console.log(aarg)
}, 100)
*/
name_array = [["Field Name", "Variable Name", "Field Type", "Data Type", "Required?"], ["Password", "password", "text \u2013 password", "string", "y"], ["Char_Icon", "icon", "text", "image file (or hyperlink)", "n"], ["Ideals", "ideal", "text area", "string", "n"], ["Flaws", "flaw", "text area", "string", "n"], ["Backstory", "story", "text area", "string", "n"], ["Gender", "gender", "radio button", "char", "y"], ["Height", "height", "number", "int (in mm)", "y"], ["Race", "race", "dropdown", "string", "y"], ["Alignment", "alignment", "dropdown", "string", "y"], ["Class", "class_name", "dropdown", "string", "y"], ["Fighting Style", "fighting_style", "text?", "string", "n"], ["Background", "background", "text area", "string", "n"], ["Languages", "language", "text", "string", "y"], ["Armor", "armor", "subform", "class", "n"], ["Weapon", "weapon", "subform", "class", "n"], ["Proficiency_Modifier", "proficiency_mod", "number", "int", "n"], ["Abilities", "ability", "subform", "class", "y"], ["Strength", "str", "number", "int", "y"], ["Cons", "con", "number", "int", "y"], ["Wisdom", "wis", "number", "int", "y"], ["Dex", "dex", "number", "int", "y"], ["Int", "int", "number", "int", "y"], ["Charisma", "chr", "number", "int", "y"], ["Misc.", "", "", "", ""], ["Spellcasting", "spellcasting", "subform", "class", "n"], ["Feats", "feat", "dropdown", "string", "n"], ["Username", "username", "text", "string", "y"], ["Character List", "character_list", "hyperlink list", "string", "y"], ["Name", "char_name", "text", "string", "y"], ["Personality Traits", "traits", "subform", "", "n"], ["Bonds", "bonds", "text", "string", "n"], ["Traits_of_Note", "notable_traits", "text area", "string", "n"], ["Description", "description", "text area", "string", "n"], ["Age", "age", "number", "int", "n"], ["Weight", "weight", "number", "int", "y"], ["Sub_race", "sub_race", "dropdown", "string", "n"], ["EXP", "exp", "number", "int", "y"], ["Archetype", "archetype", "dropdown", "string", "y"], ["Level", "level", "number", "int", "y"], ["HP", "hp", "number", "int", "y"], ["Tool_Proficiency", "tool_prof", "number", "int", "y"], ["Weapon_Proficiency", "weapon_prof", "number", "int", "y"], ["Tool", "tool", "subform", "class", "n"], ["Skills", "skills", "dropdown", "string", "y"], ["Saves", "saves", "subform", "class", "y"], ["Equipment", "equipment", "subform", "class", "n"], ["Money", "money", "number", "int", "y"], ["Spells_player_is_able_to_use", "available_spells", "dropdown", "string", "y"], ["Notes", "notes", "text area", "string", "n"]]

var class_options = {
  "barbarian":
    {
      "archetypes":
        {
          "bloodranger": "Bloodranger",
          "cannibal": "Cannibal",
          "dragon_shaman": "Dragon Shaman (Primal Path)",
          "einherji": "Einherji",
          "path_of_crash": "Path of Crash",
          "path_of_exile": "Path of the Exile",
          "path_of_fist": "Path of the Fist",
          "path_of_healer": "Path of the Healer",
          "path_of_ki_warrior": "Path of the Ki Warrior",
          "path_of_shaman": "Path of the Shaman",
          "path_of_silent_berserker": "Path of the Silent Berserker",
          "path_of_slayer": "Path of the Slayer",
          "warlord": "Warlord (Primal Path)"
        }
    },
  "bard":
    {
      "archetypes":
        {
          "college_of_compulsion": "College of Compulsion",
          "college_of_deaths_song": "College of Death's Song",
          "college_of_healing": "College of Healing",
          "college_of_pain": "College of Pain",
          "college_of_prestige": "College of Prestige",
          "college_of_sorrow": "College of Sorrow",
          "college_of_sound": "College of Sound",
          "college_of_taiko": "College of Taiko",
          "college_of_vylius": "College of Vylius",
          "college_of_boons": "College of Boons",
          "college_of_band": "College of the Band",
          "college_of_gambler": "College of the Gambler",
          "college_of_toreador": "College of the Toréador",
          "sunsinger": "Sunsinger",
          "troubador": "Troubador"
        }
    },
  "cleric":
    {
      "archetypes":
        {
          "arcana_domain": "Arcana Domain",
          "cleric_law_domain": "Cleric Law Domain",
          "darkness_domain": "Darkness Domain",
          "dragon_domain": "Dragon Domain",
          "fire_domain": "Fire Domain",
          "life_death_domain": "Life & Death Domain",
          "love_domain": "Love Domain",
          "luck_domain": "Luck Domain",
          "magic_domain": "Magic Domain",
          "martyrdom_domain": "Martyrdom Domain",
          "oceanic_domain": "Oceanic Domain",
          "peace_domain": "Peace Domain",
          "spider_domain": "Spider Domain",
          "spirit_domain": "Spirit Domain",
          "strife_domain": "Strife Domain",
          "time_domain": "Time Domain",
          "travel_domain": "Travel Domain",
          "undeath_domain": "Undeath Domain, Variant"
        }
    },
  "druid":
    {
      "archetypes":
        {
          "beast_druid": "Beast Druid",
          "circle_of_anathema": "Circle of Anathema",
          "circle_of_dragons": "Circle of Dragons",
          "circle_of_plants": "Circle of Plants",
          "circle_of_reptiles": "Circle of Reptiles",
          "circle_of_rot": "Circle of Rot",
          "circle_of_first_forest": "Circle of the First Forest",
          "circle_of_beast": "Circle of the Beast",
          "circle_of_claw": "Circle of the Claw",
          "circle_of_fountain": "Circle of the Fountain",
          "circle_of_furies": "Circle of the Furies",
          "circle_of_seasons": "Circle of the Seasons",
          "circle_of_sun": "Circle of the Sun"
        }
    },
  "fighter":
    {
      "archetypes":
        {
          "archfighter": "Archfighter",
          "brutal_combatant": "Brutal Combatant",
          "cavalier": "Cavalier",
          "champion": "Champion, Variant",
          "dragonknight": "Dragonknight",
          "dragoon": "Dragoon",
          "dreadnought": "Dreadnought",
          "elite_mercenary": "Elite Mercenary",
          "gladiator": "Gladiator",
          "guardian": "Guardian",
          "gunslinger": "Gunslinger",
          "hoplite": "Hoplite",
          "paragon_fighter": "Paragon Fighter",
          "planetouched_warrior": "Planetouched Warrior",
          "reaver": "Reaver",
          "rune_wielder": "Rune Wielder",
          "samurai": "Samurai",
          "shieldman": "Shieldman",
          "shien": "Shien",
          "slayer": "Slayer",
          "sylvan_knight": "Sylvan Knight"
        },
      "fighting_styles":
        {
          "archery":"Archery",
          "defense": "Dueling",
          "dueling": "Dueling",
          "great_weapon": "Great Weapon Fighting",
          "protection": "Protection",
          "two_weapon":"Two Weapon Fighting",
          "second_wind": "Second Wind"
        }
    },
  "monk":
    {
      "archetypes":
        {
          "dervish": "Dervish",
          "ki_thief": "Ki Thief",
          "miko": "Miko",
          "bladeless_sword": "The Bladeless Sword",
          "way_of_warrior": "Way of the Warrior",
          "way_of_nine": "Way of Nine Gates of Hell",
          "way_of_perfect_fist": "Way of the Perfect Fist",
          "way_of_beggar": "Way of the Beggar",
          "way_of_body": "Way of the Body",
          "way_of_dragon": "Way of the Dragon (Monastic Tradition)",
          "way_of_drunken_fist": "Way of the Drunken Fist",
          "way_of_elements": "Way of the Elements - Spellcasting",
          "way_of_fleet_foot": "Way of the Fleet Foot",
          "way_of_force": "Way of the Force",
          "way_of_guardian": "Way of the Guardian",
          "way_of_inner_light": "Way of the Inner Light",
          "way_of_innumerable": "Way of the Innumerable Stars",
          "way_of_iron_mountain": "Way of the Iron Mountain",
          "way_of_jeskai": "Way of the Jeskai",
          "way_of_limitless": "Way of the Limitless",
          "way_of_long_blade": "Way of the Long Blade",
          "way_of_mentor": "Way of the Mentor",
          "way_of_silent_death": "Way of the Silent Death",
          "way_of_storm": "Way of the Storm",
          "way_of_thousand_fists": "Way of the Thousand Fists",
          "way_of_zen_archer": "Way of the Zen Archer",
          "way_of_zodiac": "Way of the the Zodiac"
        }
    },
  "paladin":
    {
      "archetypes":
        {
          "antipaladin": "Antipaladin",
          "oath_of_commerce": "Oath of Commerce",
          "oath_of_forbidden_knowledge": "Oath of Forbidden Knowledge",
          "oath_of_knowledge": "Oath of Knowledge",
          "oath_of_peace": "Oath of Peace",
          "oath_of_sacrifice": "Oath of Sacrifice",
          "oath_of_dragon": "Oath of the Dragon",
          "oath_of_inquisition": "Oath of the Inquisition",
          "oath_of_night_paladin": "Oath of the Night Paladin",
          "oath_of_time": "Oath of Time",
          "oath_of_eternal_flame": "Oath of the Eternal Flame",
          "oath_of_guardian": "Oath of the Guardian",
          "oath_of_lich": "Oath of the Lich",
          "oath_of_shield": "Oath of the Shield",
          "oath_of_templar": "Oath of the Templar"
        }
    },
  "ranger":
    {
      "archetypes":
        {
          "archer": "Archer (Versatile)",
          "beastmaster_constant": "Beastmaster: Constant",
          "beastmaster_strider": "Beastmaster: Strider",
          "beastmaster_summoned": "Beastmaster: Summoned",
          "blade_dancer": "Blade Dancer",
          "bloodhunter": "Bloodhunter",
          "eldruidic": "Eldruidic",
          "hunter_deep_stalker": "Hunter: Deep Stalker",
          "hunter_eldritch": "Hunter: Eldritch Hunter",
          "hunter_true": "Hunter: True Hunter",
          "land_master": "Land Master",
          "occult_hunter": "Occult Hunter",
          "primal": "Primal",
          "ranger_variant": "Ranger, Variant",
          "sharpshooter": "Sharpshooter",
          "slayer_blade_dancer": "Slayer: Blade Dancer",
          "slayer_guardian": "Slayer: Guardian",
          "slayer_revenge": "Slayer: Revenge",
          "slayer_standard": "Slayer: Standard",
          "spell_gunner": "Spell Gunner",
          "spellstrider_ranger": "Spellstrider Ranger",
          "tempest_rifleman": "Tempest Rifleman",
          "warden": "Warden"
        }
    },
  "rogue":
    {
      "archetypes":
        {
          "arcane_assassin": "Arcane Assassin",
          "bounty_hunter": "Bounty Hunter",
          "captain": "Captain",
          "investigator": "Investigator",
          "joker": "Joker",
          "marksman": "Marksman",
          "mechanique": "Mechanique de Arcane",
          "ninja": "Ninja",
          "phantom_blade": "Phantom Blade",
          "pirate": "Pirate",
          "scoundrel": "Scoundrel",
          "sellsword": "Sellsword",
          "wyrmhand": "Wyrmhand"
        }
    },
  "sorcerer":
    {
      "archetypes":
        {
          "arcane_origin": "Arcane Origin",
          "deathtouched_bloodline": "Deathtouched Sorcerous Bloodline",
          "destined_bloodline": "Destined Bloodline",
          "divine_bloodline": "Divine Bloodline",
          "fey_bloodline": "Fey Bloodline",
          "fiend_bloodline": "Fiend Bloodline",
          "frost_touched_bloodline": "Frost-touched Bloodline",
          "inferno": "Inferno",
          "lithic_bloodline": "Lithic Bloodline",
          "maestro": "Maestro",
          "muscle_sorcerer": "Muscle Sorcerer",
          "phoenix_blood": "Phoneix Blood",
          "pyral_bloodline": "Pyral Bloodline",
          "shadow_adept": "Shadow Adept",
          "sorcerer_variant": "Sorcerer, Variant",
          "spellbreaker": "Spellbreaker",
          "storm_bloodline": "Storm Bloodline, Variant",
          "temporal_origin": "Temporal Origin",
          "thallasic_bloodline": "Thallasic Bloodline",
          "true_blood_of_dragon": "True Blood of the Dragon",
          "winter_soul": "Winter Soul"
        }
    },
  "warlock":
    {
      "archetypes":
        {
          "archmage_patron": "Archmage Patron",
          "creature_of_depth": "Creature of the Depth",
          "crimson_lord_patron": "Crimson Lord Patron",
          "dragon_patron": "Dragon Patron",
          "gearmind_patron": "Gearmind Patron",
          "orb_bearer": "Orb Bearer",
          "otherwordly_patron": "Otherwordly Patron: Genie",
          "primordial_patron": "Primordial Patron",
          "seraphim_patron": "Seraphim Patron",
          "servants_of_moon": "Servants of the Moon",
          "shadowmaster": "Shadowmaster",
          "skull_of_orcus": "Skull of Orcus",
          "spirit_sharer": "Spirit Sharer",
          "starry_night": "Starry Night",
          "sugar_daddy": "Sugar Daddy",
          "aetheric_patron": "The Aetheric Patron",
          "eidolon": "The Eidolon",
          "flesh": "The Flesh",
          "furies": "The Furies",
          "wheel": "The Wheel",
          "titan_patron": "Titan Patron",
          "vessel_of_souls": "Vessel of Souls",
          "warlock_patron_celestial": "Warlock Patron Celestial"
        }
    },
  "wizard":
    {
      "archetypes":
        {
          "arcane_linguist": "Arcane Linguist",
          "archivist_tradition": "Archivist Tradition",
          "defiler": "Defiler",
          "geomancy": "Geomancy",
          "scar_caster": "Scar Caster",
          "school_of_mereology": "School of Mereology",
          "school_of_gunmage": "School of the Gunmage",
          "wild_mage": "Wild Mage"
        }
    }
}

//#to load or save
//# <urlbase> / <username> / <character name> / [save]
//#character without user
//# <urlbase> / character / [<character name>] / <character id>

function update() {
	var form = document.getElementById("char_info");
    //var char_info = JSON.stringify(form)
    var char_object = { };
    console.log(name_array.slice(1));
    for (field in name_array.slice(1)) {
    	try {
          var field_id = name_array.slice(1)[field][1];
    	    char_object[field_id] = document.getElementById(field_id).value;
    	}
    	catch (err){;}
    }
    var char_json = JSON.stringify(char_object);
    console.log(char_json);
	//form.submit();
}

/* (function() {
  class_name = document.getElementById("class");
  class_name.addEventListener("change", class_selected(class_name));
})(); */

var r = "";
function test_query() {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		r = xhttp.response;
		console.log(r);
		/*JSON.parse(r, function(k, v) {
		  console.log(k, v);
	    })*/
		json_test = '{"ideal":"3","flaw":"2","story":"Tragic","gender":"M","height":"12.5","race":"Orc","alignment":"Humans","class_name":"Warrior","fighting_style":"Melee","background":"Red","proficiency_mod":"3","str":"12","con":"13","wis":"16","dex":"14","int":"14","chr":"21","feat":"lots","char_name":"Trogdor","traits":"Hotheaded","bonds":"Iron","notable_traits":"Dragon-Man","description":"Burninator","age":"8972","weight":"37463929","sub_race":"Dragon-Man","exp":">9000","archetype":"SmackEm","level":"Too Damn High!","hp":"Enough","tool_prof":"some","weapon_prof":"fists","skills":"all of them","money":"one horde","available_spells":"Firebreath","notes":"Remember to buy eggs"}'
		r = JSON.parse(json_test)
		console.log(r["char_name"], "the", r["description"])
		/*for (k in r) {
		  console.log(k, r[k]);
		}*/
	}
	xhttp.open("GET", "object.json", true);
	xhttp.send();
}

function class_selected(class_name = "fighter")  {
  var fighting_styles = document.getElementById("fighting_style")
  var archetype_list = document.getElementById("archetype");
  var length = archetype_list.options.length
  for (var i = length - 1; i >= 0; i--) {
    archetype_list.remove(i);
  }
  if (class_name !== "fighter") {
    length = fighting_styles.options.length
    for (var i = length - 1; i >= 0; i--) {
      fighting_styles.remove(i)
    }
  } else if (fighting_styles.options.length === 0) {
	  for (var i in class_options["fighter"]["fighting_styles"]) {
		  fighting_styles.insertAdjacentHTML("beforeend",
		  '<option value="' + i + '">' + class_options["fighter"]["fighting_styles"][i] + '</option>')
	  }
  }
  for (var i in class_options[class_name]["archetypes"]) {
    archetype_list.insertAdjacentHTML("beforeend",
      '<option value = "' + i + '">' + class_options[class_name]["archetypes"][i])
  }
}

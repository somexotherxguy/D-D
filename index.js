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
      "path":
        {
          "path_of_the_beserker": "Path of the Beserker",
          "path_of_the_totem_warrior": "Path of the Totem Warrior"
        }
    },
  "bard":
    {
      "college":
        {
          "college_of_lore": "College of Lore",
          "college_of_valor": "College of Valor"
        }
    },
  "cleric":
    {
      "domain":
        {
          "knowledge_domain": "Knowledge Domain",
          "life_domain": "Life Domain",
          "light_domain": "Light Domain",
          "nature_domain": "Nature Domain",
          "tempest_domain": "Tempest Domain",
          "trickery_domain": "Trickery Domain",
          "war_domain": "War Domain"
        }
    },
  "druid":
    {
      "circle":
        {
          "circle_of_the_land": "Circle of the Land",
          "circle_of_the_moon": "Circle of the Moon"
        }
    },
  "fighter":
    {
      "archetypes":
        {
          "champion": "Champion",
          "battle_master": "Battle Master",
          "eldritch_knight": "Eldritch Knight"
        },
      "fighting_style":
        {
          "archery":"Archery",
          "defense": "Defense",
          "dueling": "Dueling",
          "great_weapon": "Great Weapon Fighting",
          "protection": "Protection",
          "two_weapon":"Two Weapon Fighting",
        }
    },
  "monk":
    {
      "tradition":
        {
          "way_of_the_open_hand": "Way of the Open Hand",
          "way_of_shadow": "Way of Shadow",
          "way_of_the_four_elements": "Way of the Four Elements"
        }
    },
  "paladin":
    {
      "oath":
        {
          "oath_of_devotion": "Oath of Devotion",
          "oath_of_the_ancients": "Oath of the Ancients",
          "oath_of_vengeance": "Oath of Vengeance"
        },
	  "fighting_style":
	  {
		  "defense": "Defense",
		  "dueling": "Dueling",
		  "great_weapon_fighting": "Great Weapon Fighting",
		  "protection": "Protection"
	  }
    },
  "ranger":
    {
      "archetypes":
        {
		  "hunter": "Hunter",
		  "beast_master": "Beast Master",
        },
	  "fighting_style":
	  {
		  "archery": "Archery",
		  "defense": "Defense",
		  "dueling":, "Dueling",
		  "two_weapon_fighting": "Two-Weapon Fighting"
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
	/*xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("char_info").innerHTML = this.responseText;
		}
	};*/
	json_test = JSON.stringify({"ideal":3,"flaw":2,"story":"Tragic","gender":"male","height":12.5,"race":"Man","alignment":"Humans","class_name":"Warrior","fighting_style":"Melee","background":"Red","proficiency_mod":3,"str":12,"con":13,"wis":"16","dex":14,"int":14,"chr":21,"feat":"lots","char_name":"Trogdor","traits":"Hotheaded","bonds":"Iron","notable_traits":"Dragon-Man","description":"Burninator","age":8972,"weight":37463929,"sub_race":"Dragon-Man","exp":9000,"archetype":"SmackEm","level":69,"hp":1000,"tool_prof":"some","weapon_prof":"fists","skills":"all of them","platinum":123,"gold":500,"electrum":12,"silver":756,"copper":9,"available_spells":"Firebreath","notes":"Remember to buy eggs", "languages":"Python"});
	r = JSON.parse(json_test);
	xhttp.open("GET", "object.json", true);
	xhttp.send();
	for (k in r) {
		if (k === "gender") {
			var row = document.getElementById(r[k]);
			row.checked = true;
		} else {
		  var row = document.getElementById(k);
		  if (row) {
		    row.value = r[k];
		  }
		}
	}
}

function class_selected(class_name = "fighter")  {
  for (first in class_options[class_name]) break;
  var list = document.getElementById("class_options_1");
  list.innerHTML = first[0].toUpperCase() + first.slice(1, first.length) + s + '<select id="archetype"></select>';
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
	  for (var i in class_options["fighter"]["fighting_style"]) {
		  fighting_styles.insertAdjacentHTML("beforeend",
		  '<option value="' + i + '">' + class_options["fighter"]["fighting_style"][i] + '</option>')
	  }
  }
  for (var i in class_options[class_name][first]) {
    archetype_list.insertAdjacentHTML("beforeend",
      '<option value = "' + i + '">' + class_options[class_name][first][i]);
  }
  
}

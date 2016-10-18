/*setTimeout(function(){
  document.body.innerHTML += "tralala"
  aarg = 'testerdoo'
  console.log(aarg)
}, 100)
*/

class_name = document.getElementById("class");
class_name.addEventListener("change", function() { class_selected(document.getElementById('class').value);});

submit_button = document.getElementById("submit");
submit_button.addEventListener("click", function() { update();});

load_button = document.getElementById("load");
load_button.addEventListener("click", function() { test_query();});

name_array = [["Field Name", "Variable Name", "Field Type", "Data Type", "Required?"]
  , ["Password", "password", "text \u2013 password", "string", "y"]
  , ["Char_Icon", "icon", "text", "image file (or hyperlink)", "n"]
  , ["Ideals", "ideal", "text area", "string", "n"]
  , ["Flaws", "flaw", "text area", "string", "n"]
  , ["Backstory", "story", "text area", "string", "n"]
  , ["Gender", "gender", "radio button", "char", "y"]
  , ["Height", "height", "number", "int (in mm)", "y"]
  , ["Race", "race", "dropdown", "string", "y"]
  , ["Alignment", "alignment", "dropdown", "string", "y"]
  , ["Class", "class_name", "dropdown", "string", "y"]
  , ["Fighting Style", "fighting_style", "text?", "string", "n"]
  , ["Background", "background", "text area", "string", "n"]
  , ["Languages", "language", "text", "string", "y"]
  , ["Armor", "armor", "subform", "class", "n"]
  , ["Weapon", "weapon", "subform", "class", "n"]
  , ["Proficiency_Modifier", "proficiency_mod", "number", "int", "n"]
  , ["Abilities", "ability", "subform", "class", "y"]
  , ["Strength", "str", "number", "int", "y"]
  , ["Cons", "con", "number", "int", "y"]
  , ["Wisdom", "wis", "number", "int", "y"]
  , ["Dex", "dex", "number", "int", "y"]
  , ["Int", "int", "number", "int", "y"]
  , ["Charisma", "chr", "number", "int", "y"]
  , ["Misc.", "", "", "", ""]
  , ["Spellcasting", "spellcasting", "subform", "class", "n"]
  , ["Feats", "feat", "dropdown", "string", "n"]
  , ["Username", "username", "text", "string", "y"]
  , ["Character List", "character_list", "hyperlink list", "string", "y"]
  , ["Name", "char_name", "text", "string", "y"]
  , ["Personality Traits", "traits", "subform", "", "n"]
  , ["Bonds", "bonds", "text", "string", "n"]
  , ["Traits_of_Note", "notable_traits", "text area", "string", "n"]
  , ["Description", "description", "text area", "string", "n"]
  , ["Age", "age", "number", "int", "n"]
  , ["Weight", "weight", "number", "int", "y"]
  , ["Sub_race", "sub_race", "dropdown", "string", "n"]
  , ["EXP", "exp", "number", "int", "y"]
  , ["Archetype", "archetype", "dropdown", "string", "y"]
  , ["Level", "level", "number", "int", "y"]
  , ["HP", "hp", "number", "int", "y"]
  , ["Tool_Proficiency", "tool_prof", "number", "int", "y"]
  , ["Weapon_Proficiency", "weapon_prof", "number", "int", "y"]
  , ["Tool", "tool", "subform", "class", "n"]
  , ["Skills", "skills", "dropdown", "string", "y"]
  , ["Saves", "saves", "subform", "class", "y"]
  , ["Equipment", "equipment", "subform", "class", "n"]
  , ["Money", "money", "number", "int", "y"]
  , ["Spells_player_is_able_to_use", "available_spells", "dropdown", "string", "y"]
  , ["Notes", "notes", "text area", "string", "n"]]


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
      "archetype":
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
      "archetype":
        {
		  "hunter": "Hunter",
		  "beast_master": "Beast Master",
        },
	  "fighting_style":
	  {
		  "archery": "Archery",
		  "defense": "Defense",
		  "dueling": "Dueling",
		  "two_weapon_fighting": "Two-Weapon Fighting"
	  }
    },
  "rogue":
    {
      "archetype":
        {
          "thief": "Thief",
          "assassin": "Assassin",
          "arcane_trickster": "Arcane Trickster"
        }
    },
  "sorcerer":
    {
      "origin":
        {
          "draconic_bloodline": "Draconic Bloodline",
          "wild_magic": "Wild Magic"
        }
    },
  "warlock":
    {
      "pact":
        {
          "chain": "Pact of the Chain",
          "blade": "Pact of the Blade",
          "tome": "Pact of the Tome"
        },
      "patron":
        {
          "archfey": "The Archfey",
          "fiend": "The Fiend",
          "great_old_one": "The Great Old One"
        }
    },
  "wizard":
    {
      "school":
        {
          "abjuration": "School of Abjuration",
          "conjuration": "School of Conjuration",
          "divination": "School of Divination",
          "enchantment": "School of Enchantment",
          "evocation": "School of Evocation",
          "illusion": "School of Illusion",
          "necromancy": "School of Necromancy",
          "transmutation": "School of Transmutation"
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



var r = "";

function fill_form(r){
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

function test_query() {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.open("GET", "object.json", true);
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log( JSON.parse(this.response) );
			fill_form( JSON.parse(this.response) );
			console.log( JSON.parse(this.response) );
      //document.getElementById("char_info").innerHTML = this.responseText;
		}
	};
	json_test = JSON.stringify({"ideal":3,"flaw":2,"story":"Tragic","gender":"male","height":12.5,"race":"Man","alignment":"chaotic neutral","class":"fighter","fighting_style":"dueling","background":"Red","proficiency_mod":3,"str":12,"con":13,"wis":"16","dex":14,"int":14,"chr":21,"feat":"lots","char_name":"Trogdor","traits":"Hotheaded","bonds":"Iron","notable_traits":"Dragon-Man","description":"Burninator","age":8972,"weight":37463929,"sub_race":"Dragon-Man","exp":9000,"archetype":"battle_master","level":"20","hp":1000,"tool_prof":"some","weapon_prof":"fists","skills":"all of them","platinum":123,"gold":500,"electrum":12,"silver":756,"copper":9,"available_spells":"Firebreath","notes":"Remember to buy eggs", "languages":"Python"});
/*
	r = JSON.parse(json_test);
	xhttp.open("GET", "object.json");
	xhttp.send();
	for (k in r) {
		if (k === "gender") {
			var row = document.getElementById(r[k]);
			row.checked = true;
		} else {
		  var row = document.getElementById(k);
		  if (row) {
		    row.value = r[k];
        if (k === "class") {
          class_selected(row.value);
        }
		  }
		}
	}*/
}

function class_selected(class_name) {
  var details = document.getElementById("detail_table");
  for (first in class_options[class_name]) break;
  for (last in class_options[class_name]);
  while (details.rows.length > 10) {
    details.deleteRow(-1);
  }
  if (class_name) {
    // Archetype Row Cell 1 - Name
    var a_cell1 = details.insertRow();
    var a_td1 = document.createElement("td");
    a_td1.setAttribute("class", "mdl-data-table__cell--non-numeric");
    a_td1.innerHTML = first[0].toUpperCase() + first.slice(1, first.length);
    a_cell1.appendChild(a_td1);

    // Archetype Row Cell 2 - Dropdown
    var a_cell2 = a_cell1.insertCell();
    var a_div1 = document.createElement("div");
    a_div1.setAttribute("align", "left");
    a_div1.setAttribute("id", 'id="class_options_1"');
    a_cell2.appendChild(a_div1);
    var archetype_list = document.createElement("select");
    archetype_list.setAttribute("id", "archetype");
    archetype_list.innerHTML = "<option disabled selected value> Unspecified </option>";
    for (var i in class_options[class_name][first]) {
      archetype_list.insertAdjacentHTML("beforeend",
        '<option value = "' + i + '">' + class_options[class_name][first][i]);
    }
    a_div1.appendChild(archetype_list);

    // Archetype Row Cell 3 - Random Button
    var a_cell3 = a_cell1.insertCell();
    var a_rand_button = document.createElement("button");
    a_rand_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-color-text--orange-900");
    var a_image = document.createElement("IMG");
    a_image.setAttribute("class", "material-icons");
    a_image.innerHTML = "autorenew";
    a_rand_button.appendChild(a_image);
    a_cell3.appendChild(a_rand_button);

    // Create Fighting Styles
    if (last !== first) {
      // Fighting Style Row Cell 1 - Name
      var f_cell1 = details.insertRow();
      var f_td1 = document.createElement("td");
      f_td1.setAttribute("class", "mdl-data-table__cell--non-numeric");
      f_td1.innerHTML = "Fighting Style";
      f_cell1.appendChild(f_td1);

      // Fighting Style Row Cell 2 - Dropdown
      var f_cell2 = f_cell1.insertCell();
      var f_div1 = document.createElement("div");
      f_div1.setAttribute("align", "left");
      f_div1.setAttribute("id", 'id="class_options_2"');
      f_cell2.appendChild(f_div1);
      var fighting_styles = document.createElement("select");
      fighting_styles.setAttribute("id", "archetype");
      fighting_styles.innerHTML = "<option disabled selected value> Unspecified </option>";
      for (var i in class_options[class_name][last]) {
        fighting_styles.insertAdjacentHTML("beforeend",
          '<option value = "' + i + '">' + class_options[class_name][last][i]);
      }
      f_div1.appendChild(fighting_styles);

      // Fighting Style Row Cell 3 - Random Button
      var f_cell3 = f_cell1.insertCell();
      var f_rand_button = document.createElement("button");
      f_rand_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-color-text--orange-900");
      var f_image = document.createElement("IMG");
      f_image.setAttribute("class", "material-icons");
      f_image.innerHTML = "autorenew";
      f_rand_button.appendChild(f_image);
      f_cell3.appendChild(f_rand_button);
    }
  }
}


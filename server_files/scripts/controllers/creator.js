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
      "Fighting Style":
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
      "Fighting Style":
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
      "Fighting Style":
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
};

app.controller('creator', ['$scope', function($scope) {
    $scope.stats = [
    {
    	field: "Str",
    	value: 0
    },
    {
    	field: "Dex",
    	value: 0
    },
    {
    	field: "Con",
    	value: 0
    },
    {
    	field: "Int",
    	value: 0
    },
    {
    	field: "Wis",
    	value: 0
    },
    {
    	field: "Char",
    	value: 0
    },
    {
    	field: "HP",
    	value: 0
    }];
    $scope.skills = [
    {
    	field: "Level",
    	value: 1
    },
    {
    	field: "Languages",
    	value: []
    },
    {
    	field: "Feats",
    	value: []
    },
    {
    	field: "Spells",
    	value: []
    },
    {
    	field: "Abilities",
    	value: []
    },
    {
    	field: "Tool Proficiencies",
    	value: []
    },
    {
    	field: "Weapon Proficiencies",
    	value: []
    }];
    $scope.details = [
    {
    	field: "Name",
    	value: "",
    	hidden: false
    },
    {
    	field: "Age",
    	value: 1,
    	hidden: false
    },
    {
    	field: "Height",
    	value: 0,
    	hidden: false
    },
    {
    	field: "Weight",
    	value: 0,
    	hidden: false
    },
    {
    	field: "Race",
    	value: "",
    	hidden: false
    },
    {
    	field: "Sub-Race",
    	value: "",
    	hidden: true
    },
    {
    	field: "Gender",
    	value: "",
    	hidden: false
    },
    {
    	field: "Alignment",
    	value: "",
    	hidden: false
    },
    {
    	field: "Class",
    	value: "",
    	hidden: false
    },
    {
    	field: "Archetype",
    	value: "",
    	hidden: true
    },
    {
    	field: "Fighting Style",
    	value: "",
    	hidden: true
    }];
    $scope.descriptors = [
    {
    	field: "Background",
    	value: ""
    },
    {
    	field: "Traits",
    	value: []
    },
    {
    	field: "Bonds",
    	value: []
    },
    {
    	field: "Physical Description",
    	value: ""
    },
    {
    	field: "Miscellaneous Notes",
    	value: []
    }];
    $scope.equipment = [
    {
    	field: "Armor",
    	value: []
    },
    {
    	field: "Weapons",
    	value: []
    },
    {
    	field: "Tools",
    	value: []
    },
    {
    	field: "Platinum",
    	value: 0
    },
    {
    	field: "Gold",
    	value: 0
    },
    {
    	field: "Electrum",
    	value: 0
    },
    {
    	field: "Silver",
    	value: 0
    },
    {
    	field: "Cooper",
    	value: 0
    }];
    $scope.classSelect = function() {
    	var class_name = document.getElementById("class").value;
    	$scope.details[10].hidden = true;
    	$scope.details[8].value = class_name[0].toUpperCase() + class_name.slice(1, class_name.length);
    	for (first in class_options[class_name]) break;
    	for (last in class_options[class_name]);
    	$scope.details[9].field = first[0].toUpperCase() + first.slice(1, first.length);
    	$scope.details[9].hidden = false;
    	if (last !== first) {
    		$scope.details[10].field = last;
    		$scope.details[10].hidden = false;
    	}
    };
}]);
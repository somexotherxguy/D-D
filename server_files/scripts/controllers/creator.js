app.directive('dynamicInput', [function(){
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            
        }
        
    }
}]);

app.controller('creator', ['$scope', function($scope) {
    $scope.feats = [
      'alert',
      'athlete',
      'actor',
      'charger',
      'crossbow expert',
      'defensive duelist',
      'dual wielder',
      'dungeon delver',
      'durable',
      'elemental adept',
      'grappler',
      'great weapon master',
      'healer',
      'heavily armored',
      'heavy armor master',
      'inspiring leader',
      'keen mind',
      'lightly armored',
      'linguist',
      'lucky',
      'mage slayer',
      'magic initiate',
      'martial adept',
      'medium armor master',
      'mobile',
      'moderately armored',
      'mounted combatant',
      'observant',
      'polearm master',
      'resilient',
      'ritual caster',
      'savage attacker',
      'sentinel',
      'sharpshooter',
      'shield master',
      'skilled',
      'skulker',
      'spell sniper',
      'tavern brawler',
      'tough',
      'war caster',
      'weapon caster'
    ],
    $scope.weapons = {
        'club': 'simple',
        'dagger': 'simple',
        'greatclub': 'simple',
        'handaxe': 'simple',
        'javelin': 'simple',
        'light hammer': 'simple',
        'mace': 'simple',
        'quarterstaff': 'simple',
        'sickle': 'simple',
        'spear' : 'simple',
        'unarmored strike': 'simple',
        'light crossbow' : 'simple',
        'dart' : 'simple',
        'shortbow' : 'simple',
        'sling' : 'simple',
        'battleaxe' : 'martial',
        'flail' : 'martial',
        'glaive' : 'martial',
        'greataxe' : 'martial',
        'greatsword' : 'martial',
        'halberd' : 'martial',
        'lance' : 'martial',
        'longsword' : 'martial',
        'maul' : 'martial',
        'morningstar' : 'martial',
        'pike' : 'martial',
        'rapier' : 'martial',
        'scimatar' : 'martial',
        'shortsword' : 'martial',
        'trident' : 'martial',
        'war pick' : 'martial',
        'warhammer' : 'martial',
        'whip' : 'martial',
        'blowgun' : 'martial',
        'hand crossbow' : 'martial',
        'heavy crossbow' : 'martial',
        'longbow' : 'martial',
        'net' : 'martial'
    },
    $scope.armor = {
        'padded' : 'light',
        'leather' : 'light',
        'studded leather' : 'light',
        'hide' : 'medium',
        'chain shirt' : 'medium',
        'scale mail' : 'medium',
        'breastplate' : 'medium',
        'half plate' : 'medium',
        'ring mail' : 'heavy',
        'chain mail' : 'heavy',
        'splint' : 'heavy',
        'plate' : 'heavy',
        'shield' : 'no proficiency needed'
    },
    $scope.stats = [
    {
    	field: 'Str',
    	value: 0,
      type: 'number',
      id: 'str'
    },
    {
    	field: 'Dex',
    	value: 0,
      type: 'number',
      id: 'dex'
    },
    {
    	field: 'Con',
    	value: 0,
      type: 'number',
      id: 'con'
    },
    {
    	field: 'Int',
    	value: 0,
      type: 'number',
      id: 'int'
    },
    {
    	field: 'Wis',
    	value: 0,
      type: 'number',
      id: 'wis'
    },
    {
    	field: 'Char',
    	value: 0,
      type: 'number',
      id: 'char'
    },
    {
    	field: 'HP',
    	value: 0,
      type: 'number',
      id: 'hp'
    }];
    $scope.skills = [
    {
    	field: 'Level',
    	value: 1,
      type: 'number',
      id: 'level'
    },
    {
    	field: 'Languages',
    	value: '',
      type: 'text',
      id: 'languages'
    },
    {
    	field: 'Feats',
    	value: '',
      type: 'text',
      id: 'feat'
    },
    {
    	field: 'Spells',
    	value: '',
      type: 'text',
      id: 'available_spells'
    },
    {
    	field: 'Abilities',
    	value: '',
      type: 'text',
      id: 'abilities'
    },
    {
    	field: 'Tool Proficiencies',
    	value: '',
      type: 'text',
      id: 'tool_prof'
    },
    {
    	field: 'Weapon Proficiencies',
    	value: '',
      type: 'text',
      id: 'weapon_prof'
    }];
    $scope.details = [
    {
    	field: 'Name',
    	value: '',
    	hidden: false,
      type: 'text',
      id: 'name'
    },
    {
    	field: 'Age',
    	value: 1,
    	hidden: false,
      type: 'number',
      id: 'age'
    },
    {
    	field: 'Height',
    	value: 0,
    	hidden: false,
      type: 'number',
      id: 'height'
    },
    {
    	field: 'Weight',
    	value: 0,
    	hidden: false,
      type: 'number',
      id: 'weight'
    }];
    $scope.descriptors = [
    {
    	field: 'Background',
    	value: '',
      type: 'text',
      id: 'background'
    },
    {
    	field: 'Traits',
    	value: '',
      type: 'text',
      id: 'notable_traits'
    },
    {
    	field: 'Bonds',
    	value: '',
      type: 'text',
      id: 'bonds'
    },
    {
    	field: 'Physical Description',
    	value: '',
      type: 'text',
      id: 'description'
    },
    {
    	field: 'Miscellaneous Notes',
    	value: '',
      type: 'text',
      id: 'notes'
    }];
    $scope.equipment = [
    {
    	field: 'Armor',
    	value: '',
      type: 'text'
    },
    {
    	field: 'Weapons',
    	value: '',
      type: 'text'
    },
    {
    	field: 'Tools',
    	value: '',
      type: 'text'
    },
    {
    	field: 'Platinum',
    	value: 0,
      type: 'number'
    },
    {
    	field: 'Gold',
    	value: 0,
      type: 'number'
    },
    {
    	field: 'Electrum',
    	value: 0,
      type: 'number'
    },
    {
    	field: 'Silver',
    	value: 0,
      type: 'number'
    },
    {
    	field: 'Copper',
    	value: 0,
      type: 'number'
    }];
    $scope.tabs = [
		{
			title: 'Stats',
			url: 'stats.tpl.html'
		},
		{
			title: 'Skills',
			url: 'skills.tpl.html'
		},
		{
			title: 'Details',
			url: 'details.tpl.html'
		},
		{
			title: 'Descriptors',
			url: 'descriptors.tpl.html'
		},
		{
			title: 'Equipment',
			url: 'equipment.tpl.html'
		}
	];
  $scope.dropdowns = [
    {
      field: 'Race',
      list: [
        'Dragonborn',
        'Dwarf',
        'Elf',
        'Gnome',
        'Half-Elf',
        'Halfling',
        'Half-Orc',
        'Human',      
        'Tiefling'
      ],
      hidden: false
    },
    {
      field: 'Alignment',
      list: [
        'Lawful Good',
        'Lawful Neutral',
        'Lawful Evil',
        'Neutral Good',
        'True Neutral',
        'Neutral Evil',
        'Choatic Good',
        'Chaotic Neutral',
        'Choatic Evil'
      ],
      hidden: false
    },
    {
      field: 'Class',
      list: [
        'Barbarian',
        'Bard',
        'Cleric',
        'Druid',
        'Fighter',
        'Monk',
        'Paladin',
        'Ranger',
        'Rogue',
        'Sorcerer',
        'Warlock',
        'Wizard'
      ],
      class_objects: {
        'Barbarian':
        {
          archetype: {
            name: 'Path',
            list: [
              'Path of the Berserker',
              'Path of the Totem Warrior'
            ]
          }
        },
        'Bard':
        {
          archetype: {
            name: 'College',
            list: [
              'College of Lore',
              'College of Valor'
            ]
          }
        },
        'Cleric':
        {
          archetype: {
            name: 'Domain',
            list: [
              'Knowledge Domain',
              'Life Domain',
              'Light Domain',
              'Nature Domain',
              'Tempest Domain',
              'Trickery Domain',
              'War Domain'
            ]
          }
        },
        'Druid':
        {
          archetype: {
            name: 'Circle',
            list: [
              'Circle of the Land',
              'Circle of the Moon'
            ]
          }
        },
        'Fighter':
        {
          archetype: {
            name: 'Archetype',
            list: [
              'Champion',
              'Battle Master',
              'Eldritch Knight'
            ]
          },
          fighting_style: {
            name: 'Fighting Style',
            list: [
              'Archery',
              'Defense',
              'Dueling',
              'Great Weapon Fighting',
              'Protection',
              'Two-Weapon Fighting'
            ]
          }
        },
        'Monk':
        {
          archetype: {
            name: 'Tradition',
            list: [
              'Way of the Open Hand',
              'Way of Shadow',
              'Way of the Four Elements'
            ]
          }
        },
        'Paladin':
        {
          archetype: {
            name: 'Oath',
            list: [
              'Oath of Devotion',
              'Oath of the Ancients',
              'Oath of Vengeance'
            ]
          },
          fighting_style: {
            name: 'Fighting Style',
            list: [
              'Defense',
              'Dueling',
              'Great Weapon Fighting',
              'Protection'
            ]
          }
        },
        'Ranger':
        {
          archetype: {
            name: 'Archetype',
            list: [
              'Hunter',
              'Beast Master'
            ]
          },
          fighting_style: {
            name: 'Fighting Style',
            list: [
              'Archery',
              'Defense',
              'Dueling',
              'Two-Weapon Fighting'
            ]
          }
        },
        'Rogue':
        {
          archetype: {
            name: 'Archetype',
            list: [
              'Thief',
              'Assassin',
              'Arcane Trickster'
            ]
          }
        },
        'Sorcerer':
        {
          archetype: {
            name: 'Origin',
            list: [
              'Draconic Bloodline',
              'Wild Magic'
            ]
          }
        },
        'Warlock':
        {
          archetype: {
            name: 'Pact',
            list: [
              'Pact of the Chain',
              'Pact of the Blade',
              'Pact of the Tome'
            ]
          },
          fighting_style: {
            name: 'Patron',
            list: [
              'The Archfey',
              'The Fiend',
              'The Great Old One'
            ]
          }
        },
        'Wizard':
        {
          archetype: {
            name: 'School',
            list: [
              'School of Abjuration',
              'School of Conjuration',
              'School of Divination',
              'School of Enchantment',
              'School of Evocation',
              'School of Illusion',
              'School of Necromancy',
              'School of Transmutation'
            ]
          }
        }
      },
      hidden: false
    },
  ];
	$scope.radios = [
    {
      field: 'Gender',
      value: 'Male',
      list: [
        'Female',
        'Male',
        'Other'
      ]
    }
  ]
  $scope.genderList = [ 'Male', 'Female', 'Other' ];
  $scope.currentGender = '';
  $scope.updateGender = function(gender) {
    console.log(gender);
    //$scope.currentGender = gender;
  }
  $scope.currentClass = { name: '', has_fs: false , currentArch: '', currentFS: '' };
  $scope.currentRace = '';
  $scope.currentTab = 'stats.tpl.html';
	$scope.onClickTab = function(tab) {
		$scope.currentTab = tab.url;
	};
	$scope.isActiveTab = function(tabUrl) {
		return tabUrl === $scope.currentTab;
	};
	$scope.checkFeats = function() {
    var feats = $scope.skills[2].value;
    feats.split(',');
  };
  $scope.checkProficiencies = function() {
      //display what tools and weapons do not have proficiency
      var toolChecks = [];
      var toolProfs = $scope.skills[5].value;
      toolProfs.split(',');
      var tools = $scope.equipment[2].value;
      tools.split(',');
      for(i in tools){
          if(toolProfs.indexOf(tools[i]) === -1){
              //that tool is not in the profs
              toolChecks.push(tools[i]);
          }
      }

      var weaponChecks = [];
      var weaponProfs = $scope.skills[6].value;
      weaponProfs.split(',');
      var weapons = $scope.equipment[1].value;
      weapons.split(',');
	   //MODIFY THIS
      for(i in weapons){
          if(weaponProfs.indexOf(weaponss[i]) === -1){
              //that weapon is not in the profs
              weaponChecks.push(tools[i]);
          }
      }
  };
  $scope.validateStat = function(stat) {
    if (stat.value < 0) {
      console.log(stat.field, 'must be greater than 0');
    }
  }
  $scope.validateSkill = function(skill) {
    if (skill.field === 'Level') {
      if (skill.value < 1 || skill.value > 20) {
        console.log('Level must be between 1 and 20');
      }
    } else if (skill.field === 'Feats') {
      var feats = skill.value.split(',');
      var times_occur = {};
      for (f in feats) {
        feats[f].toLowerCase();
        if (times_occur[feats[f]]) {
          times_occur[feats[f]] += 1;
        } else {
          times_occur[feats[f]] = 1;
        }
        if ($scope.feats.indexOf(feats[f]) === -1) {
          console.log('Feat does not exist!');
        }
        if (times_occur[feats[f]] > 1) {
          console.log('Cannot have a feat more than once');
        }
        if (feats[f] === 'defense duelist') {
          if ($scope.stats[1].value < 13) {
            console.log('Dex must be 13 or higher!');
          }
        } else if (feats[f] === 'elemental adept') {
          continue; // At least one spell slot
        } else if (feats[f] === 'grappler') {
          if ($scope.stats[0].value < 13) {
            console.log('Str must be 13 or higher!');
          }
        } else if (feats[f] === 'heavily armored') {
          continue; // Prof. w/ medium armor
        } else if (feats[f] === 'heavy armor master') {
          continue; // Prof. w/ heavy armor
        } else if (feats[f] === 'inspiring leader') {
          if ($scope.stats[5].value < 13) {
            conole.log('Char must be 13 or higher!');
          }
        } else if (feats[f] === 'medium armor master') {
          continue; // Prof. w/ medium armor
        } else if (feats[f] === 'moderately armored') {
          continue; // Prof. w/ light armor
        } else if (feats[f] === 'ritual caster') {
          if ($scope.stats[3].value < 13 && $scope.stats[4].value < 13) {
            console.log('Int or Wis must be 13 or higher!');
          }
        } else if (feats[f] === 'skulker') {
          if ($scope.stats[1].value < 13) {
            console.log('Dex must be 13 or higher!');
          }
        } else if (feats[f] === 'spell sniper') {
          continue; // At least one spell slot
        } else if (feats[f] === 'war caster') {
          continue; // At least one spell slot
        }
      }
    }
  }
  $scope.updateValue = function(field, value) {
    //console.log(field, value);
    field.value = value;
  };
	$scope.classSelect = function(class_name) {
    // Check if Class field is being changed
    var isClass = false;
    if ($scope.dropdowns[2].list.indexOf(class_name) !== -1) {
      isClass = true;
    } else if ($scope.dropdowns[0].list.indexOf(class_name) !== -1) {
      $scope.currentRace = class_name;
    }
    if (!(isClass)) {return;}

    // Clear current Archetype and Fighting Style dropdowns
    var details_table = document.getElementById('details_table');
    if ($scope.currentClass.name) {
      if ($scope.currentClass.has_fs) {
        details_table.deleteRow(-1);
        details_table.deleteRow(-1);
      } else {
        details_table.deleteRow(-1);
      }
    }

    $scope.currentClass.name = class_name;
    var selected_class = $scope.dropdowns[2].class_objects[class_name];
	  var a_list = selected_class.archetype.list;
    for (first in selected_class) break;
    for (last in selected_class);
    var a_row = details_table.insertRow();
    var a_cell1 = a_row.insertCell();
    a_cell1.innerHTML = selected_class.archetype.name;
    a_cell1.setAttribute("style", "text-align: center");
    var a_cell2 = a_row.insertCell();
	  var str = '<select>';
	  for (a in a_list) {
	    str += '<option value="' + a_list[a] + '">' + a_list[a] + '</option>';
	    if (a === a_list.length - 1) {
		    str += '</select>';
	    }
	  }
	  a_cell2.innerHTML = str;
    if (last !== first) {
      $scope.currentClass.has_fs = true;
      var f_list = selected_class.fighting_style.list;
      var f_row = details_table.insertRow();
      var f_cell1 = f_row.insertCell();
      f_cell1.innerHTML = selected_class.fighting_style.name;
      f_cell1.setAttribute("style", "text-align: center");
      var f_cell2 = f_row.insertCell();
      str = '<select>';
      for (f in f_list) {
        str += '<option value="' + f_list[f] + '">' + f_list[f] + '</option>';
        if (f === f_list.length - 1) {
          str += '</select>';
        }
      }
      f_cell2.innerHTML = str;
    } else {
      $scope.currentClass.has_fs = false;
    }
  };
  $scope.submit = function() {
    var char_object = {};
    // Save Stats
    for (s in $scope.stats) {
      char_object[$scope.stats[s].field] = $scope.stats[s].value;
    }
    // Save Skills
    for (s in $scope.skills) {
      char_object[$scope.skills[s].field] = $scope.skills[s].value;
    }
    // Save Details
    for (d in $scope.details) {
      char_object[$scope.details[d].field] = $scope.details[d].value;
    }
    // Save Gender, Race, Alignment, Class, Archetype, & Fighting Style
    char_object['Gender'] = $scope.currentGender;
    char_object['Race'] = $scope.currentRace;
    char_object['Alignment'] = $scope.currentAlignment;
    char_object['Class'] = $scope.currentClass.name;
    char_object['Archetype'] = $scope.currentClass.currentArch;
    char_object['Fighting Style'] = $scope.currentClass.currentFS;
    // Save Descriptors
    for (d in $scope.descriptors) {
      char_object[$scope.descriptors[d].field] = $scope.descriptors[d].value;
    }
    // Save Equipment
    for (e in $scope.equipment) {
      char_object[$scope.equipment[e].field] = $scope.equipment[e].value;
    }
    var char_json = JSON.stringify(char_object);
    console.log(char_json);
    // Post to Server
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "object.json", true);
    xhttp.send(char_json);
  };
  $scope.load = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "object.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        $scope.fillForm(JSON.parse(this.response));
      }
    }
  };
  $scope.fillForm = function(char_json) {
    console.log(char_json);
    for (key in char_json) {
      $scope.findField(char_json, key);
    }
  };
  $scope.findField = function(char_json, key) {
    // Check if key in Stats
    for (s in $scope.stats) {
      if ($scope.stats[s].field === key) {
        $scope.stats[s].value = char_json[key];
      }
    }
    // Check if key in Skills
    for (s in $scope.skills) {
      if ($scope.skills[s].field === key) {
        $scope.skills[s] = char_json[key];
      }
    }
    // Check if key in Details
    for (d in $scope.details) {
      if ($scope.details[d].field === key) {
        $scope.details[d] = char_json[key];
      }
    }
    // Check if key is Gender, Race, Alignment, Class, Archetype, or Fighting Style
    if (key === 'Gender') {
      $scope.currentGender = char_json[key];
    } else if (key === 'Race') {
      $scope.currentRace = char_json[key];
    } else if (key === 'Alignment') {
      $scope.currentAlignment = char_json[key];
    } else if (key === 'Class') {
      $scope.currentClass = char_json[key];
    } else if (key === 'Archetype') {
      $scope.currentClass.currentArch = char_json[key];
    } else if (key === 'Fighting Style') {
      $scope.currentClass.currentFS = char_json[key];
    }
    // Check if key in Descriptors
    for (d in $scope.descriptors) {
      if ($scope.descriptors[d].field === key) {
        $scope.descriptors[d] = char_json[key];
      }
    }
    // Check if key in Equipment
    for (e in $scope.equipment) {
      if ($scope.equipment[e].field === key) {
        $scope.equipment[e] = char_json[key];
      }
    }
  }
}]);
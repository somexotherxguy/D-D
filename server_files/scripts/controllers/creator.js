app.directive('dynamicInput', [function(){
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            
        }
        
    }
}]);

app.controller('creator', ['$scope', '$route', function($scope, $route) {
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
    $scope.weapon_list = [];
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
    $scope.tools = [
      "alchemist's supplies",
      "bowyer/fletcher tools",
      "brewer's supplies",
      "calligrapher's supplies",
      "carpenter's tools",
      "cartographer's tools",
      "climber's kit",
      "cobbler's tools",
      "cook's utensils",
      "disguise kit",
      "forgery kit",
      "glassblower's tools",
      "goldsmith/silversmith's tools",
      "healer's kit",
      "herbalism kit",
      "jeweler's tools",
      "leatherworker's tools",
      "mason's tools",
      "navigator's tools",
      "painter's supplies",
      "poisoner's kit",
      "potter's tools",
      "smith's tools",
      "thieves' tools",
      "tinker's tools",
      "weaver's tools",
      "woodcarver's tools"
    ];
    $scope.stats = [
    {
    	field: 'Str',
    	value: 0,
      type: 'number',
      id: 'str',
      errors: []
    },
    {
    	field: 'Dex',
    	value: 0,
      type: 'number',
      id: 'dex',
      errors: []
    },
    {
    	field: 'Con',
    	value: 0,
      type: 'number',
      id: 'con',
      errors: []
    },
    {
    	field: 'Int',
    	value: 0,
      type: 'number',
      id: 'int',
      errors: []
    },
    {
    	field: 'Wis',
    	value: 0,
      type: 'number',
      id: 'wis',
      errors: []
    },
    {
    	field: 'Char',
    	value: 0,
      type: 'number',
      id: 'char',
      errors: []
    },
    {
    	field: 'HP',
    	value: 0,
      type: 'number',
      id: 'hp',
      errors: []
    }];
    $scope.skills = [
    {
    	field: 'Level',
    	value: 1,
      type: 'number',
      id: 'level',
      errors: []
    },
    {
    	field: 'Languages',
    	value: '',
      type: 'text',
      id: 'languages',
      errors: []
    },
    {
    	field: 'Feats',
    	value: '',
      type: 'text',
      id: 'feat',
      errors: []
    },
    {
    	field: 'Spells',
    	value: '',
      type: 'text',
      id: 'available_spells',
      errors: []
    },
    {
    	field: 'Abilities',
    	value: '',
      type: 'text',
      id: 'abilities',
      errors: []
    },
    {
    	field: 'Tool Proficiencies',
    	value: '',
      type: 'text',
      id: 'tool_prof',
      errors: []
    },
    {
    	field: 'Weapon Proficiencies',
    	value: '',
      type: 'text',
      id: 'weapon_prof',
      errors: []
    },
    {
      field: 'Armor Proficiencies',
      value: '',
      type: 'text',
      id: 'armor_prof',
      errors: []
    }];
    $scope.details = [
    {
    	field: 'Name',
    	value: '',
    	hidden: false,
      type: 'text',
      id: 'name',
      errors: []
    },
    {
    	field: 'Age',
    	value: 1,
    	hidden: false,
      type: 'number',
      id: 'age',
      errors: []
    },
    {
    	field: 'Height',
    	value: 0,
    	hidden: false,
      type: 'number',
      id: 'height',
      errors: []
    },
    {
    	field: 'Weight',
    	value: 0,
    	hidden: false,
      type: 'number',
      id: 'weight',
      errors: []
    }];
    $scope.descriptors = [
    {
    	field: 'Background',
    	value: '',
      type: 'text',
      id: 'background',
      errors: []
    },
    {
    	field: 'Traits',
    	value: '',
      type: 'text',
      id: 'notable_traits',
      errors: []
    },
    {
    	field: 'Bonds',
    	value: '',
      type: 'text',
      id: 'bonds',
      errors: []
    },
    {
    	field: 'Physical Description',
    	value: '',
      type: 'text',
      id: 'description',
      errors: []
    },
    {
    	field: 'Miscellaneous Notes',
    	value: '',
      type: 'text',
      id: 'notes',
      errors: []
    }];
    $scope.equipment = [
    {
    	field: 'Armor',
    	value: '',
      type: 'text',
      errors: []
    },
    {
    	field: 'Weapons',
    	value: '',
      type: 'text',
      errors: []
    },
    {
    	field: 'Tools',
    	value: '',
      type: 'text',
      errors: []
    },
    {
    	field: 'Platinum',
    	value: 0,
      type: 'number',
      errors: []
    },
    {
    	field: 'Gold',
    	value: 0,
      type: 'number',
      errors: []
    },
    {
    	field: 'Electrum',
    	value: 0,
      type: 'number',
      errors: []
    },
    {
    	field: 'Silver',
    	value: 0,
      type: 'number',
      errors: []
    },
    {
    	field: 'Copper',
    	value: 0,
      type: 'number',
      errors: []
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
      value: '',
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
      value: '',
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
      value: '',
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
      a_list: [],
      f_list: [],
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
    }
  ];
	$scope.radios = [
    {
      field: 'Gender',
      g_value: 'Male',
      list: [
        'Female',
        'Male',
        'Other'
      ]
    }
  ];
  $scope.genderList = [ 'Male', 'Female', 'Other' ];
  $scope.currentGender = '';
  $scope.currentClass = { name: '', has_fs: false , archList: [], currentArch: '', currentFS: '' };
  $scope.currentRace = '';
  $scope.currentTab = 'stats.tpl.html';
  $scope.currentAlignment = '';

	$scope.onClickTab = function(tab) {
    console.log(tab.url);
		$scope.currentTab = tab.url;
    console.log($scope.currentTab);
    if ($scope.currentTab === "details.tpl.html") {
      $scope.classSelect($scope.currentClass.name);
    }
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
  };
  $scope.validateStat = function(stat) {
    stat.errors = [];
    if (stat.value === null) {
      stat.errors.push(stat.field + ' cannot be blank');
    } else if (stat.value < 0) {
      stat.errors.push(stat.field + ' must be greater than 0');
    }
  }
  $scope.validateSkill = function(skill) {
    skill.errors = [];
    if (skill.field === 'Level') {
      if (skill.value === null) {
        skill.errors.push('Level cannot be blank');
      } else if (skill.value < 1 || skill.value > 20) {
        skill.errors.push('Level must be between 1 and 20');
      }
    } else if (skill.field === 'Feats') {
      var feats = skill.value.split(',');
      armor_profs = $scope.skills[7].value.split(',');
      var times_occur = {};
      for (f in feats) {
        feats[f].toLowerCase();
        if (times_occur[feats[f]]) {
          times_occur[feats[f]] += 1;
        } else {
          times_occur[feats[f]] = 1;
        }
        if ($scope.feats.indexOf(feats[f]) === -1) {
          skill.errors.push('Feat does not exist');
        }
        if (times_occur[feats[f]] > 1) {
          skill.errors.push('Cannot have a feat more than once');
        }
        if (feats[f] === 'defense duelist') {
          if ($scope.stats[1].value < 13) {
            skill.errors.push('Dex must be 13 or higher');
          }
        } else if (feats[f] === 'elemental adept') {
          continue; // At least one spell slot
        } else if (feats[f] === 'grappler') {
          if ($scope.stats[0].value < 13) {
            skill.errors.push('Str must be 13 or higher');
          }
        } else if (feats[f] === 'heavily armored') {
          if (armor_profs.indexOf('medium') === -1) {
            skill.errors.push('Must be proficient in medium armor');
          }
        } else if (feats[f] === 'heavy armor master') {
          if (armor_profs.indexOf('heavy') === -1) {
            skill.errors.push('Must be proficient in heavy armor');
          }
        } else if (feats[f] === 'inspiring leader') {
          if ($scope.stats[5].value < 13) {
            skill.errors.push('Char must 13 or higher');
          }
        } else if (feats[f] === 'medium armor master') {
          if (armor_profs.indexOf('medium') === -1) {
            skill.errors.push('Must be proficient in medium armor');
          }
        } else if (feats[f] === 'moderately armored') {
          if (armor_profs.indexOf('light') === -1) {
            skill.errors.push('Must be proficient in light armor');
          }
        } else if (feats[f] === 'ritual caster') {
          if ($scope.stats[3].value < 13 && $scope.stats[4].value < 13) {
            skill.errors.push('Int or Wis must be 13 or higher!');
          }
        } else if (feats[f] === 'skulker') {
          if ($scope.stats[1].value < 13) {
            skill.errors.push('Dex must be 13 or higher!');
          }
        } else if (feats[f] === 'spell sniper') {
          continue; // At least one spell slot
        } else if (feats[f] === 'war caster') {
          continue; // At least one spell slot
        }
      }
    }
  };
  $scope.validateEquipment = function(field, equipment) {
    if (field === 'Weapons') {
      if (equipment) {
         $scope.equipment[1].errors = [];
         var weaponChecks = [];
         var weaponProfs = $scope.skills[6].value;
         weaponProfs.split(',');
         var weapon_list = $scope.equipment[1].value.split(',');
        //MODIFY THIS
         for(i in weapon_list){
           if(weaponProfs.indexOf($scope.weapons[weapon_list[i]]) === -1){
               //that weapon is not in the profs
               weaponChecks.push(weapon_list[i]);
           }
         }
         if (weaponChecks.length > 0) {
           var temp = 'Your are not proficient with ';
           for (a in weaponChecks) {
             $scope.equipment[1].errors.push(temp + weaponChecks[a]);
             temp = ', ';
           }
         }
      }
    } else if (field === 'Armor') {
      if (equipment) {
        $scope.equipment[0].errors = [];
         var armorChecks = [];
         var armorProfs = $scope.skills[7].value;
         armorProfs.split(',');
         var armor_list = $scope.equipment[0].value.split(',');
         console.log(armor_list);
         console.log(armorProfs);
        //MODIFY THIS
         for(i in armor_list){
           if(armorProfs.indexOf($scope.armor[armor_list[i]]) === -1){
               //that weapon is not in the profs
               armorChecks.push(armor_list[i]);
           }
         }
         if (armorChecks.length > 0) {
           var temp = 'Your are not proficient with ';
           for (a in armorChecks) {
             $scope.equipment[0].errors.push(temp + armorChecks[a]);
             temp = ', ';
           }
         }
      }
    } else if (field === 'Tools') {
      if (equipment) {
        $scope.equipment[2].errors = [];
        //display what tools and weapons do not have proficiency
        var toolChecks = [];
        var toolProfs = $scope.skills[5].value;
        toolProfs.split(',');
        var tools = $scope.equipment[2].value.split(',');
        for(i in tools){
          if(toolProfs.indexOf(tools[i]) === -1){
              //that tool is not in the profs
              toolChecks.push(tools[i]);
          }
        }
        if (toolChecks.length > 0) {
          var temp = 'Your are not proficient with ';
          for (a in toolChecks) {
            $scope.equipment[2].errors.push(temp + toolChecks[a]);
            temp = ', ';
          }
        }
      }
    }
  };
  $scope.updateValue = function(field, value) {
    var s = document.getElementById(field);
    //console.log($scope.dropdowns[0].value);
    //console.log(value);
    //console.log ($scope.dropdowns[0].value === value);
    //field.value = value;
    if (($scope.stats.indexOf(field) !== -1) ||  
      ($scope.skills.indexOf(field) !== -1) || 
      ($scope.details.indexOf(field) !== -1) ||
      ($scope.descriptors.indexOf(field) !== -1) ||
      ($scope.equipment.indexOf(field) !== -1)) {
      if (typeof(value) === 'string') {
        value = value.toLowerCase();
        field.value = value;
      }
      field.value = value;
    } else if (field === 'Gender') {
      $scope.currentGender = value;
      $scope.radios[0].g_value = value;
      console.log($scope.radios[0].g_value);
    } else if (field === 'Race') {
      $scope.dropdowns[0].errors = [];
      $scope.dropdowns[0].value = value;
      $scope.dropdowns[0].errors.push(value);
      $scope.currentRace = value;
    } else if (field === 'Alignment') {
      $scope.dropdowns[1].errors = [];
      $scope.dropdowns[1].value = value;
      $scope.dropdowns[1].errors.push(value);
      $scope.currentAlignment = value;
    } else if (field === 'Class') {
      $scope.dropdowns[2].errors = []
      $scope.dropdowns[2].value = value;
      $scope.dropdowns[2].errors.push(value);
      $scope.classSelect(value);
    } else if (field === 'Archetype') {
      $scope.currentClass.currentArch = value;
    } else if (field === 'Fighting Style') {
      $scope.currentClass.currentFS = value;
    }
  };
	$scope.classSelect = function(class_name) {
    console.log(class_name);
    if (!(class_name) || $scope.currentTab !== "details.tpl.html") {return;}

    // Clear current Archetype and Fighting Style dropdowns
    var details_table = document.getElementById('details_table');
    console.log(details_table);
    if ($scope.currentClass.name && details_table) {
      if ($scope.currentClass.has_fs && details_table.rows.length === 10) {
        details_table.deleteRow(-1);
        details_table.deleteRow(-1);
      } else if (details_table.rows.length === 9) {
        details_table.deleteRow(-1);
      }
    }

    $scope.currentClass.name = class_name;
    var selected_class = $scope.dropdowns[2].class_objects[class_name];
	  var a_list = selected_class.archetype.list;
    $scope.currentClass.archList = a_list;
    for (first in selected_class) break;
    for (last in selected_class);
    var a_row = details_table.insertRow();
    var a_cell1 = a_row.insertCell();
    a_cell1.innerHTML = selected_class.archetype.name;
    a_cell1.setAttribute("style", "text-align: center");
    var a_cell2 = a_row.insertCell();
	  var str = '<select ng-model="archetype" ng-change="updateValue(Archetype, archetype)">';
    for (a in a_list) {
	    str += '<option value="' + a_list[a] + '">' + a_list[a] + '</option>';
	    if (a === a_list.length - 1) {
		    str += '</select>';
	    }
	  }
	  a_cell2.innerHTML = str;
    a_cell3 = a_row.insertCell();
    a_cell3.innerHTML = $scope.currentClass.currentArch;
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
      f_cell3 = f_row.insertCell();
      f_cell3.innerHTML = $scope.currentClass.currentArch;
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
    xhttp.open("POST", "/user/"+localStorage.getItem('userID')+"/"+$scope.details[0].value+"/new_object.json", true);
    xhttp.send(char_json);
  };
  $scope.load = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/"+localStorage.getItem('userID')+"/"+$scope.details[0].value+"/new_object.json", true);
    xhttp.send();
    console.log(xhttp.response);
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
        return;
      }
    }
    // Check if key in Skills
    for (s in $scope.skills) {
      if ($scope.skills[s].field === key) {
        $scope.skills[s] = char_json[key];
        return;
      }
    }
    // Check if key in Details
    for (d in $scope.details) {
      if ($scope.details[d].field === key) {
        $scope.details[d] = char_json[key];
        return;
      }
    }
    // Check if key is Gender, Race, Alignment, Class, Archetype, or Fighting Style
    if (key === 'Gender') {
      $scope.currentGender = char_json[key];
      return;
    } else if (key === 'Race') {
      $scope.currentRace = char_json[key];
      return;
    } else if (key === 'Alignment') {
      $scope.currentAlignment = char_json[key];
      return;
    } else if (key === 'Class') {
      $scope.currentClass = char_json[key];
      return;
    } else if (key === 'Archetype') {
      $scope.currentClass.currentArch = char_json[key];
      return;
    } else if (key === 'Fighting Style') {
      $scope.currentClass.currentFS = char_json[key];
      return;
    }
    // Check if key in Descriptors
    for (d in $scope.descriptors) {
      if ($scope.descriptors[d].field === key) {
        $scope.descriptors[d] = char_json[key];
        return;
      }
    }
    // Check if key in Equipment
    for (e in $scope.equipment) {
      if ($scope.equipment[e].field === key) {
        $scope.equipment[e] = char_json[key];
        return;
      }
    }
  }
}]);
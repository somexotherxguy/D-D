var class_options = {
  'barbarian':
    {
      'path':
        {
          'path_of_the_beserker': 'Path of the Beserker',
          'path_of_the_totem_warrior': 'Path of the Totem Warrior'
        }
    },
  'bard':
    {
      'college':
        {
          'college_of_lore': 'College of Lore',
          'college_of_valor': 'College of Valor'
        }
    },
  'cleric':
    {
      'domain':
        {
          'knowledge_domain': 'Knowledge Domain',
          'life_domain': 'Life Domain',
          'light_domain': 'Light Domain',
          'nature_domain': 'Nature Domain',
          'tempest_domain': 'Tempest Domain',
          'trickery_domain': 'Trickery Domain',
          'war_domain': 'War Domain'
        }
    },
  'druid':
    {
      'circle':
        {
          'circle_of_the_land': 'Circle of the Land',
          'circle_of_the_moon': 'Circle of the Moon'
        }
    },
  'fighter':
    {
      'archetype':
        {
          'champion': 'Champion',
          'battle_master': 'Battle Master',
          'eldritch_knight': 'Eldritch Knight'
        },
      'Fighting Style':
        {
          'archery':'Archery',
          'defense': 'Defense',
          'dueling': 'Dueling',
          'great_weapon': 'Great Weapon Fighting',
          'protection': 'Protection',
          'two_weapon':'Two Weapon Fighting',
        }
    },
  'monk':
    {
      'tradition':
        {
          'way_of_the_open_hand': 'Way of the Open Hand',
          'way_of_shadow': 'Way of Shadow',
          'way_of_the_four_elements': 'Way of the Four Elements'
        }
    },
  'paladin':
    {
      'oath':
        {
          'oath_of_devotion': 'Oath of Devotion',
          'oath_of_the_ancients': 'Oath of the Ancients',
          'oath_of_vengeance': 'Oath of Vengeance'
        },
      'Fighting Style':
      {
          'defense': 'Defense',
          'dueling': 'Dueling',
          'great_weapon_fighting': 'Great Weapon Fighting',
          'protection': 'Protection'
      }
    },
  'ranger':
    {
      'archetype':
        {
          'hunter': 'Hunter',
          'beast_master': 'Beast Master',
        },
      'Fighting Style':
      {
          'archery': 'Archery',
          'defense': 'Defense',
          'dueling': 'Dueling',
          'two_weapon_fighting': 'Two-Weapon Fighting'
      }
    },
  'rogue':
    {
      'archetype':
        {
          'thief': 'Thief',
          'assassin': 'Assassin',
          'arcane_trickster': 'Arcane Trickster'
        }
    },
  'sorcerer':
    {
      'origin':
        {
          'draconic_bloodline': 'Draconic Bloodline',
          'wild_magic': 'Wild Magic'
        }
    },
  'warlock':
    {
      'pact':
        {
          'chain': 'Pact of the Chain',
          'blade': 'Pact of the Blade',
          'tome': 'Pact of the Tome'
        },
      'Patron':
        {
          'archfey': 'The Archfey',
          'fiend': 'The Fiend',
          'great_old_one': 'The Great Old One'
        }
    },
  'wizard':
    {
      'school':
        {
          'abjuration': 'School of Abjuration',
          'conjuration': 'School of Conjuration',
          'divination': 'School of Divination',
          'enchantment': 'School of Enchantment',
          'evocation': 'School of Evocation',
          'illusion': 'School of Illusion',
          'necromancy': 'School of Necromancy',
          'transmutation': 'School of Transmutation'
        }
    }
};

app.directive('dynamicInput', [function(){
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            
        }
        
    }
}]);

app.controller('creator', ['$scope', function($scope) {
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
      class_object: [
        {
          'Barbarian': {
            label: 'Barbarian',
            archetype: {
              name: 'Path',
              list: [
                'Path of the Berserker',
                'Path of the Totem Warrior'
              ]
            }
          }
        },{
          'Bard': {
            label: 'Barbarian',
            archetype: {
              name: 'College',
              list: [
                'College of Lore',
                'College of Valor'
              ],
              hidden: true
            }
          }
        },{
          'Cleric': {
            label: 'Barbarian',
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
              ],
              hidden: true
            }
          }
        },{
          'Druid': {
            label: 'Barbarian',
            archetype: {
              name: 'Circle',
              list: [
                'Circle of the Land',
                'Circle of the Moon'
              ],
              hidden: true
            }
          }
        },{
          'Fighter': {
            label: 'Barbarian',
            archetype: {
              name: 'Archetype',
              list: [
                'Champion',
                'Battle Master',
                'Eldritch Knight'
              ],
              hidden: true
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
              ],
              hidden: true
            }
          }
        },{
          'Monk': {
            label: 'Barbarian',
            archetype: {
              name: 'Tradition',
              list: [
                'Way of the Open Hand',
                'Way of Shadow',
                'Way of the Four Elements'
              ],
              hidden: true
            }
          }
        },{
          'Paladin': {
            label: 'Barbarian',
            archetype: {
              name: 'Oath',
              list: [
                'Oath of Devotion',
                'Oath of the Ancients',
                'Oath of Vengeance'
              ],
              hidden: true
            },
            fighting_style: {
              name: 'Fighting Style',
              list: [
                'Defense',
                'Dueling',
                'Great Weapon Fighting',
                'Protection'
              ],
              hidden: true
            }
          }
        },{
          'Ranger': {
            label: 'Barbarian',
            archetype: {
              name: 'Archetype',
              list: [
                'Hunter',
                'Beast Master'
              ],
              hidden: true
            },
            fighting_style: {
              name: 'Fighting Style',
              list: [
                'Archery',
                'Defense',
                'Dueling',
                'Two-Weapon Fighting'
              ],
              hidden: true
            }
          }
        },{
          'Rogue': {
            label: 'Barbarian',
            archetype: {
              name: 'Archetype',
              list: [
                'Thief',
                'Assassin',
                'Arcane Trickster'
              ],
              hidden: true
            }
          }
        },{
          'Sorcerer': {
            label: 'Sorcerer',
            archetype: {
              name: 'Origin',
              list: [
                'Draconic Bloodline',
                'Wild Magic'
              ],
              hidden: true
            }
          }
        },{
          'Warlock': {
            label: 'Warlock',
            archetype: {
              name: 'Pact',
              list: [
                'Pact of the Chain',
                'Pact of the Blade',
                'Pact of the Tome'
              ],
              hidden: true
            },
            fighting_style: {
              name: 'Patron',
              list: [
                'The Archfey',
                'The Fiend',
                'The Great Old One'
              ],
              hidden: true
            }
          }
        },{
          'Wizard': {
            label: 'Wizard',
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
              ],
              hidden: true
            }
          }
        }
      ],
      hidden: false
    },
  ];
	$scope.radios = [
    {
      field: 'Gender',
      list: [
        'Female',
        'Male',
        'Other'
      ],
      hidden: false
    }
  ]
  $scope.currentTab = 'stats.tpl.html';
	$scope.onClickTab = function(tab) {
		$scope.currentTab = tab.url;
	};
	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	};
	$scope.classSelect = function() {
    	/*var class_name = document.getElementById('class').value;
    	$scope.details[10].hidden = true;
    	$scope.details[8].value = class_name[0].toUpperCase() + class_name.slice(1, class_name.length);
    	for (first in class_options[class_name]) break;
    	for (last in class_options[class_name]);
    	$scope.details[9].field = first[0].toUpperCase() + first.slice(1, first.length);
    	$scope.details[9].hidden = false;
    	if (last !== first) {
    		$scope.details[10].field = last;
    		$scope.details[10].hidden = false;
    	}*/
      console.log("Hello");
      //console.log(class_name);
      //if (!class_name) {return;}
    };
}]);
/*setTimeout(function(){
  document.body.innerHTML += "tralala"
  aarg = 'testerdoo'
  console.log(aarg)
}, 100)
*/
name_array = [["Field Name", "Variable Name", "Field Type", "Data Type", "Required?"], ["Password", "password", "text \u2013 password", "string", "y"], ["Char_Icon", "icon", "text", "image file (or hyperlink)", "n"], ["Ideals", "ideal", "text area", "string", "n"], ["Flaws", "flaw", "text area", "string", "n"], ["Backstory", "story", "text area", "string", "n"], ["Gender", "gender", "radio button", "char", "y"], ["Height", "height", "number", "int (in mm)", "y"], ["Race", "race", "dropdown", "string", "y"], ["Alignment", "alignment", "dropdown", "string", "y"], ["Class", "class_name", "dropdown", "string", "y"], ["Fighting Style", "fighting_style", "text?", "string", "n"], ["Background", "background", "text area", "string", "n"], ["Languages", "language", "text", "string", "y"], ["Armor", "armor", "subform", "class", "n"], ["Weapon", "weapon", "subform", "class", "n"], ["Proficiency_Modifier", "proficiency_mod", "number", "int", "n"], ["Abilities", "ability", "subform", "class", "y"], ["Strength", "str", "number", "int", "y"], ["Cons", "con", "number", "int", "y"], ["Wisdom", "wis", "number", "int", "y"], ["Dex", "dex", "number", "int", "y"], ["Int", "int", "number", "int", "y"], ["Charisma", "chr", "number", "int", "y"], ["Misc.", "", "", "", ""], ["Spellcasting", "spellcasting", "subform", "class", "n"], ["Feats", "feat", "dropdown", "string", "n"], ["Username", "username", "text", "string", "y"], ["Character List", "character_list", "hyperlink list", "string", "y"], ["Name", "char_name", "text", "string", "y"], ["Personality Traits", "traits", "subform", "", "n"], ["Bonds", "bonds", "text", "string", "n"], ["Traits_of_Note", "notable_traits", "text area", "string", "n"], ["Description", "description", "text area", "string", "n"], ["Age", "age", "number", "int", "n"], ["Weight", "weight", "number", "int", "y"], ["Sub_race", "sub_race", "dropdown", "string", "n"], ["EXP", "exp", "number", "int", "y"], ["Archetype", "archetype", "dropdown", "string", "y"], ["Level", "level", "number", "int", "y"], ["HP", "hp", "number", "int", "y"], ["Tool_Proficiency", "tool_prof", "number", "int", "y"], ["Weapon_Proficiency", "weapon_prof", "number", "int", "y"], ["Tool", "tool", "subform", "class", "n"], ["Skills", "skills", "dropdown", "string", "y"], ["Saves", "saves", "subform", "class", "y"], ["Equipment", "equipment", "subform", "class", "n"], ["Money", "money", "number", "int", "y"], ["Spells_player_is_able_to_use", "available_spells", "dropdown", "string", "y"], ["Notes", "notes", "text area", "string", "n"], [""]]
function update() {
	var form = document.getElementById("char_info");
    //var char_info = JSON.stringify(form)
    var char_info = {
    	
    }
    console.log(char_info)
	//form.submit();
}

/*function() {
	// Get all element id's
	var str = document.getElementById('str');
	var con = document.getElementById('con');
	var dex = document.getElementById('dex');
	var intelligence = document.getElementById('int');
	var wis = document.getElementById('wis');
	var chr = document.getElementById('chr');
	var ideals = document.getElementById('ideal');
	var flaws = document.getElementById('flaw');
	var story = document.getElementById('story');
	var gender = document.getElementById('gender');
	var height = document.getElementById('height');
	var race = document.getElementById('race');
	var alignment = document.getElementById('alignment');
	var class_name = document.getElementById('class_name');
	var fighting_style = document.getElementById('fighting_style');
	var background = document.getElementById('background');
	var languages = document.getElementById('languages');
	var proficiency_mod = document.getElementById('proficiency_mod');
	var feats = document.getElementById('feat');
	var name = document.getElementById('char_name');
	var traits = document.getElementById('traits');
	var bonds = document.getElementById('bonds');
	var notable_traits = document.getElementById('notable_traits');
	var description = document.getElementById('description');
	var age = document.getElementById('age');
	var weight = document.getElementById('weight');
	var sub_race = document.getElementById('sub_race');
	var exp = document.getElementById('exp');
	var archetype = document.getElementById('archetype');
	var level = document.getElementById('level');
	var hp = document.getElementById('hp');
	var tool_prof = document.getElementById('tool_prof');
	var weapon_prof = document.getElementById('weapon_prof');
	var skills = document.getElementById('skills');
	var money = document.getElementById('money');
	var spells = document.getElementById('available_spells');
	var notes = document.getElementById('notes');
}();*/

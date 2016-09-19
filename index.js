/*setTimeout(function(){
  document.body.innerHTML += "tralala"
  aarg = 'testerdoo'
  console.log(aarg)
}, 100)
*/
name_array = [["Field Name", "Variable Name", "Field Type", "Data Type", "Required?"], ["Password", "password", "text \u2013 password", "string", "y"], ["Char_Icon", "icon", "text", "image file (or hyperlink)", "n"], ["Ideals", "ideal", "text area", "string", "n"], ["Flaws", "flaw", "text area", "string", "n"], ["Backstory", "story", "text area", "string", "n"], ["Gender", "gender", "radio button", "char", "y"], ["Height", "height", "number", "int (in mm)", "y"], ["Race", "race", "dropdown", "string", "y"], ["Alignment", "alignment", "dropdown", "string", "y"], ["Class", "class_name", "dropdown", "string", "y"], ["Fighting Style", "fighting_style", "text?", "string", "n"], ["Background", "background", "text area", "string", "n"], ["Languages", "language", "text", "string", "y"], ["Armor", "armor", "subform", "class", "n"], ["Weapon", "weapon", "subform", "class", "n"], ["Proficiency_Modifier", "proficiency_mod", "number", "int", "n"], ["Abilities", "ability", "subform", "class", "y"], ["Strength", "str", "number", "int", "y"], ["Cons", "con", "number", "int", "y"], ["Wisdom", "wis", "number", "int", "y"], ["Dex", "dex", "number", "int", "y"], ["Int", "int", "number", "int", "y"], ["Charisma", "chr", "number", "int", "y"], ["Misc.", "", "", "", ""], ["Spellcasting", "spellcasting", "subform", "class", "n"], ["Feats", "feat", "dropdown", "string", "n"], ["Username", "username", "text", "string", "y"], ["Character List", "character_list", "hyperlink list", "string", "y"], ["Name", "char_name", "text", "string", "y"], ["Personality Traits", "traits", "subform", "", "n"], ["Bonds", "bonds", "text", "string", "n"], ["Traits_of_Note", "notable_traits", "text area", "string", "n"], ["Description", "description", "text area", "string", "n"], ["Age", "age", "number", "int", "n"], ["Weight", "weight", "number", "int", "y"], ["Sub_race", "sub_race", "dropdown", "string", "n"], ["EXP", "exp", "number", "int", "y"], ["Archetype", "archetype", "dropdown", "string", "y"], ["Level", "level", "number", "int", "y"], ["HP", "hp", "number", "int", "y"], ["Tool_Proficiency", "tool_prof", "number", "int", "y"], ["Weapon_Proficiency", "weapon_prof", "number", "int", "y"], ["Tool", "tool", "subform", "class", "n"], ["Skills", "skills", "dropdown", "string", "y"], ["Saves", "saves", "subform", "class", "y"], ["Equipment", "equipment", "subform", "class", "n"], ["Money", "money", "number", "int", "y"], ["Spells_player_is_able_to_use", "available_spells", "dropdown", "string", "y"], ["Notes", "notes", "text area", "string", "n"]]
function update() {
	var form = document.getElementById("char_info");
    //var char_info = JSON.stringify(form)
    var char_object = { };
    console.log(name_array.slice(1))
    for (field in name_array.slice(1)) {
    	try {
    	    char_object[name_array.slice(1)[field][1]] = document.getElementById(name_array.slice(1)[field][1]).value;
    	}
    	catch (err){;}
    }
    var char_json = JSON.stringify(char_object);
	//form.submit();
}

(function() {
  class_name = document.getElementById("class");
	class_name.addEventListener("change", class_selected(class_name));
})();

function class_selected(class_name)  {
  var archetype_list = document.getElementById("archetype");
  for (i=0; i<archetype_list.length; i++) {
    archetype_list.remove(i);
  }
  switch (class_name.value) {
    case "barbarian":
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='cannibal'>Cannibal</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='einherji'>Einherji</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='path_of_crash'>Path of Crash</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='path_of_exile'>Path of the Exile</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='path_of_fist'>Path of the Fist</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='path_of_healer'>Path of the Healer</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='path_of_ki_warrior'>Path of the Ki Warrior</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='path_of_shaman'>Path of the Shaman</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='path_of_silent_berserker'>Path of the Silent Berserker</option>");      
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='path_of_slayer'>Path of the Slayer</option>");
      break;
    case "bard":
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_compulsion'>College of Compulsion</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_death'>College of Death's Song</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_healing'>College of Healing</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_pain'>College of Pain</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_sorrow'>College of Sorrow</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_sound'>College of Sound</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_taiko'>College of Taiko</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_vylius'>College of Vylius</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_boons'>College of Boons</option>");      
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_band'>College of the Band</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_gambler'>College of the Gambler</option>");
      archetype_list.insertAdjacentHTML("beforeend",
        "<option value='college_of_toreador'>College of the Toréador</option>");
      break;
    default:
      break;
  }
}
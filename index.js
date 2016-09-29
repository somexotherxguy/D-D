/*setTimeout(function(){
  document.body.innerHTML += "tralala"
  aarg = 'testerdoo'
  console.log(aarg)
}, 100)
*/
name_array = [["Field Name", "Variable Name", "Field Type", "Data Type", "Required?"], ["Password", "password", "text \u2013 password", "string", "y"], ["Char_Icon", "icon", "text", "image file (or hyperlink)", "n"], ["Ideals", "ideal", "text area", "string", "n"], ["Flaws", "flaw", "text area", "string", "n"], ["Backstory", "story", "text area", "string", "n"], ["Gender", "gender", "radio button", "char", "y"], ["Height", "height", "number", "int (in mm)", "y"], ["Race", "race", "dropdown", "string", "y"], ["Alignment", "alignment", "dropdown", "string", "y"], ["Class", "class_name", "dropdown", "string", "y"], ["Fighting Style", "fighting_style", "text?", "string", "n"], ["Background", "background", "text area", "string", "n"], ["Languages", "language", "text", "string", "y"], ["Armor", "armor", "subform", "class", "n"], ["Weapon", "weapon", "subform", "class", "n"], ["Proficiency_Modifier", "proficiency_mod", "number", "int", "n"], ["Abilities", "ability", "subform", "class", "y"], ["Strength", "str", "number", "int", "y"], ["Cons", "con", "number", "int", "y"], ["Wisdom", "wis", "number", "int", "y"], ["Dex", "dex", "number", "int", "y"], ["Int", "int", "number", "int", "y"], ["Charisma", "chr", "number", "int", "y"], ["Misc.", "", "", "", ""], ["Spellcasting", "spellcasting", "subform", "class", "n"], ["Feats", "feat", "dropdown", "string", "n"], ["Username", "username", "text", "string", "y"], ["Character List", "character_list", "hyperlink list", "string", "y"], ["Name", "char_name", "text", "string", "y"], ["Personality Traits", "traits", "subform", "", "n"], ["Bonds", "bonds", "text", "string", "n"], ["Traits_of_Note", "notable_traits", "text area", "string", "n"], ["Description", "description", "text area", "string", "n"], ["Age", "age", "number", "int", "n"], ["Weight", "weight", "number", "int", "y"], ["Sub_race", "sub_race", "dropdown", "string", "n"], ["EXP", "exp", "number", "int", "y"], ["Archetype", "archetype", "dropdown", "string", "y"], ["Level", "level", "number", "int", "y"], ["HP", "hp", "number", "int", "y"], ["Tool_Proficiency", "tool_prof", "number", "int", "y"], ["Weapon_Proficiency", "weapon_prof", "number", "int", "y"], ["Tool", "tool", "subform", "class", "n"], ["Skills", "skills", "dropdown", "string", "y"], ["Saves", "saves", "subform", "class", "y"], ["Equipment", "equipment", "subform", "class", "n"], ["Money", "money", "number", "int", "y"], ["Spells_player_is_able_to_use", "available_spells", "dropdown", "string", "y"], ["Notes", "notes", "text area", "string", "n"]]


# <urlbase> / <username> / <character name> / [save | load]




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

/* (function() {
  class_name = document.getElementById("class");
  class_name.addEventListener("change", class_selected(class_name));
})(); */

var class_options = {"fighter":{"archery":"Archery","defense": "Dueling","dueling": "Dueling","great_weapon": "Great Weapon Fighting","protection": "Protection","two_weapon":"Two Weapon Fighting","second_wind": "Second Wind"}}


function class_selected(class_name = "fighter")  {
  var fighting_styles = document.getElementById("fighting_style")
  var archetype_list = document.getElementById("archetype");
  length = archetype_list.options.length
  for (var i = length - 1; i >= 0; i--) {
    archetype_list.remove(i);
  }
  if (class_name !== "fighter") {
    length = fighting_styles.options.length
    for (var i = length - 1; i >= 0; i--) {
      fighting_styles.remove(i)
    }
  } else if (fighting_styles.options.length === 0) {
	  for (i in class_options["fighter"]) {
		  fighting_styles.insertAdjacentHTML("beforeend",
		  '<option value="' + i + '">' + class_options["fighter"][i] + '</option>')
	  }
    /* fighting_styles.insertAdjacentHTML("beforeend",
      "<option value='archery'>Archery</option>")
    fighting_styles.insertAdjacentHTML("beforeend",
      "<option value='defense'>Defense</option>")
    fighting_styles.insertAdjacentHTML("beforeend",
      "<option value='dueling'>Dueling</option>")
    fighting_styles.insertAdjacentHTML("beforeend",
      "<option value='great_weapon'>Great Weapon Fighting</option>")
    fighting_styles.insertAdjacentHTML("beforeend",
      "<option value='protection'>Protection</option>")
    fighting_styles.insertAdjacentHTML("beforeend",
      "<option value='two_weapon'>Two Weapon Fighting</option>")
    fighting_styles.insertAdjacentHTML("beforeend",
      "<option value='second_wind'>Second Wind</option>") */
  }
  switch (class_name) {
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
	  case "cleric":
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='arcana_domain'>Arcana Domain</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='darkness_domain'>Darkness Domain</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='dragon_domain'>Dragon Domain</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='life_death_domain'>Life & Death Domain</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='magic_domain'>Magic Domain</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='martyrdom_domain'>Martyrdom Domain</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='spider_domain'>Spider Domain</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='spirit_domain'>Spirit Domain</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='strife_domain'>Strife Domain</option>");      
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='undeath_domain'>Undeath Domain, Variant</option>");
        break;
  	case "druid":
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_anathema'>Circle of Anathema</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_dragons'>Circle of Dragons</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_plants'>Circle of Plants</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_reptiles'>Circle of Reptiles</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_rot'>Circle of Rot - Druidic Circle</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_first_forest'>Circle of the First Forest</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_beast'>Circle of the Beast</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_furies'>Circle of the Furies</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='circle_of_sun'>Circle of the Sun</option>");
  	  break;
  	case "fighter":
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='archfighter'>Archfighter</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='cavalier'>Cavalier</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='dragonknight'>Dragonknight</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='dreadnought'>Dreadnought</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='elite_mercenary'>Elite Mercenary</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='gladiator'>Gladiator</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='guardian'>Guardian</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='gunslinger'>Gunslinger</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='hoplite'>Hoplite</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='reaver'>Reaver</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='rune_wielder'>Rune Wielder</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='samurai'>Samurai</option>");
        archetype_list.insertAdjacentHTML("beforeend",
          "<option value='shieldman'>Shieldman</option>");
  	  break;
  	case "monk":
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='dervish'>Dervish</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='ki_thief'>Ki Thief</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='miko'>Miko</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='bladeless_sword'>The Bladeless Sword</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_nine_gates'>Way of the Nine Gates of Hell</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_perfect_fist'>Way of the Perfect Fist</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_beggar'>Way of the Beggar</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_body'>Way of the Body</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_force'>Way of the Force</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_stars'>Way of the Innumerable Stars</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_jeskai'>Way of the Jeskai</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_limitless'>Way of the Limitless</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_mentor'>Way of the Mentor</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_silent_death'>Way of the Silent Death</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_fists'>Way of the Thousand Fists</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='way_of_zodiac'>Way of the Zodiac</option>");
  	  break;
  	case "paladin":
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='antipaladin'>Antipaladin</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='oath_of_commerce'>Oath of Commerce</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='oath_of_forbidden'>Oath of Forbidden Knowledge</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='oath_of_knowledge'>Oath of Knowledge</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='oath_of_sacrifice'>Oath of Sacrifice</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='oath_of_inquisition'>Oath of the Inquisition</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='oath_of_night'>Oath of the Night Paladin</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='oath_of_time'>Oath of Time</option>");
  	  archetype_list.insertAdjacentHTML("beforeend",
          "<option value='oath_of_eternal_flame'>Oath of the Eternal Flame</option>");
  	  break;
    case "ranger":
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='archer'>Archer (Versatile)</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='strider'>Beastmaster: Strider</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='summoned'>Beastmaster: Summoned</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='blade_dancer'>Blade Dancer</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='bloodhunter'>Bloodhunter</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='elruidic'>Eldruidic</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='deep_stalker'>Hunter: Deep Stalker</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='eldritch_hunter'>Hunter: Eldritch Hunter</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='true_stalker'>Hunter: True Hunter</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='land_master'>Land Master</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='occult_hunter'>Occult Hunter</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='primal'>Primal</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='ranger_variant'>Ranger, Variant</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='sharpshooter'>Sharpshooter</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='blade_dancer'>Slayer: Blade Dancer</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='slayer_guardian'>Slayer: Guardian</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='slayer_revenge'>Slayer: Revenge</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='slayer_standard'>Slayer: Standard</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='spell_gunner'>Spell Gunner</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='tempest_rifleman'>Tempest Rifleman</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='warden'>Warden</option>");
      break;
    case "rogue":
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='arcane_assassin'>Arcane Assassin</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='bounty_hunter'>Bounty Hunter</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='joker'>Joker</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='marksman'>Marksman</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='ninja'>Ninja</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='phantom_blade'>Phantom Blade</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='pirate'>Pirate</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='sellsword'>Sellsword</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='wyrmhand'>Wyrmhand</option>");
      break;
    case "sorcerer":
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='arcane_origin'>Arcane Origin</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='destined_bloodline'>Destined Bloodline</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='fey_bloodline'>Fey Bloodline</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='fiend bloodline'>Fiend Bloodline</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='inferno'>Inferno</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='maestro'>Maestro</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='muscle_sorcerer'>Muscle Sorcerer</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='phoenix_blood'>Phoenix Blood</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='shadow_adept'>Shadoe Adept</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='sorcerer_variant'>Sorcerer, Variant</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='spellbreaker'>Spellbreaker</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='temporal_origin'>Temporal Origin</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='true_blood'>True Blood of the Dragon</option>");
      break;
    case "warlock":
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='archmage_patron'>Archmage Patron</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='creature_of_depth'>Creature of the Depth</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='dragon_patron'>Dragon Patron</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='orb_bearer'>Orb Bearer</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='genie'>Otherworldly Patron: Genie</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='servants_of_moon'>Servants of the Moon</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='skull_of_orcus'>Skull of Orcus</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='spirit_sharer'>Spirit Sharer</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='starry_night'>Starry Night</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='sugar_daddy'>Sugar Daddy</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='eidolon'>The Eidolon</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='furies'>The Furies</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='wheel'>The Wheel</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='vessel_of_souls'>Vessel of Souls</option>");
      break;
    case "wizard":
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='arcane_linguist'>Arcane Linguist</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='defiler'>Defiler</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='geomancy'>Geomancy</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='scar_caster'>Scar Caster</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='school_of_mereology'>School of Mereology</option>");
      archetype_list.insertAdjacentHTML("beforeend",
          "<option value='wild_mage'>Wild Mage</option>");
      break;
    default:
      break;
  }
}

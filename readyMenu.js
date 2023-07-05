function showStats(pokemon, text) {
  var statText = document.getElementById("upperText");
  var typeText = " ";
  pokemon.types.forEach(function(type) {
    typeText += ("[" + type + "] ");
  });
  statText.innerHTML = pokemon.name + "  Lv. " + pokemon.lvl + typeText + "<br>HP | " + pokemon.hp + "<br>공격 | " + pokemon.atk + "<br>방어 | " + pokemon.def +
    "<br>특수공격 | " + pokemon.sp_atk + "<br>특수방어 | " + pokemon.sp_def + "<br>스피드 | " + pokemon.spd;
}

function showMoves(pokemon, text) {
  var moveText = document.getElementById("upperText");
  moveText.innerHTML = pokemon.name + "  Lv. " + pokemon.lvl + "<br>스킬 1 | " + pokemon.skl1.name + "<br>스킬 2 | " + pokemon.skl2.name + "<br>스킬 3 | " + pokemon.skl3.name +
    "<br>스킬 4 | " + pokemon.skl4.name;
}

export { showStats, showMoves }
import { showStats, showMoves } from './readyMenu.js'
import { Pokemon } from './battle.js'

var myPokemon = new Pokemon("리자몽", 100, "째려보기", "베어가르기", "화염방사", "회오리불꽃");
//var opPokemon = new Pokemon("이상해꽃");

window.onload = function() {
  showStats(myPokemon);
  var status = 0
  var button = document.getElementById("switchMenuButton");
  button.addEventListener("click", function() {
    if (status == 0) {
      button.textContent = '능력치 메뉴로 이동하기';
      showMoves(myPokemon);
      status = 1;
    }
    else {
      button.textContent = '기술 메뉴로 이동하기';
      showStats(myPokemon);
      status = 0;
    }
  });
};
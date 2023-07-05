import { showStats, showMoves } from './readyMenu.js'
import { Pokemon } from './battle.js'

var myPokemon = new Pokemon("리자몽", 100, "째려보기", "베어가르기", "화염방사", "회오리불꽃");
//var opPokemon = new Pokemon("이상해꽃");

window.onload = function() {
  showStats(myPokemon);
  var status = 0
  var upperText = document.getElementById("upperText");
  var lowerText = document.getElementById("lowerText");
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var startBattleButton = document.createElement('button');
  var changeMenuButton = document.createElement('button');
  changeMenuButton.innerText = '기술 메뉴로 이동하기';
  startBattleButton.innerText = '배틀 시작';
  changeMenuButton.addEventListener("click", function() {
    if (status == 0) {
      changeMenuButton.innerText = '능력치 메뉴로 이동하기';
      showMoves(myPokemon);
      status = 1;
    }
    else {
      changeMenuButton.innerText = '기술 메뉴로 이동하기';
      showStats(myPokemon);
      status = 0;
    }
  });
  startBattleButton.addEventListener('click', function() {
    
  })
  button1.appendChild(changeMenuButton);
  button2.appendChild(startBattleButton);
};
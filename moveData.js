class MoveData {
  constructor(name, type, category, pp, power, accuracy, special = null) {
    this.name = name;
    this.type = type;
    this.category = category;
    this.pp = pp;
    this.power = power;
    this.accuracy = accuracy;
    this.special = special;
  }
}

function findMove(name) {
  return Object.values(moveData).find(a => a.name === name)
}

var moveData = {
  1: new MoveData("째려보기", "노말", "변화", 30, -1, 100),
  2: new MoveData("베어가르기", "노말", "물리", 20, 70, 100),
  3: new MoveData("화염방사", "불꽃", "특수", 15, 90, 100),
  4: new MoveData("회오리불꽃", "불꽃", "특수", 15, 35, 85, "bind")
}

export { findMove }
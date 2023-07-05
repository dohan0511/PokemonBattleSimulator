import { dexData } from "./dexData.js"
import { findMove } from './moveData.js'

class Pokemon {
  constructor(name, lvl, skl1, skl2, skl3, skl4) {
    this.name = name;
    this.initData = Object.values(dexData).find(a => a.name === this.name)
    this.lvl = lvl;
    this.ev = 65535;
    this.hp = Math.floor(((this.initData.base_hp + 12) * 2 + Math.floor(Math.ceil(Math.sqrt(this.ev)) / 4)) * this.lvl / 100) + this.lvl + 10;
    this.atk = Math.floor(((this.initData.base_atk + 12) * 2 + Math.floor(Math.ceil(Math.sqrt(this.ev)) / 4)) * this.lvl / 100) + 5;
    this.def = Math.floor(((this.initData.base_def + 12) * 2 + Math.floor(Math.ceil(Math.sqrt(this.ev)) / 4)) * this.lvl / 100) + 5;
    this.sp_atk = Math.floor(((this.initData.base_sp_atk + 12) * 2 + Math.floor(Math.ceil(Math.sqrt(this.ev)) / 4)) * this.lvl / 100) + 5;
    this.sp_def = Math.floor(((this.initData.base_sp_def + 12) * 2 + Math.floor(Math.ceil(Math.sqrt(this.ev)) / 4)) * this.lvl / 100) + 5;
    this.spd = Math.floor(((this.initData.base_spd + 12) * 2 + Math.floor(Math.ceil(Math.sqrt(this.ev)) / 4)) * this.lvl / 100) + 5;
    this.types = this.initData.types;
    this.skl1 = findMove(skl1);
    this.skl2 = findMove(skl2);
    this.skl3 = findMove(skl3);
    this.skl4 = findMove(skl4);
  }
}

export { Pokemon }
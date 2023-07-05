class PokemonData {
  constructor(dexNo, name, base_hp, base_atk, base_def, base_sp_atk, base_sp_def, base_spd, types) {
    this.dexNo = dexNo;
    this.name = name;
    this.base_hp = base_hp;
    this.base_atk = base_atk;
    this.base_def = base_def;
    this.base_sp_atk = base_sp_atk;
    this.base_sp_def = base_sp_def;
    this.base_spd = base_spd;
    this.types = types;
  }
}

var dexData = {
  1: new PokemonData(1, "이상해꽃", 80, 82, 83, 100, 100, 80, ["풀", "독"]),
  2: new PokemonData(2, "리자몽", 78, 84, 78, 109, 85, 100, ["화염", "비행"])
}

export { dexData };
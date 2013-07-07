exports.BattleScripts = {
onModifyMove: function(move) {
    move.willCrit = true;
  }
//Doubling defenses so the land of pokemon won't experience an apocalypse like last year
onModifyDef: function(def, pokemon) {
    return def *2;
}
onModifySpd: function(spd, pokemon) {
    return spd *2;
 }
};

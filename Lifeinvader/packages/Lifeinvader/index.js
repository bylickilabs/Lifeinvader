let lifeinvader = mp.colshapes.newCircle(-1082.3106689453125,-247.7251739501953,1);
mp.markers.new(1, new mp.Vector3(-1082.3106689453125,-247.7251739501953,37.7633056640625), 1, { color: [252, 111, 3, 255] });
let LifeinvaderBlip = mp.blips.new(77, new mp.Vector3(-1082.3106689453125,-247.7251739501953,37.7633056640625, 1),
    {
      name: 'Lifeinvader',
      color: 1,
      shortRange: true,
});




function playerEnterColshapeHandler(player, shape) {  
    if(shape == lifeinvader) {
      player.call("LifeinvaderBrowser");
    }
  
}
mp.events.add('playerEnterColshape', playerEnterColshapeHandler);



console.log("\x1b[96m[LIFEINVADER] \x1b[97mWorking \x1b[39m");
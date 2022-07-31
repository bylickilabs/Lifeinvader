var LIFEINVADER = null;

mp.events.add('LifeinvaderBrowser', (player) => {
    if(!LIFEINVADER){
        LIFEINVADER =  mp.browsers.new('package://Lifeinvader/ui.html')
        mp.gui.cursor.show(true,true)
        mp.game.ui.setPauseMenuActive(true);
        mp.gui.chat.activate(false);
    }
})

mp.events.add('closeLifeinvader', player => {
    LIFEINVADER.destroy();
    LIFEINVADER = null;
    mp.gui.cursor.show(false,false);
    mp.game.ui.setPauseMenuActive(false);
    mp.gui.chat.activate(true);
})

mp.events.add('startlifeinvader', player =>{
    mp.gui.chat.push('[LIFEINVADER] Werbung geschaltet!')
    LIFEINVADER.destroy();
    LIFEINVADER = null;
    mp.gui.cursor.show(false,false);
    mp.game.ui.setPauseMenuActive(false);
    mp.gui.chat.activate(true);
    
});

// LIFEINVADER.execute(`discord("${webhook}");`)


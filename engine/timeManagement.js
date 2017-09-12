class TimeManagement{
    constructor(startYear = -2000){
        this.__worldYear = startYear;
        this._worldYearText;
    }

    get getWordYear(){
        return this.wordYear;
    }

    startWorldTime(){
        var style = { font: "24px Arial", fill: "#ffffff", align: "center" };
        game.time.events.loop(Phaser.Timer.SECOND * 15, this.addTimeToWorldClock, game);
        this._worldYearText = game.add.text(game.world.centerX, 25, `${this._worldYear} BC`, style);
    }

    addTimeToWorldClock(){
        this._worldYear++;
        this._worldYearText.text = `${this._worldYear} BC`;
        this.broadcastYearChange();
    }

    broadcastYearChange(){
        //include all the required classes that need to be informed of the chnage
    }
}
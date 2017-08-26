class Engine {
    constructor(){
    }
    
    placeVillageHall(){
        var villageHallTilesetIndex = 5209,
            villageHallXPos = 10 * 32,
            villageHallYPos = 10 * 32;

        var villageHall = game.add.sprite(villageHallXPos, villageHallYPos, "villageHall");
        villageHall.inputEnabled = true;
        villageHall.events.onInputDown.add(this.showBuildingMenu, this);
        
    }

    showBuildingMenu(){
        (buildingMenu.visible) ? buildingMenu.visible = false : buildingMenu.visible = true;
    }
    
}
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

    createBuildingMenu(){

        buildingMenu = game.add.sprite((game.camera.width / 2) - 250, (game.camera.height / 2) - 150, 'buildingMenu');
        buildingMenu.visible = false;

        for (var i = 0; i < buildings.length; i++) {
            var buildingName = buildings[i].name;
            buildingMenu.addChild(game.make.button((50 * i) + 50, 50, buildingName, this.selectBuilding), game);
            
        }
    }
    
    selectBuilding(sprite, pointer){
        selectedBuilding = sprite.key;
        buildingMenu.visible = false;
    }
    
}
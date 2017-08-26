class Engine {
    constructor(){
        this._buildingsObj = {};
    }
    
    placeVillageHall(){
        var villageHallTilesetIndex = 5209,
            villageHallXPos = 10,
            villageHallYPos = 10;
        map.putTile(villageHallTilesetIndex, villageHallXPos, villageHallYPos, layer);

        this._buildingsObj[villageHallXPos + "-" + villageHallYPos] = { name: "Village Hall", callback: "showResources"};
    }
    
    buildingsObj(){
        return this._buildingsObj;
    }

    handleClick(mousePosX, mousePosY){

        var tileName = (game.math.snapToFloor(mousePosX, 32)/ 32) + "-" + (game.math.snapToFloor(mousePosY, 32) / 32);
        if(this.isBuildingTile(tileName) === true){
            console.log("is a building", tileName);
            //buildingCallback
        }else{
            console.log("is not a building", tileName);
            //emptyTileCallback
        }
    }

    isBuildingTile(tileName){
        if(this._buildingsObj.hasOwnProperty(tileName)){
            return true;
        }

        return false;
    }
    
}
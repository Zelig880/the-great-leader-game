
BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

    create: function () {

        //All Map loading
        map = this.add.tilemap('map');
        map.addTilesetImage("Tileset1"); 
        map.addTilesetImage("BuildingsTileset"); 
        layer = map.createLayer('basic tiles');
        layer = map.createLayer('landscape');
        layer.resizeWorld();


        this.input.addMoveCallback(this.updateMarker, this);
        cursorBorder = this.add.graphics();
        cursorBorder.lineStyle(2, 0x000000, 1);
        cursorBorder.drawRect(0, 0, 32, 32);

        
		buildingButton = this.add.button(this.world.right - 32, this.world.bottom - 32, 'buildingButton', engine.showBuildingMenu, this);

        buildingMenu = this.add.sprite((this.camera.width / 2) - 250, (this.camera.height / 2) - 150, 'buildingMenu');
        buildingMenu.visible = false;
        buildingMenu.addChild(this.make.button(50, 50, "A", this.selectBuilding, this));
        buildingMenu.addChild(this.make.button(100, 50, "B", this.selectBuilding, this));
        buildingMenu.addChild(this.make.button(150, 50, "C", this.selectBuilding, this));
        buildingMenu.addChild(this.make.button(200, 50, "D", this.selectBuilding, this));

        // buildingMenu  = this.add.sprite(1, 1, 'BuildingsTileset');
        // buildingMenu.inputEnabled = true;
        // buildingMenu.events.onInputDown.add(this.selectBuilding, this);
        // buildingMenu.visible = false;

        engine.placeVillageHall();
    },

    update: function () {

    },
    
    selectBuilding: function(sprite, pointer){
        selectedBuilding = sprite.key;
        buildingMenu.visible = false;
    },

    updateMarker: function() {
        cursorBorder.x = layer.getTileX(this.input.activePointer.worldX) * 32;
        cursorBorder.y = layer.getTileY(this.input.activePointer.worldY) * 32;

        //sc88: Need a better way to about painting on bottom menu
        let lastRow = Math.floor(this.camera.height  - 50);

        if (this.input.mousePointer.isDown && buildingMenu.visible === false && cursorBorder.y < lastRow)
        {
            this.add.sprite(cursorBorder.x, cursorBorder.y, selectedBuilding);
            //map.putTile(selectedBuilding, layer.getTileX(cursorBorder.x), layer.getTileY(cursorBorder.y), layer);
        }

    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};

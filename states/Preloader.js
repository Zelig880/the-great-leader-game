
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//preloader details
		this.background = this.add.sprite(0, 0, 'preloaderBackground');

		//Images
		this.load.image('logo', 'images/logo.png');
		this.load.image('playButton', 'images/playButton.png');
			//Buildings
			this.load.image("villageHall", "images/buildings/VillageHall.png");

		//Maps & tileset
		this.load.tilemap('map', 'maps/map50x50.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.image('Tileset1', 'maps/tileset1-32x32.png');
		this.load.image('BuildingsTileset', 'images/buildings/buildingTileset.png');
	},

	create: function () {
	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		//this.state.start('MainMenu');
		this.state.start('Game');

	}

};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	
	game.load.image('background', 'img/background.png');

}

function create() {
		
	var image = game.add.sprite(0, 0, 'background');
	image.inputEnabled = true;		
	image.events.onclick = window.open("https://www.phoenixteablendinghouse.com","_self")
}

function update() {

	

}
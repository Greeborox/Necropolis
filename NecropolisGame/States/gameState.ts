module Necropolis {
    export class gameState extends Phaser.State {
        bg: Phaser.Sprite;
        player: Phaser.Sprite;
        map: Phaser.Tilemap;
        walls: Phaser.TilemapLayer;

        create() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.bg = this.game.add.sprite(0, 0, 'gameSheet', 'bg_main.png');

            this.map = this.game.add.tilemap('tileMap')
            this.map.addTilesetImage('tiles');
            this.walls = this.map.createLayer('layer1');
            this.map.setCollision(1);
            this.walls.resizeWorld();

            this.player = new Player(this.game, 40, 40);
            this.game.physics.enable(this.player);
            this.game.add.existing(this.player);
        }

        update() {
            this.game.physics.arcade.collide(this.player, this.walls);
        }
    }
};
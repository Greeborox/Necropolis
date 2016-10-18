module Necropolis {
    export class gameState extends Phaser.State {
        bg: Phaser.Sprite;
        player: Phaser.Sprite;
        monster: Phaser.Sprite;
        map: Phaser.Tilemap;
        walls: Phaser.TilemapLayer;
        timeController: Necropolis.TimeController;
        SPACE: Phaser.Key;
        helper: Necropolis.Helper;
        bullets: Necropolis.Bullets;

        create() {
            this.SPACE = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.SPACE.onDown.add(this.changeTime, this)

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.timeController = new TimeController();
            this.helper = new Helper();
            this.bg = this.game.add.sprite(0, 0, 'gameSheet', 'bg_main.png');

            this.map = this.game.add.tilemap('tileMap')
            this.map.addTilesetImage('tiles');
            this.walls = this.map.createLayer('layer1');
            this.map.setCollision(1);
            this.walls.resizeWorld();

            this.player = new Player(this.game, 40, 40);
            this.game.add.existing(this.player);

            this.bullets = new Bullets(this.game, this.timeController);

            this.monster = new Monster(this.game, 240, 240, this.timeController, this.bullets);
            this.game.add.existing(this.monster);
        }

        update() {
            this.game.physics.arcade.collide(this.player, this.walls);
            this.game.physics.arcade.collide(this.monster, this.walls, this.helper.handleWallCollision, null, this);
        }

        changeTime() {
            if (!this.timeController.timeSlowed) {
                this.timeController.slowTime();
                console.log("slowing time");
            } else {
                this.timeController.speedUpTime();
                console.log("speeding up time");
            }
        }
    }
};
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
        trap1: Necropolis.SpikeTrap;
        trap2: Necropolis.SpikeTrap;
        trap3: Necropolis.SpikeTrap;
        trap4: Necropolis.SpikeTrap;
        trap5: Necropolis.SpikeTrap;

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

            this.trap1 = new SpikeTrap(this.game, 512, 288, this.timeController, 500);
            this.game.add.existing(this.trap1);

            this.trap2 = new SpikeTrap(this.game, 512, 320, this.timeController, 500);
            this.game.add.existing(this.trap2);

            this.trap3 = new SpikeTrap(this.game, 512, 352, this.timeController, 500);
            this.game.add.existing(this.trap3);

            this.trap4 = new SpikeTrap(this.game, 512, 382, this.timeController, 500);
            this.game.add.existing(this.trap4);

            this.trap5 = new SpikeTrap(this.game, 512, 414, this.timeController, 500);
            this.game.add.existing(this.trap5);

            this.player = new Player(this.game, 40, 40);
            this.game.add.existing(this.player);

            this.bullets = new Bullets(this.game, this.timeController);

            this.monster = new Monster(this.game, 240, 330, this.timeController, this.bullets);
            this.game.add.existing(this.monster);

            
        }

        update() {
            this.game.physics.arcade.collide(this.player, this.walls);
            this.game.physics.arcade.collide(this.monster, this.walls, this.helper.handleWallCollision, null, this);
            this.game.physics.arcade.collide(this.bullets, this.walls, this.helper.handleBulletWallCollision, null, this);
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
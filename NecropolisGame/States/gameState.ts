module Necropolis {
    export class gameState extends Phaser.State {
        bg: Phaser.Sprite;
        meleeAttacks: Necropolis.MeleeAttack;
        player: Necropolis.Player;
        monster: Necropolis.Monster;
        map: Phaser.Tilemap;
        walls: Phaser.TilemapLayer;
        timeController: Necropolis.TimeController;
        mainTimer: Necropolis.MainTimer;
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
            this.mainTimer = new MainTimer(this.game);
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

            this.meleeAttacks = new MeleeAttack(this.game);
            this.player = new Player(this.game, 40, 40, this.meleeAttacks);
            this.game.add.existing(this.player);

            this.bullets = new Bullets(this.game, this.timeController);
            this.monster = new Monster(this.game, 240, 330, this.timeController, this.bullets);
            this.game.add.existing(this.monster);

            
        }

        update() {
            this.game.physics.arcade.collide(this.player, this.walls);
            this.game.physics.arcade.collide(this.monster, this.walls, this.helper.handleWallCollision, null, this);
            this.game.physics.arcade.collide(this.monster, this.player.attacks, this.helper.killMonster, null, this);
            this.game.physics.arcade.collide(this.bullets, this.walls, this.helper.handleBulletWallCollision, null, this);
            this.game.physics.arcade.collide(this.player, this.monster, this.helper.killPlayer, null, this);
            this.game.physics.arcade.collide(this.player, this.bullets, this.helper.killPlayer, null, this);
            if (this.trap1.isActive) {
                this.game.physics.arcade.collide(this.player, this.trap1, this.helper.killPlayer, null, this);
            }
            if (this.trap2.isActive) {
                this.game.physics.arcade.collide(this.player, this.trap2, this.helper.killPlayer, null, this);
            }
            if (this.trap3.isActive) {
                this.game.physics.arcade.collide(this.player, this.trap3, this.helper.killPlayer, null, this);
            }
            if (this.trap4.isActive) {
                this.game.physics.arcade.collide(this.player, this.trap4, this.helper.killPlayer, null, this);
            }
            if (this.trap5.isActive) {
                this.game.physics.arcade.collide(this.player, this.trap5, this.helper.killPlayer, null, this);
            }
            
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
module Necropolis {
    export class Player extends Phaser.Sprite {
        RIGHT: Phaser.Key;
        LEFT: Phaser.Key;
        UP: Phaser.Key;
        DOWN: Phaser.Key;
        Z: Phaser.Key;
        direction: string;
        attacks: Necropolis.MeleeAttack;
        startingX: number;
        startingY: number;

        constructor(game: Phaser.Game, x: number, y: number, melleAttacks: Necropolis.MeleeAttack) {
            super(game, x, y, 'gameSheet', 'spr_Player_0.png')
            this.game.physics.enable(this);

            this.attacks = melleAttacks;
            this.direction = 'down';
            this.startingX = x;
            this.startingY = y;

            this.Z = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
            this.Z.onDown.add(function () {
                this.attacks.attack(this.x, this.y, this.direction)
            }, this);

            this.RIGHT = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.RIGHT.onDown.add(this.movePlayer, this, 0, 'right');
            this.RIGHT.onUp.add(function () {
                this.body.velocity.x = 0;
            }, this);

            this.LEFT = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.LEFT.onDown.add(this.movePlayer, this, 0, 'left');
            this.LEFT.onUp.add(function () {
                this.body.velocity.x = 0;
            }, this);

            this.UP = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.UP.onDown.add(this.movePlayer, this, 0, 'up');
            this.UP.onUp.add(function () {
                this.body.velocity.y = 0;
            }, this);

            this.DOWN = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.DOWN.onDown.add(this.movePlayer, this, 0, 'down');
            this.DOWN.onUp.add(function () {
                this.body.velocity.y = 0;
            }, this);
        }

        movePlayer() {
            switch (arguments[1]) {
                case 'right':
                    this.body.velocity.y = 0;
                    this.body.velocity.x = 75;
                    this.direction = 'right';
                    this.loadTexture('gameSheet', 'spr_Player_2.png')
                    break;
                case 'left':
                    this.body.velocity.y = 0;
                    this.body.velocity.x = -75;
                    this.direction = 'left';
                    this.loadTexture('gameSheet', 'spr_Player_3.png')
                    break;
                case 'up':
                    this.body.velocity.x = 0;
                    this.body.velocity.y = -75;
                    this.direction = 'up';
                    this.loadTexture('gameSheet', 'spr_Player_1.png')
                    break;
                case 'down':
                    this.body.velocity.x = 0;
                    this.body.velocity.y = 75;
                    this.direction = 'down';
                    this.loadTexture('gameSheet', 'spr_Player_0.png')
                    break;
            }
        };

        update() {

        }
    }

}
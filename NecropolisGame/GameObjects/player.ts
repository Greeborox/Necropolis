module Necropolis {
    export class Player extends Phaser.Sprite {
        RIGHT: Phaser.Key;
        LEFT: Phaser.Key;
        UP: Phaser.Key;
        DOWN: Phaser.Key;
        direction: string;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'gameSheet', 'spr_Player_0.png')

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
                    this.loadTexture('gameSheet', 'spr_Player_2.png')
                    break;
                case 'left':
                    this.body.velocity.y = 0;
                    this.body.velocity.x = -75;
                    this.loadTexture('gameSheet', 'spr_Player_3.png')
                    break;
                case 'up':
                    this.body.velocity.x = 0;
                    this.body.velocity.y = -75;
                    this.loadTexture('gameSheet', 'spr_Player_1.png')
                    break;
                case 'down':
                    this.body.velocity.x = 0;
                    this.body.velocity.y = 75;
                    this.loadTexture('gameSheet', 'spr_Player_0.png')
                    break;
            }
        };

        update() {

        }
    }


}
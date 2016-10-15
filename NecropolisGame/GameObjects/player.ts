module Necorpolis {
    export class Player extends Phaser.Sprite {
        RIGHT: Phaser.Key;
        LEFT: Phaser.Key;
        UP: Phaser.Key;
        DOWN: Phaser.Key;
        direction: string;
        vector: { x: number, y: number};

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'gameSheet', 'spr_Player_0.png')

            this.vector = { x: 0, y: 0 };

            this.RIGHT = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.RIGHT.onDown.add(this.movePlayer, this, 0, 'right');
            this.RIGHT.onUp.add(function () {
                this.vector.x = 0;
            }, this);

            this.LEFT = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.LEFT.onDown.add(this.movePlayer, this, 0, 'left');
            this.LEFT.onUp.add(function () {
                this.vector.x = 0;
            }, this);

            this.UP = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.UP.onDown.add(this.movePlayer, this, 0, 'up');
            this.UP.onUp.add(function () {
                this.vector.y = 0;
            }, this);

            this.DOWN = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.DOWN.onDown.add(this.movePlayer, this, 0, 'down');
            this.DOWN.onUp.add(function () {
                this.vector.y = 0;
            }, this);
        }

        movePlayer() {
            switch (arguments[1]) {
                case 'right':
                    this.vector.y = 0;
                    this.vector.x = 2.5;
                    this.loadTexture('gameSheet', 'spr_Player_2.png')
                    break;
                case 'left':
                    this.vector.y = 0;
                    this.vector.x = -2.5;
                    this.loadTexture('gameSheet', 'spr_Player_3.png')
                    break;
                case 'up':
                    this.vector.x = 0;
                    this.vector.y = -2.5;
                    this.loadTexture('gameSheet', 'spr_Player_1.png')
                    break;
                case 'down':
                    this.vector.x = 0;
                    this.vector.y = 2.5;
                    this.loadTexture('gameSheet', 'spr_Player_0.png')
                    break;
            }
        };

        update() {
            this.x += this.vector.x;
            this.y += this.vector.y;
        }
    }


}
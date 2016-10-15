module Necorpolis {
    export class gameState extends Phaser.State {
        bg: Phaser.Sprite;
        player: Phaser.Sprite;

        create() {
            this.bg = this.game.add.sprite(0, 0, 'gameSheet', 'bg_main.png');
            this.player = new Player(this.game, 10, 10);
            this.game.add.existing(this.player);
        }
    }
};
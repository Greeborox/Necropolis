module Necorpolis {
    export class welcomeState extends Phaser.State {
        bg: Phaser.Sprite;

        create() {
            this.bg = this.game.add.sprite(0, 0, 'gameSheet', 'bg_main.png');
        }
    }
};
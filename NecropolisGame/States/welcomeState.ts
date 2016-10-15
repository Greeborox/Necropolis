module Necorpolis {
    export class welcomeState extends Phaser.State {
        bg: Phaser.Sprite;
        welcomeText: Phaser.Text;
        SPACE: Phaser.Key;

        create() {
            this.bg = this.game.add.sprite(0, 0, 'gameSheet', 'bg_main.png');
            this.welcomeText = this.game.add.text(370, 200, 'welcome to Necropolis', { 'color': 'black' });
            this.SPACE = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.SPACE.onDown.add(this.startGame, this)
        }

        startGame() {
            this.game.state.start('gameState');
        }
    }
};
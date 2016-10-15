module Necorpolis {
    export class NecropolisGame {
        game: Phaser.Game;
        constructor() {
            this.game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game', { create: this.create, preload: this.preload})
        }
        preload() {
            this.game.load.atlasJSONHash('gameSheet', '/Assets/necropolis.png', '/Assets/necropolis.json')
        }
        create() {
            this.game.state.add('welcomeState', Necorpolis.welcomeState, true);
        }
        
    }
}

window.onload = () => {
    var game = new Necorpolis.NecropolisGame();
};
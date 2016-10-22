module Necropolis {
    export class NecropolisGame {
        game: Phaser.Game;
        constructor() {
            this.game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game', { create: this.create, preload: this.preload})
        }
        preload() {
            this.game.load.atlasJSONHash('gameSheet', 'Assets/necropolisSheet.png', 'Assets/necropolisSheet.json');
            this.game.load.image("tiles", "Assets/spr_wall_0.png");
            this.game.load.tilemap("tileMap", "Assets/tiles.json", null, Phaser.Tilemap.TILED_JSON);
        }
        create() {
            this.game.state.add('welcomeState', Necropolis.welcomeState, true);
            this.game.state.add('gameState', Necropolis.gameState);
        }
        
    }
}

window.onload = () => {
    var game = new Necropolis.NecropolisGame();
};
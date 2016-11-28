module Necropolis {
    export class MainTimer {

        public timeModifier: number;
        public timeSlowed: boolean;
        public game: Phaser.Game;
        public progressBar: Phaser.Rectangle

        constructor(game: Phaser.Game) {
            this.game = game;
            this.progressBar = new Phaser.Rectangle(10, 10, 800, 30);
            //this.game.add.existing(this.progressBar);
        }
   
    }

}
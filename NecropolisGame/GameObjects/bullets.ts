module Necropolis {
    export class Bullets extends Phaser.Group {
        timeCtrl: TimeController;
        speed: number;

        constructor(game: Phaser.Game,timeCtrl:TimeController) {
            super(game);
            this.createMultiple(15, 'spr_bullet_0.png');
            this.timeCtrl = timeCtrl;
        }

        spawn(x:number, y:number, direction:boolean) {
            console.log("bam!")
        }

    }
}
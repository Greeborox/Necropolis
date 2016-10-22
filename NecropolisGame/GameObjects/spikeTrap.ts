module Necropolis {
    export class SpikeTrap extends Phaser.Sprite {

        timeCtlr: TimeController;
        triggerTime: number;
        isActive: boolean;

        constructor(game: Phaser.Game, x: number, y: number, timeCtlr: TimeController, triggerTime:number) {
            super(game, x, y, 'gameSheet', 'spr_slash_up.png');
            this.frame = 0;
            this.triggerTime = triggerTime;
            this.isActive = false;
            this.game.physics.enable(this);
            this.timeCtlr = timeCtlr;
            this.game.time.events.add(this.triggerTime, this.activate, this);
        }

        update() {

        }

        activate() {
            console.log("bamFromTrap")
        }

    }

}
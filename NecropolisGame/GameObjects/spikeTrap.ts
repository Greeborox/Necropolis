module Necropolis {
    export class SpikeTrap extends Phaser.Sprite {

        timeCtlr: TimeController;
        triggerTime: number;
        isActive: boolean;

        constructor(game: Phaser.Game, x: number, y: number, timeCtlr: TimeController, triggerTime:number) {
            super(game, x, y, 'gameSheet', 'spr_trap_inactive.png');
            this.triggerTime = triggerTime;
            this.isActive = false;
            this.game.physics.enable(this);
            this.timeCtlr = timeCtlr;
            this.game.time.events.add(this.triggerTime, this.activate, this);
        }

        update() {

        }

        activate() {
            if (!this.isActive) {
                this.loadTexture('gameSheet', 'spr_trap_active.png')
                this.isActive = true;
            } else {
                this.loadTexture('gameSheet', 'spr_trap_inactive.png')
                this.isActive = false;
            }
            if (this.timeCtlr.timeSlowed) {
                this.game.time.events.add(this.triggerTime * 5, this.activate, this);
            } else {
                this.game.time.events.add(this.triggerTime, this.activate, this);
            }
            
        }

    }

}
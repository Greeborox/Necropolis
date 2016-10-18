module Necropolis {
    export class Monster extends Phaser.Sprite {

        speed: number;
        timeCtlr: TimeController;
        bullets: Necropolis.Bullets;

        constructor(game: Phaser.Game, x: number, y: number, timeCtlr: TimeController, bullets: Necropolis.Bullets) {
            super(game, x, y, 'gameSheet', 'spr_demon_0.png');
            this.speed = 15;
            this.game.physics.enable(this);
            this.body.velocity.x = this.speed * this.game.rnd.sign();
            this.timeCtlr = timeCtlr;
            this.bullets = bullets;
            this.game.time.events.add(2000,this.shoot,this);
        }

        update() {
            this.body.velocity.x = this.speed * this.timeCtlr.timeModifier;
            if (this.body.velocity.x > 0) {
                this.loadTexture('gameSheet', 'spr_demon_2.png')
            } else {
                this.loadTexture('gameSheet', 'spr_demon_3.png')
            }
        }

        turnAround() {
            console.log("test");
            if (this.body.velocity.x > 0) {
                this.speed *= -1;
                this.loadTexture('gameSheet', 'spr_demon_2.png')
            } else {
                this.speed *= -1;
                this.loadTexture('gameSheet', 'spr_demon_3.png')
            }
        }

        shoot() {
            //if (!this.game.rnd.integerInRange(0, 5)) {
                this.bullets.spawn(this.x, this.y, this.body.velocity.x > 0);
            //}
            this.game.time.events.add(2000, this.shoot, this);
        }
    }

}
module Necropolis {
    export class Bullets extends Phaser.Group {
        timeCtrl: TimeController;
        bulletSpeed: number;

        constructor(game: Phaser.Game, timeCtrl: TimeController) {
            super(game);
            this.createMultiple(15, 'gameSheet', 'spr_bullet_0.png');
            this.timeCtrl = timeCtrl;
            this.bulletSpeed = 35;
        }

        spawn(x:number, y:number, direction:boolean) {
            var bullet = this.getFirstDead();
            if (!bullet) {
                return;
            }
            this.game.physics.arcade.enable(bullet)
            bullet.anchor.setTo(0.5);
            bullet.reset(x, y);
            if (direction) {
                bullet.y += 15;
                bullet.x += 15;
                bullet.body.velocity.x = this.bulletSpeed * this.timeCtrl.timeModifier;
            } else {
                bullet.y += 15;
                bullet.body.velocity.x = -this.bulletSpeed * this.timeCtrl.timeModifier;
            }
            bullet.checkWorldBounds = true;
            bullet.outOfBoundsKill = true;
        }

        update() {
            this.forEachAlive(function (bullet) {
                if (bullet.body.velocity.x > 0) {
                    bullet.body.velocity.x = this.bulletSpeed * this.timeCtrl.timeModifier;
                } else {
                    bullet.body.velocity.x = -this.bulletSpeed * this.timeCtrl.timeModifier;
                }    
            }, this)
            
        }
    }
}
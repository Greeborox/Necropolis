module Necropolis {
    export class MeleeAttack extends Phaser.Group {

        lifeSpan: number;
        direction: string;
        textureName: string;

        constructor(game: Phaser.Game) {
            super(game);
            this.createMultiple(4, 'gameSheet', 'spr_slash_down.png');
            this.lifeSpan = 3;
            this.textureName = 'spr_slash_';
        }

        update() {
            this.forEachAlive(function (attack) {
                if (attack.activeFor < this.lifeSpan) {
                    attack.activeFor++;
                } else {
                    attack.kill();
                }
            }, this)
        }

        attack(x: number, y: number, direction: string) {
            var attack = this.getFirstDead();
            var texture: string = this.textureName + direction + '.png';
            if (!attack) {
                return;
            }
            attack.anchor.setTo(0.5);
            attack.activeFor = 0;
            switch (direction) {
                case 'right':
                    attack.reset(x+50, y+20);
                    attack.frameName = texture;
                    break;
                case 'left':
                    attack.reset(x-25, y+20);
                    attack.frameName = texture;
                    break;
                case 'up':
                    attack.reset(x+15, y-15);
                    attack.frameName = texture;
                    break;
                case 'down':
                    attack.reset(x+15, y+70);
                    attack.frameName = texture;
                    break;
            }
            this.game.physics.arcade.enable(attack)
        }

    }

}
module Necropolis {
    export class Helper {
        constructor() {}
        handleWallCollision(monster:Monster) {
            monster.turnAround();
        }
        handleBulletWallCollision(bullet) {
            bullet.kill();
        }
        killPlayer() {
            arguments[0].reset(arguments[0].startingX, arguments[0].startingY)
            console.log(arguments);
        }
        killMonster() {
            arguments[0].kill();
            console.log('test')
        }
    }

}
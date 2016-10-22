module Necropolis {
    export class Helper {
        constructor() {}
        handleWallCollision(monster:Monster) {
            monster.turnAround();
        }
        handleBulletWallCollision(bullet) {
            bullet.kill();
        }
    }

}
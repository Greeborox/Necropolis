var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Necorpolis;
(function (Necorpolis) {
    var welcomeState = (function (_super) {
        __extends(welcomeState, _super);
        function welcomeState() {
            _super.apply(this, arguments);
        }
        welcomeState.prototype.create = function () {
            this.bg = this.game.add.sprite(0, 0, 'gameSheet', 'bg_main.png');
        };
        return welcomeState;
    }(Phaser.State));
    Necorpolis.welcomeState = welcomeState;
})(Necorpolis || (Necorpolis = {}));
;
//# sourceMappingURL=welcomeState.js.map
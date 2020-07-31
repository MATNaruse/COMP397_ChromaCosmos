var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            _this.isDead = false;
            _this.Health = 5;
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = managers.Game.canvasW / 2;
            this.y = 600;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // I need a reference to the "STAGE" createjs object to get mouse position
            this.x = managers.Game.stage.mouseX;
            // This will eventually be replaced with keyboard input
            // Maybe xbox controller....maybe...
        };
        Player.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= managers.Game.canvasW - this.halfW) {
                // I have collided with the right boundary
                this.x = managers.Game.canvasW - this.halfW;
            }
            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
        };
        Player.prototype.TakeDamage = function (dmg) {
            if (dmg === void 0) { dmg = 1; }
            createjs.Sound.play("playerHit1").setVolume(3);
            if (this.Health > 1) {
                this.Health -= dmg;
                console.log("PLAYER HIT - " + this.Health);
            }
            else {
                this.isDead = true;
                managers.Game.PlayerLose = true;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
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
    var SecondaryAlien = /** @class */ (function (_super) {
        __extends(SecondaryAlien, _super);
        // Constructor
        function SecondaryAlien(colourIdx, startX, startY) {
            if (startX === void 0) { startX = 0; }
            if (startY === void 0) { startY = 0; }
            var _this = _super.call(this, colourIdx, startX, startY) || this;
            _this.ScoreValue = 200;
            _this.LeftAlien = null;
            _this.RightAlien = null;
            _this.CollisionActive = false;
            // TODO: Play around with playable speeds
            switch (colourIdx) {
                case (3):
                    // Green
                    _this.ySpeed = 6;
                    break;
                case (4):
                    // Purple
                    _this.ySpeed = 8;
                    break;
                case (5):
                    // Orange
                    _this.ySpeed = 10;
                    break;
            }
            return _this;
        }
        // Methods
        SecondaryAlien.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (!this.CollisionActive && this.y - this.height > 0)
                this.CollisionActive = true;
            this.LeftAlien = null;
            this.RightAlien = null;
        };
        SecondaryAlien.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
            this.CollisionActive = false;
            this.LeftAlien = null;
            this.RightAlien = null;
        };
        SecondaryAlien.prototype.Move = function () {
            this.y += this.ySpeed;
            var Player = managers.Game.PlayerEntity;
            // Moving Right towards Player
            if (Player.x >= this.x) {
                if (this.IsChained() && this.RightAlien != null) {
                    this.x = this.RightAlien.GetLeftEdge() - this.halfW;
                }
                else {
                    this.x += this.increment;
                }
            }
            // Moving Left towards Player
            else if (Player.x <= this.x) {
                if (this.IsChained() && this.LeftAlien != null) {
                    this.x = this.LeftAlien.GetRightEdge() + this.halfW;
                }
                else {
                    this.x -= this.increment;
                }
            }
        };
        SecondaryAlien.prototype.IsChained = function () { return (this.LeftAlien != null || this.RightAlien != null); };
        SecondaryAlien.prototype.AlienLinkCheck = function (alien) {
            return alien != this.LeftAlien && alien != this.RightAlien;
        };
        return SecondaryAlien;
    }(objects.Alien));
    objects.SecondaryAlien = SecondaryAlien;
})(objects || (objects = {}));
//# sourceMappingURL=alienSecondary.js.map
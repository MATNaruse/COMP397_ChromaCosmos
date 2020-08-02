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
        // Variables
        // Constructor
        function SecondaryAlien(assetManager, colourIdx) {
            var _this = _super.call(this, assetManager, colourIdx) || this;
            _this.ScoreValue = 200;
            return _this;
        }
        // Methods
        SecondaryAlien.prototype.Move = function () {
            this.y += 6;
            var Player = managers.Game.PlayerEntity;
            var Increment = 5;
            if (Player.x > this.x)
                this.x += Increment;
            else if (Player.x < this.x)
                this.x -= Increment;
        };
        return SecondaryAlien;
    }(objects.Alien));
    objects.SecondaryAlien = SecondaryAlien;
})(objects || (objects = {}));
//# sourceMappingURL=alienSecondary.js.map
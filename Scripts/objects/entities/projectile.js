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
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(assetManager, colour, shooter) {
            var _this = _super.call(this, assetManager, "bullet" + objects.ColourPalette[colour]) || this;
            _this.colour = objects.ColourPalette[colour];
            _this.shooter = shooter;
            _this.x = shooter.x;
            _this.y = shooter.y - shooter.halfH;
            _this.scaleX = 0.25;
            _this.scaleY = 0.25;
            _this.isOffScreen = false;
            _this.Start();
            return _this;
        }
        Projectile.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Projectile.prototype.Move = function () {
            this.y -= 10;
        };
        Projectile.prototype.CheckBound = function () {
            if (this.y < -10) {
                // Currently tracking if it's off screen here to be cleaned up on PlayScene
                this.isOffScreen = true;
            }
        };
        return Projectile;
    }(objects.GameObject));
    objects.Projectile = Projectile;
})(objects || (objects = {}));
//# sourceMappingURL=projectile.js.map
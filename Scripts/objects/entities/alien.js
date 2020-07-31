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
    var Alien = /** @class */ (function (_super) {
        __extends(Alien, _super);
        function Alien(assetManager, colourIdx) {
            var _this = _super.call(this, assetManager, "alien" + objects.ColourPalette[colourIdx]) || this;
            _this.ImgScale = 0.15;
            _this.scaleX = _this.scaleY = _this.ImgScale;
            _this.colour = objects.ColourPalette[colourIdx];
            _this.isDead = false;
            _this.attackedPlayer = false;
            return _this;
        }
        Alien.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
            this.attackedPlayer = false;
        };
        return Alien;
    }(objects.Enemy));
    objects.Alien = Alien;
})(objects || (objects = {}));
//# sourceMappingURL=alien.js.map
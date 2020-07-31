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
    var Bomb = /** @class */ (function (_super) {
        __extends(Bomb, _super);
        function Bomb(assetManager, colourIdx) {
            var _this = _super.call(this, assetManager, "bomb" + objects.ColourPalette[colourIdx]) || this;
            _this.colour = objects.ColourPalette[colourIdx];
            _this.isDead = false;
            return _this;
        }
        return Bomb;
    }(objects.Enemy));
    objects.Bomb = Bomb;
})(objects || (objects = {}));
//# sourceMappingURL=bomb.js.map
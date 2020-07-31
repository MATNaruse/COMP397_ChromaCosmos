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
        Bomb.prototype.CheckHitbox = function (pointX, pointY) {
            var inHitbox = false;
            // Reimplemented to adjust the Bitmap Scaling
            // TODO: Compensate for bitmap Scaling in gameobject.ts
            if (pointX < (this.x + (this.halfW * 0.25)) && pointX > (this.x - (this.halfW * 0.25))) { //If its within the object's range on X axis
                if (pointY < (this.y + (this.halfH * 0.25)) && pointY > (this.y - (this.halfH * 0.25))) {
                    console.log("HIT!!!");
                    return true;
                }
            }
            return inHitbox;
        };
        return Bomb;
    }(objects.Enemy));
    objects.Bomb = Bomb;
})(objects || (objects = {}));
//# sourceMappingURL=bomb.js.map
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
    var HUDItem = /** @class */ (function (_super) {
        __extends(HUDItem, _super);
        function HUDItem(assetManager, fileName, x, y, scale) {
            if (scale === void 0) { scale = 1; }
            var _this = _super.call(this, assetManager, fileName) || this;
            _this.scaleX = _this.scaleY = scale;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return HUDItem;
    }(objects.GameObject));
    objects.HUDItem = HUDItem;
})(objects || (objects = {}));
//# sourceMappingURL=huditem.js.map
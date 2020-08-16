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
        function HUDItem(fileName, x, y, scaleX, scaleY) {
            if (scaleX === void 0) { scaleX = 1; }
            if (scaleY === void 0) { scaleY = 1; }
            var _this = _super.call(this, fileName) || this;
            _this.x = x;
            _this.y = y;
            if (scaleX != 1 || scaleY != 1) {
                _this.scaleX = scaleX;
                _this.scaleY = scaleY;
            }
            return _this;
        }
        return HUDItem;
    }(objects.GameObject));
    objects.HUDItem = HUDItem;
})(objects || (objects = {}));
//# sourceMappingURL=huditem.js.map
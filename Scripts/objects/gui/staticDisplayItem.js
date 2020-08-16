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
    var StaticDisplayItem = /** @class */ (function (_super) {
        __extends(StaticDisplayItem, _super);
        // Constructor
        function StaticDisplayItem(fileName, x, y, scaleX, scaleY) {
            if (scaleX === void 0) { scaleX = 1; }
            if (scaleY === void 0) { scaleY = 1; }
            var _this = _super.call(this, managers.Game.assetManager.getResult(fileName)) || this;
            _this.x = x;
            _this.y = y;
            if (scaleX != 1 || scaleY != 1) {
                _this.scaleX = scaleX;
                _this.scaleY = scaleY;
            }
            _this.Init();
            return _this;
        }
        StaticDisplayItem.prototype.Init = function () {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            // Registration points
            this.regX = this.halfW;
            this.regY = this.halfH;
        };
        // Get Edges - for Collision Detection
        StaticDisplayItem.prototype.GetLeftEdge = function () { return this.x - this.halfW; };
        StaticDisplayItem.prototype.GetRightEdge = function () { return this.x + this.halfW; };
        StaticDisplayItem.prototype.GetTopEdge = function () { return this.y - this.halfH; };
        StaticDisplayItem.prototype.GetBottomEdge = function () { return this.y + this.halfH; };
        StaticDisplayItem.prototype.Start = function () { };
        StaticDisplayItem.prototype.Update = function () { };
        StaticDisplayItem.prototype.Reset = function () { };
        StaticDisplayItem.prototype.Move = function () { };
        StaticDisplayItem.prototype.CheckBound = function () { };
        return StaticDisplayItem;
    }(createjs.Bitmap));
    objects.StaticDisplayItem = StaticDisplayItem;
})(objects || (objects = {}));
//# sourceMappingURL=staticDisplayItem.js.map
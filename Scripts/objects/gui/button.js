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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        // Constructor
        function Button(imageString, x, y, verticalCenter) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (verticalCenter === void 0) { verticalCenter = false; }
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            // Default position
            _this.x = x;
            _this.y = y;
            _this.midVertical = _this.getBounds().height / 2;
            _this.midHorizontal = _this.getBounds().width / 2;
            if (verticalCenter)
                _this.y -= _this.midVertical;
            // Set up event handlers
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
        }
        // Methods
        // Event Handlers
        Button.prototype.mouseOver = function () {
            this.alpha = 0.7;
        };
        Button.prototype.mouseOut = function () {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map
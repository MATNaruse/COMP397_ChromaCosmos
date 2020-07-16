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
    var MenuButton = /** @class */ (function (_super) {
        __extends(MenuButton, _super);
        function MenuButton(labelString, posX, posY, isCenter) {
            if (posX === void 0) { posX = 0; }
            if (posY === void 0) { posY = 0; }
            if (isCenter === void 0) { isCenter = false; }
            var _this = _super.call(this) || this;
            _this.Label = new createjs.Text(labelString, "30px Consolas", "#FFFFFF");
            _this.boxW = _this.Label.getMeasuredWidth() + 50;
            _this.boxH = _this.Label.getMeasuredHeight() + 40;
            _this.Label.regX = _this.Label.getMeasuredWidth() * 0.5;
            _this.Label.regY = _this.Label.getMeasuredHeight() * 0.8;
            _this.Label.x = _this.boxW * 0.5;
            _this.Label.y = _this.boxH * 0.5;
            _this.graphics.beginFill("#0F0E0E");
            _this.graphics.drawRect(0, 0, _this.boxW, _this.boxH);
            _this.x = posX;
            _this.y = posY;
            _this.Label.x = posX + (_this.boxW * 0.5);
            _this.Label.y = posY + (_this.boxH * 0.5);
            if (isCenter) {
                _this.x -= _this.boxW / 2;
                _this.Label.x -= _this.boxW / 2;
            }
            _this.on("added", _this.renderText); // From https://www.createjs.com/docs/easeljs/classes/Shape.html#event_added
            _this.on("mouseover", _this.mouseOver, _this);
            _this.on("mouseout", _this.mouseOut, _this);
            return _this;
        }
        MenuButton.prototype.renderText = function () {
            this.parent.addChild(this.Label);
        };
        MenuButton.prototype.mouseOver = function () {
            this.alpha = 0.7;
        };
        MenuButton.prototype.mouseOut = function () {
            this.alpha = 1.0;
        };
        return MenuButton;
    }(createjs.Shape));
    objects.MenuButton = MenuButton;
})(objects || (objects = {}));
//# sourceMappingURL=menuButton.js.map
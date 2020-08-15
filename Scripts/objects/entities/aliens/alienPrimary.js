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
    var PrimaryAlien = /** @class */ (function (_super) {
        __extends(PrimaryAlien, _super);
        // Constructor
        function PrimaryAlien(assetManager, colourIdx, startX, startY) {
            if (startX === void 0) { startX = 0; }
            if (startY === void 0) { startY = 0; }
            var _this = _super.call(this, assetManager, colourIdx, startX, startY) || this;
            _this.range = 50;
            _this.leftTrue = true;
            switch (colourIdx) {
                case (0):
                    // Red
                    _this.range = 0;
                    _this.increment = 0;
                    _this.ySpeed = 7;
                    break;
                case (1):
                    // Blue
                    _this.range = 70;
                    _this.increment = 3;
                    _this.ySpeed = 4;
                    break;
                case (2):
                    // Yellow
                    _this.range = 25;
                    _this.increment = 2;
                    _this.ySpeed = 2;
                    break;
            }
            return _this;
        }
        // Methods
        PrimaryAlien.prototype.Move = function () {
            this.y += this.ySpeed;
            if (this.leftTrue)
                this.x -= this.increment;
            else
                this.x += this.increment;
            if (this.x >= (this.startX + this.range))
                this.leftTrue = true;
            else if (this.x <= (this.startX - this.range))
                this.leftTrue = false;
        };
        return PrimaryAlien;
    }(objects.Alien));
    objects.PrimaryAlien = PrimaryAlien;
})(objects || (objects = {}));
//# sourceMappingURL=alienPrimary.js.map
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
        function PrimaryAlien(assetManager, colourIdx) {
            var _this = _super.call(this, assetManager, colourIdx) || this;
            _this.range = 20;
            _this.leftTrue = true;
            return _this;
        }
        // Methods
        PrimaryAlien.prototype.Move = function () {
            this.y += 3;
            // console.log("X:" + this.x + "| startX:" + this.startX);
            var increment = 2;
            if (this.leftTrue)
                this.x -= increment;
            else
                this.x += increment;
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
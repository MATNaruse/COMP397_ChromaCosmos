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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // Constructor
        function Background(assetManager, second) {
            if (second === void 0) { second = false; }
            var _this = _super.call(this, assetManager.getResult("background")) || this;
            // Variables
            _this.speedY = 2;
            // console.log("Creating the background");
            _this.scaleX = 1.25;
            _this.scaleY = .72;
            _this.second = second;
            _this.Start();
            return _this;
        }
        // Functions
        Background.prototype.Start = function () {
            this.Reset();
        };
        Background.prototype.Update = function () {
            this.Move(); // Movement Temporarily Disabled
            this.CheckBound();
        };
        Background.prototype.Reset = function () {
            // Reset my background y position.
            // console.log("RESET!");
            if (this.second) {
                // console.log("RESET 2nd BG");
                this.y = -720;
            }
            else {
                // console.log("RESET 1st BG");
                this.y = 0;
            }
        };
        Background.prototype.Move = function () {
            // console.log("MOVING BG");
            this.y += this.speedY;
        };
        // Collision Detection
        Background.prototype.CheckBound = function () {
            if (this.second) {
                if (this.y >= 0) {
                    this.Reset();
                }
            }
            else {
                if (this.y >= 720) {
                    this.Reset();
                }
            }
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map
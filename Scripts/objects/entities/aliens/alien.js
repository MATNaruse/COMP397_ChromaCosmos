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
    var Alien = /** @class */ (function (_super) {
        __extends(Alien, _super);
        // Constructor
        function Alien(colourIdx, startX, startY) {
            if (startX === void 0) { startX = 0; }
            if (startY === void 0) { startY = 0; }
            var _this = _super.call(this, "alien" + objects.ColourPalette[colourIdx]) || this;
            _this.ScoreValue = 100;
            _this.increment = 2;
            _this.ySpeed = 3;
            _this.ImgScale = 1;
            _this.x = startX;
            _this.y = startY;
            _this.scaleX = _this.scaleY = _this.ImgScale;
            _this.colour = objects.ColourPalette[colourIdx];
            _this.isDead = false;
            _this.attackedPlayer = false;
            _this.startX = _this.x;
            return _this;
        }
        // Methods
        Alien.prototype.Start = function () {
            this.Reset();
        };
        Alien.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Alien.prototype.Reset = function () {
            // DEBUG: Disabled random Y value for testing
            this.y = Math.floor(Math.random() * -(managers.Game.canvasH - 100)) - 50;
            // this.y = -100;
            this.attackedPlayer = false;
        };
        Alien.prototype.CheckBound = function () {
            if (this.y >= managers.Game.canvasH + this.halfH + 25)
                this.Reset();
            if (this.x >= managers.Game.canvasW - this.halfW)
                this.x = managers.Game.canvasW - this.halfW;
            if (this.x <= this.halfW)
                this.x = this.halfW;
        };
        return Alien;
    }(objects.GameObject));
    objects.Alien = Alien;
})(objects || (objects = {}));
//# sourceMappingURL=alien.js.map
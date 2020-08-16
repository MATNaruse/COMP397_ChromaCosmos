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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy(spriteName) {
            if (spriteName === void 0) { spriteName = "enemy"; }
            var _this = _super.call(this, spriteName) || this;
            // Variables
            _this.ScoreValue = 100;
            _this.Start();
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.Reset();
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Enemy.prototype.Reset = function () {
            // DEBUG: Disabled random Y value for testing
            // this.y = Math.floor(Math.random() * -(managers.Game.canvasH - 100)) - 50;
            this.y = -100;
        };
        Enemy.prototype.Move = function () {
            this.y += 5;
        };
        Enemy.prototype.CheckBound = function () {
            if (this.y >= managers.Game.canvasH + this.halfH + 25) {
                this.Reset();
            }
            if (this.x >= managers.Game.canvasW - this.halfW)
                this.x = managers.Game.canvasW - this.halfW;
            if (this.x <= this.halfW)
                this.x = this.halfW;
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
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
    var SecondaryAlien = /** @class */ (function (_super) {
        __extends(SecondaryAlien, _super);
        // Constructor
        function SecondaryAlien(assetManager, colourIdx) {
            var _this = _super.call(this, assetManager, colourIdx) || this;
            _this.ScoreValue = 200;
            _this.LeftAlien = null;
            _this.RightAlien = null;
            _this.CollisionActive = false;
            return _this;
        }
        // Methods
        SecondaryAlien.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (!this.CollisionActive && this.y - this.height > 0)
                this.CollisionActive = true;
        };
        SecondaryAlien.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
            this.CollisionActive = false;
            // this.LeftAlien = null;
            // this.RightAlien = null;
        };
        SecondaryAlien.prototype.Move = function () {
            this.y += 2;
            var Player = managers.Game.PlayerEntity;
            var Increment = 1;
            // Moving Right towards Player
            if (Player.x >= this.x) {
                if (this.IsChained()) {
                    if (this.RightAlien != null) {
                        this.x = this.RightAlien.GetLeftEdge() - this.halfW;
                    }
                    else {
                        this.x += Increment;
                    }
                    // var xPlus = this.GetRightMostAlien().x + this.halfW;
                    // this.x = this.x - xPlus;
                    // var xOffset = this.GetRightChainXOffset();
                    // console.log(this.name + " got Right Offset: " + xOffset);
                    // this.x = xOffset;
                }
                else {
                    this.x += Increment;
                }
                // this.x += Increment;
            }
            // Moving Left towards Player
            else if (Player.x <= this.x) {
                if (this.IsChained()) {
                    if (this.LeftAlien != null) {
                        this.x = this.LeftAlien.GetRightEdge() + this.halfW;
                    }
                    else {
                        this.x -= Increment;
                    }
                    // var xMinus =this.GetLeftMostAlien().x + this.halfW;
                    // this.x = this.x + xMinus;
                    // var xOffset = this.GetLeftChainXOffset();
                    // console.log(this.name + " got Left Offset: " + xOffset);
                    // this.x = -xOffset;
                }
                else {
                    this.x -= Increment;
                }
                // this.x -= Increment;
            }
            // this.y += 2;
            // let Player = managers.Game.PlayerEntity;
            // let Increment = 1;
            // if(Player.x >= this.x) this.x += Increment;
            // else if(Player.x <= this.x) this.x -= Increment;
        };
        SecondaryAlien.prototype.IsChained = function () { return (this.LeftAlien != null || this.RightAlien != null); };
        SecondaryAlien.prototype.GetLeftMostAlien = function () {
            if (this.LeftAlien != null) {
                return this.LeftAlien.GetLeftMostAlien();
            }
            else {
                return this;
            }
        };
        SecondaryAlien.prototype.GetRightMostAlien = function () {
            if (this.RightAlien != null) {
                return this.RightAlien.GetRightMostAlien();
            }
            else {
                return this;
            }
        };
        SecondaryAlien.prototype.GetLeftChainXOffset = function () {
            if (this.LeftAlien != null) {
                return this.width + this.LeftAlien.GetLeftChainXOffset();
            }
            else {
                return this.halfW;
            }
        };
        SecondaryAlien.prototype.GetRightChainXOffset = function () {
            if (this.RightAlien != null) {
                return this.width + this.RightAlien.GetRightChainXOffset();
            }
            else {
                return this.halfW;
            }
        };
        SecondaryAlien.prototype.AlienLinkCheck = function (alien) {
            return alien != this.LeftAlien && alien != this.RightAlien;
        };
        SecondaryAlien.prototype.DEBUGRightChain = function () {
            if (this.RightAlien != null) {
                return this.name + ">" + this.RightAlien.DEBUGRightChain();
            }
            // else{ return this.name;}
        };
        SecondaryAlien.prototype.DEBUGLeftChain = function () {
            if (this.LeftAlien != null) {
                return this.LeftAlien.DEBUGLeftChain() + "<" + this.name;
            }
            // else{ return this.name;}
        };
        return SecondaryAlien;
    }(objects.Alien));
    objects.SecondaryAlien = SecondaryAlien;
})(objects || (objects = {}));
//# sourceMappingURL=alienSecondary.js.map
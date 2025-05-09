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
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // Constructor
        function GameObject(imageString) {
            var _this = 
            // super(managers.Game.assetManager.getResult(imageString));
            _super.call(this, managers.Game.textureAtlas, imageString) || this;
            _this.name = imageString;
            _this.ImgScale = 1;
            _this.Init();
            return _this;
        }
        GameObject.prototype.Init = function () {
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
        GameObject.prototype.GetLeftEdge = function () { return this.x - this.halfW; };
        GameObject.prototype.GetRightEdge = function () { return this.x + this.halfW; };
        GameObject.prototype.GetTopEdge = function () { return this.y - this.halfH; };
        GameObject.prototype.GetBottomEdge = function () { return this.y + this.halfH; };
        GameObject.prototype.Start = function () { };
        GameObject.prototype.Update = function () { };
        GameObject.prototype.Reset = function () { };
        GameObject.prototype.Move = function () { };
        GameObject.prototype.CheckBound = function () { };
        return GameObject;
    }(createjs.Sprite));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map
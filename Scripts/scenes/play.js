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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // private enemy:objects.Enemy;
        // private enemies:objects.Enemy[];
        // private enemyNum:number;
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.playerShots = new Array();
            objects.Game.KeyA = false;
            objects.Game.KeyS = false;
            objects.Game.KeyD = false;
            // this.enemy = new objects.Enemy(this.assetManager);
            // this.enemies = new Array<objects.Enemy>();
            // this.enemyNum = 5;
            // for(let i = 0; i < this.enemyNum; i++) {
            //     this.enemies[i] = new objects.Enemy(this.assetManager);
            // }
            // Detecting Keyboard Key Presses
            window.addEventListener("keydown", this.KeyPressHandler);
            window.addEventListener("keyup", this.KeyPressHandler);
            // Detecting Mouse Click
            this.on("click", this.FireBullet);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.background.Update();
            this.player.Update();
            // Player Bullet Logic
            if (this.playerShots.length > 0) {
                this.playerShots.forEach(function (b) {
                    if (!b.isOffScreen) {
                        b.Update();
                    }
                    else {
                        _this.removeChild(b);
                    }
                });
                console.log("Bullets Left:" + this.playerShots.length);
            }
            if (this.playerShots.length > 0) {
                var DeleteBullets = this.playerShots.filter(function (b) { return b.isOffScreen; });
                this.playerShots = this.playerShots.filter(function (b) { return !b.isOffScreen; });
                if (DeleteBullets.length > 0) {
                    console.log("DeleteBullets:" + DeleteBullets.length);
                    DeleteBullets.splice(0, DeleteBullets.length);
                    console.log("DeleteBulletsConfirm:" + DeleteBullets.length);
                }
            }
            // this.enemy.Update();
            // this.enemies.forEach(e => {
            //     e.Update();
            // })
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            // this.enemies.forEach(e => {
            //     this.addChild(e);
            // })
        };
        // Private Methods
        PlayScene.prototype.KeyPressHandler = function (evt) {
            // console.log("Key Pressed! - " + evt.keyCode + "[" + evt.type + "]");
            // A = 65, S = 83, D = 68
            switch (evt.keyCode) {
                case 65:
                    if (evt.type == "keydown")
                        objects.Game.KeyA = true;
                    else
                        objects.Game.KeyA = false;
                    break;
                case 83:
                    if (evt.type == "keydown")
                        objects.Game.KeyS = true;
                    else
                        objects.Game.KeyS = false;
                    break;
                case 68:
                    if (evt.type == "keydown")
                        objects.Game.KeyD = true;
                    else
                        objects.Game.KeyD = false;
                    break;
            }
        };
        PlayScene.prototype.FireBullet = function () {
            var BulletColourIndex = this.GetBulletColour();
            if (BulletColourIndex != -1) {
                var newBullet = new objects.Projectile(this.assetManager, BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
            }
        };
        PlayScene.prototype.GetBulletColour = function () {
            var Red = objects.Game.KeyA;
            var Blue = objects.Game.KeyS;
            var Yellow = objects.Game.KeyD;
            var Green = !Red && Blue && Yellow;
            var Purple = Red && Blue && !Yellow;
            var Orange = Red && !Blue && Yellow;
            if (Green) {
                return 3;
            }
            else if (Purple) {
                return 4;
            }
            else if (Orange) {
                return 5;
            }
            else if (Red) {
                return 0;
            }
            else if (Blue) {
                return 1;
            }
            else if (Yellow) {
                return 2;
            }
            else {
                return -1;
            }
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map
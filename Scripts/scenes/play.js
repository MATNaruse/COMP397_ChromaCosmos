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
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            managers.Game.Score = 0;
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager);
            this.background2 = new objects.Background(this.assetManager, true);
            this.player = new objects.Player(this.assetManager);
            this.playerShots = new Array();
            // Spawning Aliens
            this.aliens = new Array();
            this.fleetGen = new managers.AlienGenerator(this.aliens);
            this.fleetGen.GenerateWaves(3, 3, false);
            this.bombs = new Array();
            // Initializing ColourChamber
            this.colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 100, 620, 0.4);
            // Detecting Mouse Click
            this.on("click", this.FireBullet);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.UpdateColourChamber();
            this.background.Update();
            this.background2.Update();
            this.player.Update();
            // Detect if player is hit
            this.aliens.forEach(function (alien) {
                if (managers.Collision.Detect(alien, _this.player)) {
                    _this.player.TakeDamage();
                    console.log("PLAYER LIVING STATUS - " + _this.player.isDead);
                }
            });
            if (this.player.isDead) {
                managers.Game.currentScene = config.Scene.OVER;
            }
            else {
                // Player Bullet Logic
                // On-Screen Bullets
                if (this.playerShots.length > 0) {
                    this.playerShots.forEach(function (b) {
                        if (!b.isOffScreen)
                            b.Update();
                        else
                            _this.removeChild(b);
                    });
                    console.log("Bullets Left:" + this.playerShots.length);
                    this.playerShots.forEach(function (bullet) {
                        // this.bombs.forEach(bomb => {
                        //     if( (bullet.colour == bomb.colour) && managers.Collision.Detect(bullet, bomb)){
                        //         console.log("BOMB EXPLODED!!!");
                        //         bullet.isOffScreen = true;
                        //         bomb.isDead = true;
                        //         this.BombExplode(bomb.colour)
                        //         this.removeChild(bullet);
                        //         this.removeChild(bomb);
                        //     }
                        // })
                        _this.aliens.forEach(function (alien) {
                            if (managers.Collision.Detect(bullet, alien)) {
                                managers.Game.Score += alien.ScoreValue;
                                _this.removeChild(bullet);
                                _this.removeChild(alien);
                            }
                            ;
                        });
                    });
                }
                // Off-Screen Bullets
                if (this.playerShots.length > 0) {
                    var DeleteBullets = this.playerShots.filter(function (b) { return b.isOffScreen; });
                    this.playerShots = this.playerShots.filter(function (b) { return !b.isOffScreen; });
                    if (DeleteBullets.length > 0) {
                        console.log("DeleteBullets:" + DeleteBullets.length);
                        DeleteBullets.splice(0, DeleteBullets.length);
                        console.log("DeleteBulletsConfirm:" + DeleteBullets.length);
                    }
                }
                // this.bombs.forEach(b => b.Update());
                this.aliens.forEach(function (a) { return a.Update(); });
                // // Cleaning up Exploded Bombs
                // if(this.bombs.length > 0){
                //     var ExplodedBombs = this.bombs.filter(a => a.isDead);
                //     this.bombs = this.bombs.filter(a => !a.isDead);
                //     if (ExplodedBombs.length > 0){
                //         console.log("ExplodedBombs:" + ExplodedBombs.length);
                //         ExplodedBombs.splice(0, ExplodedBombs.length);
                //         console.log("ExplodedBombsConfirm:" + ExplodedBombs.length);
                //     }
                // }
                // Cleaning up Dead Aliens
                if (this.aliens.length > 0) {
                    var DeleteAliens = this.aliens.filter(function (a) { return a.isDead; });
                    this.aliens = this.aliens.filter(function (a) { return !a.isDead; });
                    if (DeleteAliens.length > 0) {
                        console.log("DeleteAliens:" + DeleteAliens.length);
                        DeleteAliens.splice(0, DeleteAliens.length);
                        console.log("DeleteAliensConfirm:" + DeleteAliens.length);
                    }
                }
                // Win Condition
                if (this.aliens.length == 0)
                    managers.Game.currentScene = config.Scene.OVER;
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.background2);
            this.addChild(this.player);
            this.addChild(this.colourChamber);
            this.aliens.forEach(function (a) { return _this.addChild(a); });
        };
        // Private Methods
        PlayScene.prototype.FireBullet = function () {
            var BulletColourIndex = this.GetActiveColour();
            if (BulletColourIndex != -1) {
                var newBullet = new objects.Projectile(this.assetManager, BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
                createjs.Sound.play("laserFire1");
            }
        };
        PlayScene.prototype.UpdateColourChamber = function () {
            var CurrentColour = this.GetActiveColour();
            if (CurrentColour != -1) {
                this.removeChild(this.colourChamber);
                this.colourChamber = new objects.HUDItem(this.assetManager, "chamber" + objects.ColourPalette[CurrentColour], 100, 620, 0.4);
                this.addChild(this.colourChamber);
            }
            else {
                this.removeChild(this.colourChamber);
                this.colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 100, 620, 0.4);
                this.addChild(this.colourChamber);
            }
            // Placing the new colourChamber HUDItem
            this.colourChamber.x = 100;
            this.colourChamber.y = 620;
        };
        PlayScene.prototype.GetActiveColour = function () {
            var Red = managers.Game.controlManager.KeyA;
            var Blue = managers.Game.controlManager.KeyS;
            var Yellow = managers.Game.controlManager.KeyD;
            if ((Red && Blue && Yellow) || (!Red && !Blue && !Yellow))
                return -1; //If All or None of the Keys are Pressed
            else if (Blue && Yellow)
                return 3; // Green
            else if (Red && Blue)
                return 4; // Purple
            else if (Red && Yellow)
                return 5; // Orange
            else if (Red)
                return 0;
            else if (Blue)
                return 1;
            else if (Yellow)
                return 2;
        };
        PlayScene.prototype.BombExplode = function (colour) {
            var filtered_aliens = this.aliens.filter(function (a) { return a.colour == colour; });
            filtered_aliens.forEach(function (a) { return a.isDead = true; });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map
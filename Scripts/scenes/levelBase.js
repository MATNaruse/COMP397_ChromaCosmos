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
    var LevelBase = /** @class */ (function (_super) {
        __extends(LevelBase, _super);
        // Constructor
        function LevelBase(assetManager) {
            return _super.call(this, assetManager) || this;
        }
        // Methods
        LevelBase.prototype.Start = function () {
            // Player Inits
            this.player = new objects.Player(this.assetManager);
            this.playerShots = new Array();
            // Alien Inits
            this.aliens = new Array();
            this.fleetGen = new levels.FleetGenerator(this.aliens);
            // Other/HUD Inits
            this.background1 = new objects.Background(this.assetManager);
            this.background2 = new objects.Background(this.assetManager);
            this.hud_colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 100, 620, 0.4);
            this.aliens = this.SpawnAliens();
        };
        LevelBase.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background1);
            this.addChild(this.background2);
            this.addChild(this.player);
            this.addChild(this.hud_colourChamber);
            this.aliens.forEach(function (a) { return _this.addChild(a); });
        };
        LevelBase.prototype.Update = function () {
            var _this = this;
            this.UpdateColourChamber();
            this.background1.Update();
            this.background2.Update();
            this.player.Update();
            // Detect if player is hit
            this.aliens.forEach(function (alien) {
                if (managers.Collision.Detect(alien, _this.player)) {
                    _this.player.TakeDamage();
                    console.log("PLAYER LIVING STATUS - " + _this.player.isDead);
                }
            });
            // If Player is dead, move to Game Over
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
                managers.CleanUp.Projectiles(this.playerShots);
                this.aliens.forEach(function (a) { return a.Update(); });
                // Cleaning up Dead Aliens
                managers.CleanUp.Aliens(this.aliens);
                // Win Condition
                this.CheckWin();
            }
        };
        // Protected Methods
        LevelBase.prototype.CheckWin = function () {
        };
        LevelBase.prototype.SpawnAliens = function () {
            return null;
        };
        LevelBase.prototype.FireBullet = function () {
            var BulletColourIndex = managers.Game.GetActiveColour();
            if (BulletColourIndex != -1) {
                var newBullet = new objects.Projectile(this.assetManager, BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
                createjs.Sound.play("laserFire1");
            }
        };
        LevelBase.prototype.UpdateColourChamber = function () {
            var CurrentColour = managers.Game.GetActiveColour();
            if (CurrentColour != -1) {
                this.removeChild(this.hud_colourChamber);
                this.hud_colourChamber = new objects.HUDItem(this.assetManager, "chamber" + objects.ColourPalette[CurrentColour], 100, 620, 0.4);
                this.addChild(this.hud_colourChamber);
            }
            else {
                this.removeChild(this.hud_colourChamber);
                this.hud_colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 100, 620, 0.4);
                this.addChild(this.hud_colourChamber);
            }
            // MOVED: GetActiveColour to managers.Game
        };
        return LevelBase;
    }(objects.Scene));
    scenes.LevelBase = LevelBase;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelBase.js.map
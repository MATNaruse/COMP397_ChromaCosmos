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
        // Public Methods
        LevelBase.prototype.Start = function () {
            // Player Inits
            this.player = new objects.Player();
            this.playerShots = new Array();
            managers.Game.PlayerEntity = this.player;
            // Alien Inits
            this.aliens = new Array();
            // this.fleetGen = new managers.AlienGenerator(this.aliens); //DEBUG: Reworking AlienGenerator
            this.fleetGen = new managers.AlienGenerator(this.aliens);
            // Other/HUD Inits
            this.background1 = new objects.Background();
            this.background2 = new objects.Background(true);
            this.hud_colourChamber = new objects.HUDItem("chamberEMPTY", 250, 550, 0.2);
            this.hud_healthIndicator = new objects.HUDItem("healthIndicator5", 1150, 550);
            this.hud_levelIndicator = new objects.Label(this.levelName, "35px", "Consolas", "#FFFFFF", 25, 680);
            this.hud_scoreIndicator = new objects.Label(managers.Game.Score.toString(), "35px", "Consolas", "#FFFFFF", 1150, 650);
            this.SpawnAliens();
        };
        LevelBase.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background1);
            this.addChild(this.background2);
            this.addChild(this.player);
            this.addChild(this.hud_colourChamber);
            this.addChild(this.hud_levelIndicator);
            this.addChild(this.hud_scoreIndicator);
            this.addChild(this.hud_healthIndicator);
            this.UpdateHealthIndicator();
            this.aliens.forEach(function (a) { return _this.addChild(a); });
        };
        LevelBase.prototype.Update = function () {
            var _this = this;
            this.UpdateColourChamber();
            this.background1.Update();
            this.background2.Update();
            this.player.Update();
            // DEBUG: Removed Player Collision Detection for Testing
            // // Detect if player is hit
            // this.aliens.forEach(alien => {
            //     if(managers.Collision.VerticalDetect(alien, this.player)){
            //         this.player.TakeDamage();
            //         this.UpdateHealthIndicator();
            //         // console.log("Player Dead Status - " + this.player.isDead);
            //     }
            // });
            // If Player is dead, move to Game Over immediately
            if (this.player.isDead) {
                this.music.destroy();
                managers.Game.currentScene = config.Scene.OVER;
            }
            else {
                // Player Bullet Logic
                managers.PlayerShots.OnScreen(this);
                // Off-Screen Bullets
                this.playerShots = managers.CleanUp.Projectiles(this.playerShots);
                // Alien Update
                this.aliens.forEach(function (a) { return a.Update(); });
                this.aliens.forEach(function (a) { return _this.aliens.forEach(function (b) { return managers.Collision.HorizontalDetect(a, b); }); });
                // Cleaning up Dead Aliens
                this.aliens = managers.CleanUp.Aliens(this.aliens);
                // Win Condition
                this.CheckWin();
                // Update Score
                this.UpdateScoreIndicator();
            }
        };
        // Protected Methods
        LevelBase.prototype.CheckWin = function () {
            // Modify in child class for Win conditions and moving to specific Scene.
        };
        LevelBase.prototype.SpawnAliens = function () {
            // Modify in child class for "Level Differences"/Difficulty.
        };
        LevelBase.prototype.FireBullet = function () {
            var BulletColourIndex = managers.Game.GetActiveColour();
            if (BulletColourIndex != -1) {
                var newBullet = new objects.Projectile(BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
                createjs.Sound.play("laserFire1");
            }
        };
        // Private Methods
        LevelBase.prototype.UpdateColourChamber = function () {
            // FUTURE: Trigger this when button is pressed, not constant check -> Logic Doesn't Currently Work
            var CurrentColour = managers.Game.GetActiveColour();
            if (CurrentColour != -1) {
                this.removeChild(this.hud_colourChamber);
                this.hud_colourChamber = new objects.HUDItem("chamber" + objects.ColourPalette[CurrentColour], 100, 620, 0.2);
                this.addChild(this.hud_colourChamber);
            }
            else {
                this.removeChild(this.hud_colourChamber);
                this.hud_colourChamber = new objects.HUDItem("chamberEMPTY", 100, 620, 0.2);
                this.addChild(this.hud_colourChamber);
            }
        };
        LevelBase.prototype.UpdateHealthIndicator = function () {
            var assetName = "healthIndicator" + this.player.Health;
            console.log("UPDATING HEALTH: " + assetName);
            this.removeChild(this.hud_healthIndicator);
            this.hud_healthIndicator = new objects.HUDItem(assetName, 1175, 590);
            this.addChild(this.hud_healthIndicator);
        };
        LevelBase.prototype.UpdateScoreIndicator = function () {
            this.removeChild(this.hud_scoreIndicator);
            this.hud_scoreIndicator = new objects.Label(managers.Game.Score.toString(), "35px", "Consolas", "#FFFFFF", 1175, 675, true);
            this.addChild(this.hud_scoreIndicator);
        };
        return LevelBase;
    }(objects.Scene));
    scenes.LevelBase = LevelBase;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelBase.js.map
module scenes{
    export abstract class LevelBase extends objects.Scene{
        // Variables
        protected background1: objects.Background;
        protected background2: objects.Background;
        public player: objects.Player;
        public playerShots: objects.Projectile[];
        public aliens: objects.Alien[];
        protected hud_colourChamber: objects.HUDItem;
        protected hud_levelIndicator: objects.Label;
        protected hud_scoreIndicator: objects.Label;
        protected hud_healthIndicator: objects.HUDItem;
        protected levelName: string;
        protected fleetGen: managers.AlienGenerator;
        
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
        }

        // Public Methods
        public Start():void{
            // Player Inits
            this.player = new objects.Player();
            this.playerShots = new Array<objects.Projectile>();
            managers.Game.PlayerEntity = this.player;

            // Alien Inits
            this.aliens = new Array<objects.Alien>();
            // this.fleetGen = new managers.AlienGenerator(this.aliens); //DEBUG: Reworking AlienGenerator
            this.fleetGen = new managers.AlienGenerator(this.aliens);

            // Other/HUD Inits
            this.background1 = new objects.Background();
            this.background2 = new objects.Background(true);
            this.hud_colourChamber = new objects.HUDItem("chamberEMPTY", 250, 550);
            this.hud_healthIndicator = new objects.HUDItem("healthIndicator5",  1150, 550);
            this.hud_levelIndicator = new objects.Label(this.levelName, "35px", "Consolas", "#FFFFFF", 25, 680);
            this.hud_scoreIndicator = new objects.Label(managers.Game.Score.toString(), "35px", "Consolas", "#FFFFFF", 1150, 650);
            this.SpawnAliens();
        }

        public Main():void{
            this.addChild(this.background1);
            this.addChild(this.background2);
            this.addChild(this.player);
            this.addChild(this.hud_colourChamber);
            this.addChild(this.hud_levelIndicator);
            this.addChild(this.hud_scoreIndicator);
            this.addChild(this.hud_healthIndicator);
            this.UpdateHealthIndicator();
            this.aliens.forEach(a => this.addChild(a));
        }

        public Update():void{
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
            if(this.player.isDead){
                this.music.destroy();
                managers.Game.currentScene = config.Scene.OVER;
            }

            else {
                // Player Bullet Logic
                managers.PlayerShots.OnScreen(this);

                // Off-Screen Bullets
                this.playerShots = managers.CleanUp.Projectiles(this.playerShots);

                // Alien Update
                this.aliens.forEach(a => a.Update());
                this.aliens.forEach(a => this.aliens.forEach(b => managers.Collision.HorizontalDetect(a,b)))
            
                // Cleaning up Dead Aliens
                this.aliens = managers.CleanUp.Aliens(this.aliens);

                // Win Condition
                this.CheckWin();    

                // Update Score
                this.UpdateScoreIndicator();
            }
        }


        // Protected Methods
        protected CheckWin():void{
            // Modify in child class for Win conditions and moving to specific Scene.
        }

        protected SpawnAliens():void{
            // Modify in child class for "Level Differences"/Difficulty.
        }

        protected FireBullet():void{
            var BulletColourIndex = managers.Game.GetActiveColour();
            if(BulletColourIndex != -1){
                var newBullet = new objects.Projectile(BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
                createjs.Sound.play("laserFire1");
            }
        }

        // Private Methods
        private UpdateColourChamber():void{
            // FUTURE: Trigger this when button is pressed, not constant check -> Logic Doesn't Currently Work
            var CurrentColour = managers.Game.GetActiveColour();
            if(CurrentColour != -1){
                this.removeChild(this.hud_colourChamber);
                this.hud_colourChamber = new objects.HUDItem("chamber"+ objects.ColourPalette[CurrentColour], 100, 620);
                this.addChild(this.hud_colourChamber);
            }
            else{
                this.removeChild(this.hud_colourChamber);
                this.hud_colourChamber = new objects.HUDItem("chamberEMPTY", 100, 620);
                this.addChild(this.hud_colourChamber);
            }
        }

        private UpdateHealthIndicator():void{
            var assetName = "healthIndicator" + this.player.Health;
            console.log("UPDATING HEALTH: " + assetName);
            this.removeChild(this.hud_healthIndicator);
            this.hud_healthIndicator = new objects.HUDItem(assetName,  1175, 590);
            this.addChild(this.hud_healthIndicator);
        }

        private UpdateScoreIndicator():void{
            this.removeChild(this.hud_scoreIndicator);
            this.hud_scoreIndicator = new objects.Label(managers.Game.Score.toString(), "35px", "Consolas", "#FFFFFF", 1175, 675, true);
            this.addChild(this.hud_scoreIndicator);
        }
    }   
}
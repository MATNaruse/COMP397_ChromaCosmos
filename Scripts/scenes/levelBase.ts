module scenes{
    export class LevelBase extends objects.Scene{
        // Variables
        protected background1: objects.Background;
        protected background2: objects.Background;
        protected player: objects.Player;
        protected playerShots: objects.Projectile[];
        protected aliens: objects.Alien[];
        protected hud_colourChamber: objects.HUDItem;
        protected fleetGen: levels.FleetGenerator;
        
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
        }

        // Methods
        public Start():void{
            // Player Inits
            this.player = new objects.Player(this.assetManager);
            this.playerShots = new Array<objects.Projectile>();

            // Alien Inits
            this.aliens = new Array<objects.Alien>();
            this.fleetGen = new levels.FleetGenerator(this.aliens);

            // Other/HUD Inits
            this.background1 = new objects.Background(this.assetManager);
            this.background2 = new objects.Background(this.assetManager, true);
            this.hud_colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY",  100, 620, 0.4);

            this.SpawnAliens();
        }

        public Main():void{
            this.addChild(this.background1);
            this.addChild(this.background2);
            this.addChild(this.player);
            this.addChild(this.hud_colourChamber);
            this.aliens.forEach(a => this.addChild(a));
        }

        public Update():void{
            this.UpdateColourChamber();
            this.background1.Update();
            this.background2.Update();
            this.player.Update();

            // Detect if player is hit
            this.aliens.forEach(alien => {
                if(managers.Collision.Detect(alien, this.player)){
                    this.player.TakeDamage();
                    console.log("PLAYER LIVING STATUS - " + this.player.isDead);
                }
            });
            
            // If Player is dead, move to Game Over
            if(this.player.isDead){
                managers.Game.currentScene = config.Scene.OVER;
            }

            else {
                // Player Bullet Logic
                // On-Screen Bullets
                if(this.playerShots.length > 0){
                    this.playerShots.forEach(b => {
                        if(!b.isOffScreen) b.Update();
                        else this.removeChild(b);
                    });
                    //console.log("Bullets Left:" + this.playerShots.length);

                    this.playerShots.forEach(bullet => {
                        this.aliens.forEach(alien => {
                            if(managers.Collision.Detect(bullet, alien)){
                                managers.Game.Score += alien.ScoreValue;
                                this.removeChild(bullet);
                                this.removeChild(alien);
                            };

                        });
                    });
                }

                // Off-Screen Bullets
                this.playerShots = managers.CleanUp.Projectiles(this.playerShots);

                this.aliens.forEach(a => a.Update());

                // Cleaning up Dead Aliens
                this.aliens = managers.CleanUp.Aliens(this.aliens);

                // Win Condition
                this.CheckWin();    
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
                var newBullet = new objects.Projectile(this.assetManager, BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
                createjs.Sound.play("laserFire1");
            }
        }

        private UpdateColourChamber():void{
            var CurrentColour = managers.Game.GetActiveColour();
            if(CurrentColour != -1){
                this.removeChild(this.hud_colourChamber);
                this.hud_colourChamber = new objects.HUDItem(this.assetManager, "chamber"+ objects.ColourPalette[CurrentColour], 100, 620, 0.4);
                this.addChild(this.hud_colourChamber);
            }
            else{
                this.removeChild(this.hud_colourChamber);
                this.hud_colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 100, 620, 0.4);
                this.addChild(this.hud_colourChamber);
            }

        // MOVED: GetActiveColour to managers.Game
        }
    }   
}
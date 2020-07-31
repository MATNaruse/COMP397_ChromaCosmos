module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private background2: objects.Background;
        private player:objects.Player;
        private playerShots: objects.Projectile[];
        private aliens:objects.Alien[];
        private bombs:objects.Bomb[];
        private colourChamber: objects.HUDItem;
        private fleetGen: levels.FleetGenerator;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            managers.Game.Score = 0;
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager);
            this.background2 = new objects.Background(this.assetManager, true);
            this.player = new objects.Player(this.assetManager);
            this.playerShots = new Array<objects.Projectile>();
                                    
            // Spawning Aliens
            this.aliens = new Array<objects.Alien>();
            
            this.fleetGen = new levels.FleetGenerator(this.aliens);
            this.fleetGen.GenerateWaves(3, 3);


            this.bombs = new Array<objects.Bomb>();

            // Initializing ColourChamber
            this.colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 100, 620, 0.4);

            // Detecting Mouse Click
            this.on("click", this.FireBullet);
            this.Main();
        }

        public Update():void {
            this.UpdateColourChamber();
            this.background.Update();
            this.background2.Update();
            this.player.Update();

            // Detect if player is hit
            this.aliens.forEach(alien => {
                if(managers.Collision.Detect(alien, this.player)){
                    this.player.TakeDamage();
                    console.log("PLAYER LIVING STATUS - " + this.player.isDead);
                }
            });
            
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
                    console.log("Bullets Left:" + this.playerShots.length);

                    this.playerShots.forEach(bullet => {
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
                if(this.playerShots.length > 0){
                    var DeleteBullets = this.playerShots.filter(b => b.isOffScreen);
                    this.playerShots = this.playerShots.filter(b => !b.isOffScreen);
                    if (DeleteBullets.length > 0){
                        console.log("DeleteBullets:" + DeleteBullets.length);
                        DeleteBullets.splice(0, DeleteBullets.length);
                        console.log("DeleteBulletsConfirm:" + DeleteBullets.length);
                    }
                }

                // this.bombs.forEach(b => b.Update());
                this.aliens.forEach(a => a.Update());

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
                if(this.aliens.length > 0){
                    var DeleteAliens = this.aliens.filter(a => a.isDead);
                    this.aliens = this.aliens.filter(a => !a.isDead);
                    if (DeleteAliens.length > 0){
                        console.log("DeleteAliens:" + DeleteAliens.length);
                        DeleteAliens.splice(0, DeleteAliens.length);
                        console.log("DeleteAliensConfirm:" + DeleteAliens.length);
                    }
                }

                // Win Condition
                if(this.aliens.length == 0) managers.Game.currentScene = config.Scene.OVER;     
            }
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.background2);
            this.addChild(this.player);
            this.addChild(this.colourChamber);
            this.aliens.forEach(a => this.addChild(a));
        }

        // Private Methods
        private FireBullet():void{
            var BulletColourIndex = this.GetActiveColour();
            if(BulletColourIndex != -1){
                var newBullet = new objects.Projectile(this.assetManager, BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
                createjs.Sound.play("laserFire1");
            }
        }

        private UpdateColourChamber():void{
            var CurrentColour = this.GetActiveColour();
            if(CurrentColour != -1){
                this.removeChild(this.colourChamber);
                this.colourChamber = new objects.HUDItem(this.assetManager, "chamber"+ objects.ColourPalette[CurrentColour], 100, 620, 0.4);
                this.addChild(this.colourChamber);
            }
            else{
                this.removeChild(this.colourChamber);
                this.colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 100, 620, 0.4);
                this.addChild(this.colourChamber);
            }

            // Placing the new colourChamber HUDItem
            this.colourChamber.x = 100;
            this.colourChamber.y = 620;
        }

        private GetActiveColour():number{
            let Red = managers.Game.controlManager.KeyA;
            let Blue = managers.Game.controlManager.KeyS;
            let Yellow = managers.Game.controlManager.KeyD;

            if((Red && Blue && Yellow)||(!Red && !Blue && !Yellow)) return -1;  //If All or None of the Keys are Pressed
            else if (Blue && Yellow) return 3;  // Green
            else if (Red && Blue) return 4;     // Purple
            else if (Red && Yellow) return 5;   // Orange
            else if (Red) return 0;
            else if (Blue) return 1;
            else if (Yellow) return 2; 
        }

        private BombExplode(colour:string):void{
            let filtered_aliens = this.aliens.filter(a => a.colour == colour)
            filtered_aliens.forEach(a => a.isDead = true);
        }
    }
}
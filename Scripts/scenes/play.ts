module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player:objects.Player;
        private playerShots: objects.Projectile[];
        private aliens:objects.Alien[];
        private colourChamber: objects.GameObject;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            console.log("Play scene start");

            // Inintialize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.playerShots = new Array<objects.Projectile>();
            objects.Game.KeyA = false;
            objects.Game.KeyS = false;
            objects.Game.KeyD = false;

            // Spawning Aliens
            this.aliens = new Array<objects.Alien>();
            
            // Temporarily Spawning 1 of each colour
            for(let i = 0; i < 6; i++){
                this.aliens[i] = new objects.Alien(this.assetManager, i);
            }

            // Initializing ColourChamber
            this.colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 0.4);
            this.colourChamber.x = 100;
            this.colourChamber.y = 620;

            // Detecting Keyboard Key Presses
            window.addEventListener("keydown", this.KeyPressHandler);
            window.addEventListener("keyup", this.KeyPressHandler);

            // Detecting Mouse Click
            this.on("click", this.FireBullet);
            this.Main();
        }

        public Update():void {
            this.UpdateColourChamber();
            this.background.Update();
            this.player.Update();

            // Player Bullet Logic
            // On-Screen Bullets
            if(this.playerShots.length > 0){
                this.playerShots.forEach(b => {
                    if(!b.isOffScreen) {b.Update();}
                    else {
                        this.removeChild(b);
                    }
                });
                console.log("Bullets Left:" + this.playerShots.length);
                this.playerShots.forEach(bullet => {
                    this.aliens.forEach(alien => {
                        if( alien.CheckHitbox(bullet.x, bullet.y) && (bullet.colour == alien.colour)){
                            console.log("ALIEN KILLED!!!");
                            bullet.isOffScreen = true;
                            alien.isDead = true;
                            this.removeChild(bullet);
                            this.removeChild(alien);
                        }
                })});
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

            this.aliens.forEach(a => a.Update());

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

            // Breaking down "Bullet Hit" logic
            /*
                1. Check bullet x, y
                2. Check alien x, y
                3. If bullet x, y matches alien x,y "range"
                    a. alien & bullet destroyed
            */

            
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.player);
            this.addChild(this.colourChamber);
            this.aliens.forEach(a => this.addChild(a));
            // this.addChild(this.enemy);
            // this.enemies.forEach(e => {
            //     this.addChild(e);
            // })
        }

        // Private Methods

        private KeyPressHandler(evt:KeyboardEvent):void{
            // console.log("Key Pressed! - " + evt.keyCode + "[" + evt.type + "]");
            // A = 65, S = 83, D = 68
            switch(evt.keyCode){
                case 65:
                    if (evt.type == "keydown") objects.Game.KeyA = true;
                    else objects.Game.KeyA = false;
                    break;
                case 83:
                    if (evt.type == "keydown") objects.Game.KeyS = true;
                    else objects.Game.KeyS = false;
                    break;
                case 68:
                    if (evt.type == "keydown") objects.Game.KeyD = true;
                    else objects.Game.KeyD = false;
                    break;
            }
        }

        private FireBullet():void{
            var BulletColourIndex = this.GetActiveColour();
            if(BulletColourIndex != -1){
                var newBullet = new objects.Projectile(this.assetManager, BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
            }
        }

        private UpdateColourChamber():void{
            var CurrentColour = this.GetActiveColour();
            if(CurrentColour != -1){
                this.removeChild(this.colourChamber);
                this.colourChamber = new objects.HUDItem(this.assetManager, "chamber"+ objects.ColourPalette[CurrentColour], 0.4);
                this.addChild(this.colourChamber);
            }
            else{
                this.removeChild(this.colourChamber);
                this.colourChamber = new objects.HUDItem(this.assetManager, "chamberEMPTY", 0.4);
                this.addChild(this.colourChamber);
            }
            this.colourChamber.x = 100;
            this.colourChamber.y = 620;
        }

        private GetActiveColour():number{
            let Red = objects.Game.KeyA;
            let Blue = objects.Game.KeyS;
            let Yellow = objects.Game.KeyD;

            if((Red && Blue && Yellow)||(!Red && !Blue && !Yellow)) return -1;  //If All or None of the Keys are Pressed
            else if (Blue && Yellow) return 3;  // Green
            else if (Red && Blue) return 4;     // Purple
            else if (Red && Yellow) return 5;   // Orange
            else if (Red) return 0;
            else if (Blue) return 1;
            else if (Yellow) return 2; 
        }
    }
}
module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player:objects.Player;
        private playerShots: objects.Projectile[];
        // private enemy:objects.Enemy;
        // private enemies:objects.Enemy[];
        // private enemyNum:number;

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
        }

        public Update():void {
            this.background.Update();
            this.player.Update();

            // Player Bullet Logic
            if(this.playerShots.length > 0){
                this.playerShots.forEach(b => {
                    if(!b.isOffScreen) {b.Update();}
                    else {this.removeChild(b);}
                });
                console.log("Bullets Left:" + this.playerShots.length);
            }
            if(this.playerShots.length > 0){
                this.playerShots = this.playerShots.filter((b) => (b.isOffScreen == false));
            }

            // this.enemy.Update();
            // this.enemies.forEach(e => {
            //     e.Update();
            // })
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.player);
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
            var BulletColourIndex = this.GetBulletColour();
            if(BulletColourIndex != -1){
                var newBullet = new objects.Projectile(this.assetManager, BulletColourIndex, this.player);
                this.playerShots.push(newBullet);
                this.addChild(newBullet);
            }
        }

        private GetBulletColour():number{
            let Red = objects.Game.KeyA;
            let Blue = objects.Game.KeyS;
            let Yellow = objects.Game.KeyD;
            let Green = !Red && Blue && Yellow;
            let Purple = Red && Blue && !Yellow;
            let Orange = Red && !Blue && Yellow;

            if(Green) {return 3;}
            else if(Purple) {return 4;}
            else if(Orange) {return 5;}
            else if(Red) {return 0;}
            else if(Blue) {return 1;}
            else if(Yellow) {return 2;}
            else {return -1;}
        }
    }
}
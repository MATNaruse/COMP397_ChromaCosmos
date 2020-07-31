module objects {
    export class Player extends objects.GameObject {
        // Variables
        public Health:number;
        public isDead:boolean = false;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.Health = 5;
            this.Start();
        }

        public Start():void {
            this.x = managers.Game.canvasW / 2;
            this.y = 600;
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {}

        public Move():void {
            // I need a reference to the "STAGE" createjs object to get mouse position
            this.x = managers.Game.stage.mouseX;
            // This will eventually be replaced with keyboard input
            // Maybe xbox controller....maybe...
        }
        public CheckBound():void {
            // Right boundary
            if(this.x >= managers.Game.canvasW - this.halfW)
            {
                // I have collided with the right boundary
                this.x = managers.Game.canvasW - this.halfW;
            }
            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }
        }

        public TakeDamage(dmg:number = 1){
            createjs.Sound.play("playerHit1").setVolume(3);
            if(this.Health > 1) {
                this.Health -= dmg;
                console.log("PLAYER HIT - " + this.Health);
            }
            else {
                this.isDead = true;
                managers.Game.PlayerLose = true;
            }
        }
    }
}
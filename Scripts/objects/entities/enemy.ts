module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public ScoreValue:number = 100;
        // Constructor
        constructor(assetManager:createjs.LoadQueue, spriteName:string = "enemy") {
            super(assetManager, spriteName);
            this.Start();
        }
        // Methods
        public Start():void {
            this.Reset();
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {
            // this.x = Math.floor(Math.random() * (this.x - 20)) + 5;
            this.y = Math.floor(Math.random() * -(managers.Game.canvasH - 100)) - 50;
            // this.y = -50;
        }
        public Move():void {
            this.y += 5;
        }
        public CheckBound():void {
            if(this.y >= managers.Game.canvasH + this.halfH + 25) {
                this.Reset();
            }
        }
    }
}
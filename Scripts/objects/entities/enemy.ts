module objects {
    export class Enemy extends objects.GameObject {
        // Variables
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
            this.x = Math.floor(Math.random() * (objects.Game.canvasW - 100)) + 50;
            this.y = Math.floor(Math.random() * -(objects.Game.canvasH - 100)) - 50;
        }
        public Move():void {
            this.y += 5;
        }
        public CheckBound():void {
            if(this.y >= objects.Game.canvasH + this.halfH + 25) {
                this.Reset();
            }
        }
    }
}
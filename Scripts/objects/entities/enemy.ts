module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public ScoreValue:number = 100;
        // Constructor
        constructor(spriteName:string = "enemy") {
            super(spriteName);
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
            // DEBUG: Disabled random Y value for testing
            // this.y = Math.floor(Math.random() * -(managers.Game.canvasH - 100)) - 50;
            this.y = -100;
        }
        public Move():void {
            this.y += 5;
        }
        public CheckBound():void {
            if(this.y >= managers.Game.canvasH + this.halfH + 25) {
                this.Reset();
            }
            if(this.x >= managers.Game.canvasW - this.halfW) this.x = managers.Game.canvasW - this.halfW;
            if(this.x <= this.halfW)  this.x = this.halfW;
        }
    }
}
module objects{
    export abstract class Alien extends objects.GameObject{
        // Variables
        public colour:string;
        public isDead:boolean;
        public attackedPlayer:boolean;
        public startX: number;
        public CollisionActive: boolean;
        public ScoreValue:number = 100;
        protected increment: number = 2;
        protected ySpeed:number = 3;

        // Constructor
        constructor(colourIdx:number, startX:number = 0, startY:number = 0){
            super("alien" + objects.ColourPalette[colourIdx]);
            this.ImgScale = 1;
            this.x = startX;
            this.y = startY;
            this.scaleX = this.scaleY = this.ImgScale;
            this.colour = objects.ColourPalette[colourIdx];
            this.isDead = false;
            this.attackedPlayer = false;
            this.startX = this.x;
        }

        // Methods
        public Start():void {
            this.Reset();
        }
        
        public Update():void {
            this.Move();
            this.CheckBound();
        } 

        public Reset(){
            // DEBUG: Disabled random Y value for testing
            this.y = Math.floor(Math.random() * -(managers.Game.canvasH - 100)) - 50;
            // this.y = -100;
            this.attackedPlayer = false;
        }

        public CheckBound():void {
            if(this.y >= managers.Game.canvasH + this.halfH + 25)  this.Reset();
            if(this.x >= managers.Game.canvasW - this.halfW) this.x = managers.Game.canvasW - this.halfW;
            if(this.x <= this.halfW)  this.x = this.halfW;
        }

    }
}
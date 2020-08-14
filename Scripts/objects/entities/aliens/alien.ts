module objects{
    export class Alien extends objects.Enemy{
        public colour:string;
        public isDead:boolean;
        public attackedPlayer:boolean;
        public startX;
        public LeftBumpAlien: objects.Alien;
        public RightBumpAlien: objects.Alien;

        
        constructor(assetManager:createjs.LoadQueue, colourIdx:number){
            super(assetManager, "alien" + objects.ColourPalette[colourIdx]);
            this.ImgScale = 1;
            this.scaleX = this.scaleY = this.ImgScale;
            this.colour = objects.ColourPalette[colourIdx];
            this.isDead = false;
            this.attackedPlayer = false;
            this.startX = this.x;
            this.LeftBumpAlien = null;
            this.RightBumpAlien = null;
        }

        public Reset(){
            super.Reset();
            this.attackedPlayer = false;
            this.LeftBumpAlien = null;
            this.RightBumpAlien = null;
        }

        public CheckBound():void{
            super.CheckBound();
            if(this.x >= managers.Game.canvasW - this.halfW) this.x = managers.Game.canvasW - this.halfW;
            if(this.x <= this.halfW)  this.x = this.halfW;
        }
    }
}
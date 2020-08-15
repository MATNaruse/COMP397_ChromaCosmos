module objects{
    export class Alien extends objects.Enemy{
        public colour:string;
        public isDead:boolean;
        public attackedPlayer:boolean;
        public startX: number;
        protected ySpeed:number = 3;
        protected increment: number = 2;
        public CollisionActive: boolean;
        
        constructor(assetManager:createjs.LoadQueue, colourIdx:number){
            super(assetManager, "alien" + objects.ColourPalette[colourIdx]);
            this.ImgScale = 1;
            this.scaleX = this.scaleY = this.ImgScale;
            this.colour = objects.ColourPalette[colourIdx];
            this.isDead = false;
            this.attackedPlayer = false;
            this.startX = this.x;
        }

        public Reset(){
            super.Reset();
            this.attackedPlayer = false;
        }

    }
}
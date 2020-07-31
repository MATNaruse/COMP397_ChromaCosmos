module objects{
    export class Alien extends objects.Enemy{
        public colour:string;
        public isDead:boolean;
        public attackedPlayer:boolean;
        constructor(assetManager:createjs.LoadQueue, colourIdx:number){
            super(assetManager, "alien" + objects.ColourPalette[colourIdx]);
            this.ImgScale = 0.15;
            this.scaleX = this.scaleY = this.ImgScale;
            this.colour = objects.ColourPalette[colourIdx];
            this.isDead = false;
            this.attackedPlayer = false;
        }

        public Reset(){
            super.Reset();
            this.attackedPlayer = false;
        }

        public Move():void {
            this.y += 5;
        }
    }
}
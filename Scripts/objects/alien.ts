module objects{
    export class Alien extends objects.Enemy{
        public colour:string;
        public isDead:boolean;
        constructor(assetManager:createjs.LoadQueue, colourIdx:objects.ColourPalette){
            super(assetManager, "alien" + ColourPalette[colourIdx]);
            this.scaleX = this.scaleY = 0.25;
            this.colour = ColourPalette[colourIdx];
            this.isDead = false;
        }

        public CheckHitbox(pointX:number, pointY:number):boolean{
            var inHitbox = false;

            if(pointX < (this.x + (this.halfW * 0.25)) && pointX > (this.x -(this.halfW * 0.25))){   //If its within the object's range on X axis
                if(pointY < (this.y + (this.halfH * 0.25)) && pointY > (this.y - (this.halfH * 0.25))){
                    console.log("HIT!!!")
                    return true
                }
            }
            return inHitbox;
        }
    }
}
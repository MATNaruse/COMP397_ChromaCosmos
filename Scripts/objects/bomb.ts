module objects{
    export class Bomb extends objects.Enemy{
        public colour: string;
        public isDead: boolean;
        constructor(assetManager: createjs.LoadQueue, colourIdx:objects.ColourPalette){
            super(assetManager, "bomb" + ColourPalette[colourIdx]);
            this.colour = ColourPalette[colourIdx];
            this.isDead = false;
        }

        // public CheckHitbox(pointX:number, pointY:number):boolean{
        //     var inHitbox = false;
            
        //     // Reimplemented to adjust the Bitmap Scaling
        //     // TODO: Compensate for bitmap Scaling in gameobject.ts
        //     if(pointX < (this.x + (this.halfW * 0.25)) && pointX > (this.x -(this.halfW * 0.25))){   //If its within the object's range on X axis
        //         if(pointY < (this.y + (this.halfH * 0.25)) && pointY > (this.y - (this.halfH * 0.25))){
        //             console.log("HIT!!!")
        //             return true
        //         }
        //     }
        //     return inHitbox;
        // }
    }
}
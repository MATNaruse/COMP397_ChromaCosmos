module objects{
    export class Bomb extends objects.Enemy{
        public colour: string;
        public isDead: boolean;
        constructor(assetManager: createjs.LoadQueue, colourIdx:objects.ColourPalette){
            super(assetManager, "bomb" + ColourPalette[colourIdx]);
            this.colour = ColourPalette[colourIdx];
            this.isDead = false;
        }
    }
}
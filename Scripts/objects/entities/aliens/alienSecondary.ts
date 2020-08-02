module objects{
    export class SecondaryAlien extends objects.Alien{
        // Variables

        // Constructor
        constructor(assetManager: createjs.LoadQueue, colourIdx:number){
            super(assetManager, colourIdx);
            this.ScoreValue = 200;
        }
        // Methods

        public Move(){
            this.y += 3;
            // TODO: Add Directed Movement
        }
    }
}
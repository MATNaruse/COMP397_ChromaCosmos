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
            this.y += 6;
            let Player = managers.Game.PlayerEntity;
            let Increment = 5;
            if(Player.x > this.x) this.x += Increment;
            else if(Player.x < this.x) this.x -= Increment;
        }
    }
}
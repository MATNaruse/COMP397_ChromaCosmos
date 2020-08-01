module objects{
    export class PrimaryAlien extends objects.Alien{
        // Variables
        private leftTrue: boolean;
        private range:number = 20;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, colourIdx:number){
            super(assetManager, colourIdx);
            this.leftTrue = true;
        }
        // Methods

        public Move(){
            this.y += 3;
            // console.log("X:" + this.x + "| startX:" + this.startX);
            var increment = 2;
            
            if(this.leftTrue) this.x -= increment;
            else this.x += increment;

            if(this.x >= (this.startX + this.range)) this.leftTrue = true;
            else if(this.x <= (this.startX - this.range)) this.leftTrue = false;
        }
    }
}
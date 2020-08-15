module objects{
    export class PrimaryAlien extends objects.Alien{
        // Variables
        private leftTrue: boolean;
        private range:number = 50;
        private increment: number = 2;
        private ySpeed:number = 3;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, colourIdx:number){
            super(assetManager, colourIdx);
            this.leftTrue = true;
            switch(colourIdx){
                case(0):
                    // Red
                    this.range = 0;
                    this.increment = 0;
                    this.ySpeed = 7;
                    break;
                case(1):
                    // Blue
                    this.range = 70;
                    this.increment = 3;
                    this.ySpeed = 4;
                    break;
                case(2):
                    // Yellow
                    this.range = 25;
                    this.increment = 2;
                    this.ySpeed = 2;
                    break;
            }
        }
        // Methods

        public Move(){
            this.y += this.ySpeed;
            
            if(this.leftTrue) this.x -= this.increment;
            else this.x += this.increment;

            if(this.x >= (this.startX + this.range)) this.leftTrue = true;
            else if(this.x <= (this.startX - this.range)) this.leftTrue = false;
        }
    }
}
module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        private speedY:number = 2;
        private second:boolean;
        // Constructor
        constructor(assetManager:createjs.LoadQueue, second: boolean = false)
        {
            super(assetManager.getResult("background"));
            console.log("Creating the background");
            this.scaleX = 1.25;
            this.scaleY = .72;
            this.second = second;
            this.Start();
        }
        // Functions
        public Start():void {
            this.Reset();
        }
        public Update():void {
            // this.Move(); // Movement Temporarily Disabled
            this.CheckBound();
        }
        public Reset():void {
            // Reset my background y position.
            // console.log("RESET!");
            if(this.second) {
                console.log("RESET 2nd BG");
                this.y = -720;
            }
            else {
                console.log("RESET 1st BG");
                this.y = 0;
            }
        }
        public Move():void{
            // console.log("MOVING BG");
            this.y += this.speedY;
        }

        // Collision Detection
        public CheckBound():void {
            if(this.second){
                if(this.y >= 0) {
                    this.Reset();
                }
            }
            else{
                if(this.y >= 720){
                    this.Reset();
                }
            }

        }
    }
}
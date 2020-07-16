module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // Variables
        protected speedX: number;
        protected speedY: number;

        // Useful for collision detection
        public width: number;
        public height: number;
        public halfW: number;  
        public halfH: number;

        // Constructor
        constructor(assetManager:createjs.LoadQueue, imageString:string) {
            super(assetManager.getResult(imageString));

            this.name = imageString;

            this.Init();
        }

        private Init():void {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            // Registration points
            this.regX = this.halfW;
            this.regY = this.halfH;
        }

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}


        // Breaking down "Bullet Hit" logic
        /*
            1. Check bullet x, y
            2. Check alien x, y
            3. If bullet x, y matches alien x,y "range"
                a. alien & bullet destroyed
        */
        public CheckHitbox(pointX:number, pointY:number):boolean{
            if(pointX < (this.x + this.halfW) && pointX > (this.x - this.halfW)){   //If its within the object's range on X axis
                if(pointY < (this.y + this.halfH) && pointY > (this.y - this.halfH)){   //If its within the object's range on Y axis
                    console.log("HIT!!!")
                    return true
                }
            }
            return false;
        }
    }
}
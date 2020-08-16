module objects{
    export class StaticDisplayItem extends createjs.Bitmap{
        // Variables
        protected speedX: number;
        protected speedY: number;
        public ImgScale: number;

        // Useful for collision detection
        public width: number;
        public height: number;
        public halfW: number;  
        public halfH: number;

        // Constructor
        constructor(fileName:string, x:number, y:number, scaleX:number = 1, scaleY:number = 1){
            super(managers.Game.assetManager.getResult(fileName));
            this.x = x;
            this.y = y;
            
            if(scaleX != 1 || scaleY != 1){
                this.scaleX = scaleX;
                this.scaleY = scaleY;
            }
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


        // Get Edges - for Collision Detection
        public GetLeftEdge():number{ return this.x - this.halfW; }
        public GetRightEdge():number{ return this.x + this.halfW; }
        public GetTopEdge():number{ return this.y - this.halfH; }
        public GetBottomEdge():number{ return this.y + this.halfH; }

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
        
    }
}
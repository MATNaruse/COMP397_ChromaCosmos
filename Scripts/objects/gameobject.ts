module objects {
    export abstract class GameObject extends createjs.Sprite {
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
        constructor(imageString:string) {
            // super(managers.Game.assetManager.getResult(imageString));
            super(managers.Game.textureAtlas, imageString);

            this.name = imageString;
            this.ImgScale = 1;
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
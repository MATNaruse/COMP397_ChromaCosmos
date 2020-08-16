module objects {
    export class Button extends createjs.Bitmap {
        // Variables
        public midVertical:number;
        public midHorizontal:number;
        // Constructor
        constructor(imageString:string, x:number = 0, y:number = 0, verticalCenter: boolean = false) {
            super(imageString);

            // Default position
            this.x = x;
            this.y = y;

            this.midVertical = this.getBounds().height / 2;
            this.midHorizontal = this.getBounds().width / 2;

            if(verticalCenter) this.y -= this.midVertical;

            // Set up event handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }
        // Methods
        // Event Handlers
        private mouseOver():void {
            this.alpha = 0.7;
        }

        private mouseOut():void {
            this.alpha = 1.0;
        }
    }
}
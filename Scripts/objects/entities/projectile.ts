module objects{
    export class Projectile extends objects.GameObject{
        public isOffScreen:boolean;
        public colour:string;

        constructor(colour: objects.ColourPalette, shooter:objects.GameObject){
            super("bullet" + ColourPalette[colour]);
            this.colour = ColourPalette[colour];
            this.x = shooter.x;
            this.y = shooter.y - shooter.halfH;
            this.scaleX = 0.25;
            this.scaleY = 0.25;

            this.isOffScreen = false;

            this.Start()
        }

        public Update():void{
            this.Move()
            this.CheckBound();
        }

        public Move():void{
            this.y -= 10;
        }

        public CheckBound():void{
            if (this.y < -10){
                // Currently tracking if it's off screen here to be cleaned up on PlayScene
                this.isOffScreen = true;
            }
        }
    }
}
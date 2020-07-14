module objects{
    export enum BulletColour{
        RED = 0,
        BLUE = 1,
        YELLOW = 2,
        GREEN = 3,
        PURPLE = 4,
        ORANGE = 5
    }

    export class Projectile extends objects.GameObject{
        public isOffScreen:boolean;

        constructor(assetManager:createjs.LoadQueue, colour: objects.BulletColour, shooter:objects.GameObject){
            super(assetManager, BulletColour[colour]);
            this.x = shooter.x;
            this.y = shooter.y;
            this.scaleX = 0.25;
            this.scaleY = 0.25;

            this.isOffScreen = false;

            this.Start()
        }

        public Update():void{
            this.Move()
        }

        public Move():void{
            this.y -= 10;
        }

        public CheckBound():void{
            if (this.y < -10){
                this.isOffScreen = true;
                // Currently tracking if it's off screen here to be cleaned up on PlayScene
            }
        }
    }
}
module objects{
    export class SecondaryAlien extends objects.Alien{
        // Variables
        public LeftAlien: objects.SecondaryAlien;
        public RightAlien: objects.SecondaryAlien;
        public CollisionActive: boolean;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, colourIdx:number, startX:number = 0, startY:number = 0){
            super(assetManager, colourIdx, startX, startY);
            this.ScoreValue = 200;
            this.LeftAlien = null;
            this.RightAlien = null;
            this.CollisionActive = false;

            // TODO: Play around with playable speeds
            switch(colourIdx){
                case(3):
                    // Green
                    this.ySpeed = 6;
                    break;
                case(4):
                    // Purple
                    this.ySpeed = 8;
                    break;
                case(5):
                    // Orange
                    this.ySpeed = 10;
                    break;
            }
        }
        // Methods
        public Update(){
            super.Update();
            if(!this.CollisionActive && this.y - this.height> 0) this.CollisionActive = true;
            this.LeftAlien = null;
            this.RightAlien = null;
        }

        public Reset(){
            super.Reset();
            this.CollisionActive = false;
            this.LeftAlien = null;
            this.RightAlien = null;
        }

        public Move(){
            this.y += this.ySpeed;
            let Player = managers.Game.PlayerEntity;

            // Moving Right towards Player
            if(Player.x >= this.x) {
                if(this.IsChained() && this.RightAlien != null){
                    this.x = this.RightAlien.GetLeftEdge() - this.halfW;
                }
                else{this.x += this.increment; }
                
            }

            // Moving Left towards Player
            else if(Player.x <= this.x){
                if(this.IsChained() && this.LeftAlien != null){
                    this.x = this.LeftAlien.GetRightEdge() + this.halfW;
                }
                else {this.x -= this.increment;}

            } 
        }

        public IsChained():boolean{ return (this.LeftAlien != null || this.RightAlien != null); }

        public AlienLinkCheck(alien: objects.SecondaryAlien): boolean{
            return alien != this.LeftAlien && alien != this.RightAlien;
        }
    }
}
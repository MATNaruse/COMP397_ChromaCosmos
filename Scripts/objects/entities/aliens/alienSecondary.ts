module objects{
    export class SecondaryAlien extends objects.Alien{
        // Variables
        public LeftAlien: objects.SecondaryAlien;
        public RightAlien: objects.SecondaryAlien;
        public CollisionActive: boolean;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, colourIdx:number){
            super(assetManager, colourIdx);
            this.ScoreValue = 200;
            this.LeftAlien = null;
            this.RightAlien = null;
            this.CollisionActive = false;
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
            this.y += 8;
            let Player = managers.Game.PlayerEntity;
            let Increment = 1;

            // Moving Right towards Player
            if(Player.x >= this.x) {
                if(this.IsChained() && this.RightAlien != null){
                    this.x = this.RightAlien.GetLeftEdge() - this.halfW;
                }
                else{this.x += Increment; }
                
            }

            // Moving Left towards Player
            else if(Player.x <= this.x){
                if(this.IsChained() && this.LeftAlien != null){
                    this.x = this.LeftAlien.GetRightEdge() + this.halfW;
                }
                else {this.x -= Increment;}

            } 
        }

        public IsChained():boolean{ return (this.LeftAlien != null || this.RightAlien != null); }

        public GetLeftMostAlien(): objects.Alien{
            if(this.LeftAlien != null) {return this.LeftAlien.GetLeftMostAlien()}
            else { return this; }
        }

        public GetRightMostAlien(): objects.Alien{
            if(this.RightAlien != null) {return this.RightAlien.GetRightMostAlien()}
            else { return this; }
        }

        public GetLeftChainXOffset(): number{
            if(this.LeftAlien != null) { return this.width + this.LeftAlien.GetLeftChainXOffset();}
            else { return this.halfW;}
        }

        public GetRightChainXOffset(): number{
            if(this.RightAlien != null) { return this.width + this.RightAlien.GetRightChainXOffset();}
            else { return this.halfW;}
        }

        public AlienLinkCheck(alien: objects.SecondaryAlien): boolean{
            return alien != this.LeftAlien && alien != this.RightAlien;
        }

        public DEBUGRightChain(): string{
            if(this.RightAlien != null) {return this.name + ">" + this.RightAlien.DEBUGRightChain();}
            // else{ return this.name;}
        }
        public DEBUGLeftChain(): string{
            if(this.LeftAlien != null) {return this.LeftAlien.DEBUGLeftChain() + "<" + this.name;}
            // else{ return this.name;}
        }
    }
}
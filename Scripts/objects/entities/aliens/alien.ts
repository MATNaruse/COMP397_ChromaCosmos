module objects{
    export class Alien extends objects.Enemy{
        public colour:string;
        public isDead:boolean;
        public attackedPlayer:boolean;
        public startX: number;
        // public LeftAlien: objects.Alien;
        // public RightAlien: objects.Alien;
        public CollisionActive: boolean;
        
        constructor(assetManager:createjs.LoadQueue, colourIdx:number){
            super(assetManager, "alien" + objects.ColourPalette[colourIdx]);
            this.ImgScale = 1;
            this.scaleX = this.scaleY = this.ImgScale;
            this.colour = objects.ColourPalette[colourIdx];
            this.isDead = false;
            this.attackedPlayer = false;
            this.startX = this.x;
            // this.LeftAlien = null;
            // this.RightAlien = null;
            // this.CollisionActive = false;
        }

        public Reset(){
            super.Reset();
            this.attackedPlayer = false;
            // this.CollisionActive = false;
            // this.LeftAlien = null;
            // this.RightAlien = null;
        }

        // public Update(){
        //     super.Update();
        //     // if(!this.CollisionActive && this.y - this.height> 0) this.CollisionActive = true;
        // }

        // public IsChained():boolean{ return (this.LeftAlien != null || this.RightAlien != null); }

        // public GetLeftMostAlien(): objects.Alien{
        //     if(this.LeftAlien != null) {return this.LeftAlien.GetLeftMostAlien()}
        //     else { return this; }
        // }

        // public GetRightMostAlien(): objects.Alien{
        //     if(this.RightAlien != null) {return this.RightAlien.GetRightMostAlien()}
        //     else { return this; }
        // }

        // public GetLeftChainXOffset(): number{
        //     if(this.LeftAlien != null) { return this.width + this.LeftAlien.GetLeftChainXOffset();}
        //     else { return this.halfW;}
        // }

        // public GetRightChainXOffset(): number{
        //     if(this.RightAlien != null) { return this.width + this.RightAlien.GetRightChainXOffset();}
        //     else { return this.halfW;}
        // }
    }
}
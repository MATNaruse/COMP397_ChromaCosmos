module objects{
    export class HUDItem extends objects.GameObject{
        constructor(assetManager:createjs.LoadQueue, fileName:string, x:number, y:number, scale:number = 1, scaleX:number = 1, scaleY:number = 1){
            super(assetManager, fileName);
            this.x = x;
            this.y = y;
            
            // TODO: Simplify to scaleX/scaleY, no general scale
            if(scale != 1) this.scaleX = this.scaleY = scale;
            if(scaleX != 1 || scaleY != 1){
                this.scaleX = scaleX;
                this.scaleY = scaleY;
            }
        }
    }
}
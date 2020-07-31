module objects{
    export class HUDItem extends objects.GameObject{
        constructor(assetManager:createjs.LoadQueue, fileName:string, x:number, y:number, scale:number = 1){
            super(assetManager, fileName);
            this.scaleX = this.scaleY = scale;
            this.x = x;
            this.y = y;
        }
    }
}
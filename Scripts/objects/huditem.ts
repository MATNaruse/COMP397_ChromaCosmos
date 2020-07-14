module objects{
    export class HUDItem extends objects.GameObject{
        constructor(assetManager:createjs.LoadQueue, fileName:string, scale:number = 1){
            super(assetManager, fileName);
            this.scaleX = this.scaleY = scale;
        }
    }
}
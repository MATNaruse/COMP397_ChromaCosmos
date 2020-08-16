module objects{
    export class HUDItem extends objects.GameObject{
        constructor(fileName:string, x:number, y:number, scaleX:number = 1, scaleY:number = 1){
            super(fileName);
            this.x = x;
            this.y = y;
            
            if(scaleX != 1 || scaleY != 1){
                this.scaleX = scaleX;
                this.scaleY = scaleY;
            }
        }
    }
}
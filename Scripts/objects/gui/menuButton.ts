module objects{
    export class MenuButton extends createjs.Shape{
        private Label:objects.Label;
        private boxW:number;
        private boxH:number;

        constructor(labelString:string, posX:number = 0, posY:number = 0, isCenter:boolean = false){
            super();
            this.Label = new createjs.Text(labelString, "30px Consolas", "#FFFFFF");

            this.boxW = this.Label.getMeasuredWidth() +50;
            this.boxH = this.Label.getMeasuredHeight() + 40;
            this.Label.regX = this.Label.getMeasuredWidth() * 0.5;
            this.Label.regY = this.Label.getMeasuredHeight() * 0.8;
            this.Label.x = this.boxW * 0.5;
            this.Label.y = this.boxH * 0.5;
            this.graphics.beginFill("#0F0E0E");
            this.graphics.drawRect(0, 0, this.boxW, this.boxH);

            this.x = posX;
            this.y = posY;
            this.Label.x = posX + (this.boxW * 0.5);
            this.Label.y = posY + (this.boxH * 0.5);

            if(isCenter){
                this.x -= this.boxW / 2;
                this.Label.x -= this.boxW / 2; 
            }

            this.on("added", this.renderText); // From https://www.createjs.com/docs/easeljs/classes/Shape.html#event_added
            this.on("mouseover", this.mouseOver,this);
            this.on("mouseout", this.mouseOut, this);
        }

        private renderText(){
            this.parent.addChild(this.Label);
        }

        private mouseOver():void {
            this.alpha = 0.7;
        }

        private mouseOut():void {
            this.alpha = 1.0;
        }
    }

}
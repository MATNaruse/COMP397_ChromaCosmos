module scenes{
    export class Cutscene extends objects.Scene{
        // Variables
        protected MessageText: string[];
        protected MainLabel: objects.Label;
        protected NextLabel: objects.Label;
        protected HUD_NextIcon: objects.Button;
        protected currentMessage: number;

        // Obj Co-ords
        private main_x: number = managers.Game.canvasW/2;
        private main_y: number = 240;
        private next_x: number = managers.Game.canvasW/2;
        private next_y: number = this.main_y + 50;
        private arrow_x: number = this.next_x + 100;
        private arrow_y: number = this.next_y;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start(){
            // Set MessageText before calling Start in ChildClass
            this.MessageText = managers.CSManager.GetCSMessages();
            this.currentMessage = 0;
            this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", "#FFFFFF", this.main_x, this.main_y, true);
            this.NextLabel = new objects.Label("Click to Continue", "16px", "Consolas", "#FFFFFF", this.next_x, this.next_y, true);
            this.HUD_NextIcon = new objects.Button(managers.Game.assetManager, "hud_nextarrow", this.arrow_x, this.arrow_y, true);
            this.Main();
        }

        public Main(){
            this.addChild(this.MainLabel);
            this.addChild(this.NextLabel);
            this.addChild(this.HUD_NextIcon);
            this.HUD_NextIcon.on("click", () => this.MoveToNextMessage());
        }

        public Update(){}

        // Protected Methods
        protected MoveToNextMessage():void{
            console.log("NEXT CLICKED...")
            if(this.currentMessage + 1 != this.MessageText.length){
                this.currentMessage += 1;
                console.log("\tCurrentMsg:"+this.currentMessage);
                this.removeChild(this.MainLabel);
                this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", "#FFFFFF", this.main_x, this.main_y, true);
                this.addChild(this.MainLabel);
            }
            else {
                managers.CSManager.GoToNextScene();
                console.log("\t...NEXT SCENE!");
            }
        } 
    }
}
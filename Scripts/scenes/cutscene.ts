module scenes{
    export class Cutscene extends objects.Scene{
        // Variables
        private MessageText: string[];
        private MainLabel: objects.Label;
        private NextLabel: objects.Label;
        private HUD_NextIcon: objects.Button;
        private currentMessage: number;
        private background: objects.Background;
        private HUD_radio: objects.HUDItem;
        private HUD_static: objects.HUDItem;
        private SFX_static: createjs.AbstractSoundInstance;

        // Obj Co-ords - Everything "linked" to main_x/main_y
        private main_x: number = managers.Game.canvasW/2;
        private main_y: number = 360;
        private next_x: number = managers.Game.canvasW/2 + 20;
        private next_y: number = this.main_y + 50;
        private arrow_x: number = this.next_x + 80;
        private arrow_y: number = this.next_y;
        private radio_x: number = this.main_x + 300;
        private radio_y: number = this.main_y + 100;
        private static_x: number = this.main_x;
        private static_y: number = this.main_y;

        // Colours
        private main_colour: string = "#db524b"
        private next_colour: string = "#0026FF";

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start(){
            this.background = new objects.Background(managers.Game.assetManager);
            this.MessageText = managers.CSManager.GetCSMessages();
            this.currentMessage = 0;
            this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", this.main_colour, this.main_x, this.main_y, true);
            this.NextLabel = new objects.Label("Click to Continue", "16px", "Consolas", this.next_colour, this.next_x, this.next_y, true);
            this.HUD_NextIcon = new objects.Button(managers.Game.assetManager, "hud_nextarrow", this.arrow_x, this.arrow_y, true);
            this.HUD_radio = new objects.HUDItem(managers.Game.assetManager, "hud_radio", this.radio_x, this.radio_y);
            this.HUD_static = new objects.HUDItem(managers.Game.assetManager, "hud_static", this.static_x, this.static_y, 2);
            this.SFX_static = createjs.Sound.play("radioStatic").setVolume(0.5);
            this.Main();
        }

        public Main(){
            this.addChild(this.background);
            this.addChild(this.HUD_radio);
            this.addChild(this.HUD_static);
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
                this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", this.main_colour, this.main_x, this.main_y, true);
                this.addChild(this.MainLabel);
            }
            else {
                if(this.SFX_static != null) this.SFX_static.destroy();
                managers.CSManager.GoToNextScene();
                console.log("\t...NEXT SCENE!");
            }
        } 
    }
}
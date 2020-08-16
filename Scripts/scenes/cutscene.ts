module scenes{
    export class Cutscene extends objects.Scene{
        // TODO: Comment Code
        // Variables
        private MessageText: string[];
        private MainLabel: objects.Label;
        private NextLabel: objects.Label;
        private HUD_NextIcon: objects.Button;
        private currentMessage: number;
        private background: objects.Background;
        private HUD_holobg: objects.HUDItem;
        private HUD_cockpit: objects.HUDItem;
        private SFX_static: createjs.AbstractSoundInstance;

        // Obj Co-ords - Everything "linked" to main_x/main_y
        private main_x: number = managers.Game.canvasW/2;
        private main_y: number = 220;
        private next_x: number = managers.Game.canvasW/2 + 200;
        private next_y: number = this.main_y + 80;
        private arrow_x: number = this.next_x + 80;
        private arrow_y: number = this.next_y + 5;
        private holo_x: number = this.main_x;
        private holo_y: number = this.main_y + 80;

        // Colours
        private main_colour: string = "#0f0"
        private next_colour: string = "#0f0";

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start(){
            this.background = new objects.Background();
            this.MessageText = managers.CSManager.GetCSMessages();
            this.currentMessage = 0;
            this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", this.main_colour, this.main_x, this.main_y, false, true);
            this.NextLabel = new objects.Label("Click to Continue", "16px", "Consolas", this.next_colour, this.next_x, this.next_y, true);
            this.HUD_NextIcon = new objects.Button("hud_nextarrow", this.arrow_x, this.arrow_y, true);
            this.HUD_cockpit = new objects.HUDItem("hud_cockpit", managers.Game.canvasW/2,  managers.Game.canvasH/2);
            this.HUD_holobg = new objects.HUDItem("hud_holobg", this.holo_x, this.holo_y, 3, 1.5)
            this.SFX_static = createjs.Sound.play("radioStatic").setVolume(0.5);
            this.Main();
        }

        public Main(){
            this.addChild(this.background);
            this.addChild(this.HUD_cockpit)
            this.addChild(this.HUD_holobg);
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
                this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", this.main_colour, this.main_x, this.main_y, false, true);
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
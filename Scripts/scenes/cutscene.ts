module scenes{
    export class Cutscene extends objects.Scene{
        // Variables
        private MessageText: string[];
        private MainLabel: objects.Label;
        private NextLabel: objects.Label;
        private HUD_NextIcon: objects.Button;
        private currentMessage: number = 0;
        private background: objects.Background;
        private HUD_holobg: objects.StaticDisplayItem;
        private HUD_cockpit: objects.StaticDisplayItem;
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
        constructor() {
            super();
            this.Start();
        }
        // Methods
        public Start(){
            // Setup Background
            this.background = new objects.Background();
            
            // Get Cutscene 'Script/Messages'
            this.MessageText = managers.CSManager.GetCSMessages();

            // Creating Labels & 'HUD' Items
            this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", this.main_colour, this.main_x, this.main_y, false, true);
            this.NextLabel = new objects.Label("Click to Continue", "16px", "Consolas", this.next_colour, this.next_x, this.next_y, true);
            this.HUD_NextIcon = new objects.Button("hud_nextarrow", this.arrow_x, this.arrow_y);
            this.HUD_cockpit = new objects.StaticDisplayItem("hud_cockpit", managers.Game.canvasW/2,  managers.Game.canvasH/2);
            this.HUD_holobg = new objects.StaticDisplayItem("hud_holobg", this.holo_x, this.holo_y, 3, 1.5)

            // this.HUD_cockpit = new objects.HUDItem("hud_cockpit", managers.Game.canvasW/2,  managers.Game.canvasH/2);
            // this.HUD_holobg = new objects.HUDItem("hud_holobg", this.holo_x, this.holo_y, 3, 1.5)


            // Setting/Starting Radio Static Audio
            this.SFX_static = createjs.Sound.play("radioStatic").setVolume(0.5);

            this.Main();
        }
        
        // Methods
        
        public Main(){
            this.addChild(this.background);
            this.addChild(this.HUD_cockpit)
            this.addChild(this.HUD_holobg);
            this.addChild(this.MainLabel);
            this.addChild(this.NextLabel);
            this.addChild(this.HUD_NextIcon);
            this.HUD_NextIcon.on("click", () => this.MoveToNextMessage());
        }
        
        private MoveToNextMessage():void{
            console.log("NEXT CLICKED...")

            // If there's more messages in the 'script'..
            if(this.currentMessage + 1 != this.MessageText.length){
                // Update the Message
                this.currentMessage += 1;
                console.log("\tCurrentMsg:"+this.currentMessage);
                this.removeChild(this.MainLabel);
                this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", this.main_colour, this.main_x, this.main_y, false, true);
                this.addChild(this.MainLabel);
            }

            // ..Otherwise, move to the next scene
            else {
                if(this.SFX_static != null) this.SFX_static.destroy();
                managers.CSManager.GoToNextScene();
                console.log("\t...NEXT SCENE!");
            }
        } 
    }
}
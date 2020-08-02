module scenes {
    export class InstructionScene extends objects.Scene{
        // Variables
        private background: objects.Background;
        private instructLabels: objects.Label[];
        private returnButton: objects.MenuButton;

        private instructions:string[] = ["How to Play",
                                        "Use the Mouse to move Left and Right",
                                        "Use Left Click to Fire",
                                        "Use the A, S, and D keys on the keyboard to change Cannon Colour",
                                        "| A = Red",
                                        "| S = Blue",
                                        "| D = Yellow",
                                        "Use Multiple Keys to Mix Colours!"];

        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        // Methods
        public Start():void{
            // Initalize Objects
            this.background = new objects.Background(this.assetManager);
            this.instructLabels = Array<objects.Label>();
            this.MultiLineLabels(this.instructions, 100, 100, 50);
            this.returnButton = new objects.MenuButton("Return to Title", managers.Game.canvasW/2, 500, true);
            this.Main();
        }

        public Main():void{
            this.addChild(this.background);
            this.instructLabels.forEach(l => this.addChild(l));
            this.addChild(this.returnButton);
            this.returnButton.on("click", () => {managers.Game.currentScene = config.Scene.START;})
        }

        private MultiLineLabels(input:string[], startX:number, startY:number, spacing:number){
            // var strings = input.split("|")
            var yOffset = startY;
            var label: objects.Label = null;
            input.forEach(str =>{
                label = new objects.Label(str.replace("| ", "\t\t\t\t\t"), "32px", "Arial", "#fff", startX, yOffset);
                this.instructLabels.push(label);
                yOffset += spacing;
            })
        }
    }
}
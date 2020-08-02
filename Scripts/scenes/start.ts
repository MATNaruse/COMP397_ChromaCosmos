module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameLogo: objects.HUDItem;
        private welcomeLabel: objects.Label;
        private instructions: objects.Label;
        private startButton: objects.MenuButton;
        private instructButton: objects.MenuButton;
        private overButton: objects.MenuButton;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);
            // this.welcomeLabel = new objects.Label("Chroma Cosmos!", "60px", "Arial Black", "#FFFFFF", managers.Game.canvasW/2, 240, true);
            this.gameLogo = new objects.HUDItem(managers.Game.assetManager, "gameLogo", managers.Game.canvasW/2, 240);
            var instruct:string = "Defeat all the Aliens by matching colours!\nUse the mouse to move and Click to fire\nUse a combination of A, S, and D to match the colours"
            // this.instructions = new objects.Label(instruct, "32px", "Arial", "#fff", managers.Game.canvasW/2, 270);
            // this.instructions.x -= 300; //Temporary Manual Adjustment

            // NOTE: PreloadJS manifest id
            this.startButton = new objects.MenuButton("Start", managers.Game.canvasW/2, 380, true);
            // this.overButton = new objects.MenuButton("Skip to Game Over Screen", managers.Game.canvasW/2, 460, true);
            this.instructButton = new objects.MenuButton("Instructions", managers.Game.canvasW/2, 460, true);
            this.Main();
        }

        public Update():void {}
        
        public Main():void {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.gameLogo);
            // this.addChild(this.welcomeLabel);
            // this.addChild(this.instructions);
            this.addChild(this.startButton);
            // this.addChild(this.overButton);
            this.addChild(this.instructButton);
            this.startButton.on("click", () => {managers.Game.currentScene = config.Scene.LVL_ONE;});
            // this.overButton.on("click", () => {managers.Game.currentScene = config.Scene.OVER;});
            this.instructButton.on("click", () => {managers.Game.currentScene = config.Scene.INSTRUCT;});
        }
    }
}
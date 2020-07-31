module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private instructions: objects.Label;
        private startButton: objects.MenuButton;
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
            this.welcomeLabel = new objects.Label("Chroma Cosmos!", "60px", "Arial Black", "#FFFFFF", managers.Game.canvasW/2, 240, true);

            var instruct:string = "Defeat all the Aliens by matching colours!\nUse the mouse to move and Click to fire\nUse a combination of A, S, and D to match the colours"
            this.instructions = new objects.Label(instruct, "32px", "Arial", "#fff", managers.Game.canvasW/2, 270);
            this.instructions.x -= 300; //Temporary Manual Adjustment

            // NOTE: PreloadJS manifest id
            this.startButton = new objects.MenuButton("Start", managers.Game.canvasW/2, 380, true);
            this.overButton = new objects.MenuButton("Skip to Game Over Screen", managers.Game.canvasW/2, 460, true);
            this.Main();
        }

        public Update():void {}
        
        public Main():void {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.instructions);
            this.addChild(this.startButton);
            this.addChild(this.overButton);
            this.startButton.on("click", this.startButtonClick);
            this.overButton.on("click", this.overButtonClick);
        }

        private startButtonClick():void {
            managers.Game.currentScene = config.Scene.GAME;
        }

        private overButtonClick():void {
            managers.Game.currentScene = config.Scene.OVER;
        }
    }
}
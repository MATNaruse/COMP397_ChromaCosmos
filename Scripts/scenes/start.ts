module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        // private startButton: objects.Button;
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

            this.welcomeLabel = new objects.Label("Chroma Cosmos!", "60px", "Arial Black", "#FFFFFF", objects.Game.canvasW/2, 240, true);

            // NOTE: PreloadJS manifest id
            // this.startButton = new objects.Button(this.assetManager, "nextButton", objects.Game.canvasW/2, 300);
            this.startButton = new objects.MenuButton("Start", objects.Game.canvasW/2, 320, true);
            this.overButton = new objects.MenuButton("Skip to Game Over Screen", objects.Game.canvasW/2, 400, true);
            this.Main();
        }

        public Update():void {
            // this.background.Update();
        }

        public Main():void {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.addChild(this.overButton);
            this.startButton.on("click", this.startButtonClick);
            this.overButton.on("click", this.overButtonClick);
        }

        private startButtonClick():void {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        }

        private overButtonClick():void {
            objects.Game.currentScene = config.Scene.OVER;
        }
    }
}
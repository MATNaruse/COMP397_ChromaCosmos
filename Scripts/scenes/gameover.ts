module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        // private backButton: objects.Button;
        private backButton: objects.MenuButton;
        private startButton: objects.MenuButton;
        private background: objects.Background;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
            this.background = new objects.Background(this.assetManager);
            this.gameOverLabel = new objects.Label("Game Over!", "40px", "Consolas", "#FFFFFF", objects.Game.canvasW/2, 240, true);

            // this.backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
            this.backButton = new objects.MenuButton("Play Again?", objects.Game.canvasW/2, 300, true);
            this.startButton = new objects.MenuButton("Main Menu", objects.Game.canvasW/2, 400, true);
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.addChild(this.startButton);

            this.backButton.on("click", this.backButtonClick);
            this.startButton.on("click", this.startButtonClick);
        }

        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }

        private startButtonClick():void{
            objects.Game.currentScene = config.Scene.START;
        }
    }
}
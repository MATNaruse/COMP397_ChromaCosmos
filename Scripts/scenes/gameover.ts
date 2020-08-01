module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private scoreLabel: objects.Label;
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
            var gameOverMsg = managers.Game.PlayerLose ? "Game Over!" : "Success!" 

            this.background = new objects.Background(this.assetManager);
            this.gameOverLabel = new objects.Label(gameOverMsg, "40px", "Consolas", "#FFFFFF", managers.Game.canvasW/2, 240, true);
            this.scoreLabel = new objects.Label("Your Score: " + managers.Game.Score, "40px", "Consolas", "#FFFFFF", managers.Game.canvasW/2, 200, true)
            this.backButton = new objects.MenuButton("Play Again?", managers.Game.canvasW/2, 300, true);
            this.startButton = new objects.MenuButton("Main Menu", managers.Game.canvasW/2, 400, true);
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.addChild(this.startButton);
            this.addChild(this.scoreLabel);

            this.backButton.on("click", this.backButtonClick);
            this.startButton.on("click", this.startButtonClick);
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.LVL_ONE;
        }

        private startButtonClick():void{
            managers.Game.currentScene = config.Scene.START;
        }
    }
}
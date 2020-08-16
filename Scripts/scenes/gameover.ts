module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private scoreLabel: objects.Label;
        private backButton: objects.MenuButton;
        private startButton: objects.MenuButton;
        private background: objects.Background;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
            var gameOverMsg = managers.Game.PlayerLose ? "Game Over!" : "Success!" 

            if(managers.Game.PlayerLose){
                this.music = createjs.Sound.play("musicLose").setVolume(2);
            }
            else{
                this.music = createjs.Sound.play("musicWin").setVolume(2);
            }

            this.background = new objects.Background();
            this.gameOverLabel = new objects.Label(gameOverMsg, "40px", "Consolas", "#FFFFFF", managers.Game.canvasW/2, 240, true);
            this.scoreLabel = new objects.Label("Your Score: " + managers.Game.Score, "40px", "Consolas", "#FFFFFF", managers.Game.canvasW/2, 200, true)
            this.backButton = new objects.MenuButton("Start Again?", managers.Game.canvasW/2, 300, true);
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
            if (this.music != null) this.music.destroy();
            managers.Game.currentScene = config.Scene.LVL_ONE;
        }

        private startButtonClick():void{
            if (this.music != null) this.music.destroy();
            managers.Game.currentScene = config.Scene.START;
        }
    }
}
module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameLogo: objects.HUDItem;
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
            this.gameLogo = new objects.HUDItem(managers.Game.assetManager, "gameLogo", managers.Game.canvasW/2, 240);
            this.music = createjs.Sound.play("musicMain").setVolume(2);
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
            this.addChild(this.startButton);
            // this.addChild(this.overButton);
            this.addChild(this.instructButton);

            this.startButton.on("click", () => {
                this.music.destroy();
                // managers.Game.currentScene = config.Scene.LVL_ONE;
                managers.Game.currentScene = config.Scene.CS_START_LVLONE;
            });
            // this.overButton.on("click", () => {managers.Game.currentScene = config.Scene.OVER;});
            this.instructButton.on("click", () => {
                this.music.destroy();
                managers.Game.currentScene = config.Scene.INSTRUCT;
            });
        }
    }
}
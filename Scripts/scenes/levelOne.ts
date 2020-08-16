module scenes{
    export class LevelOne extends scenes.LevelBase{
        // Variables
        public hud_levelIndicator: objects.Label;

        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.levelName = "Level One";
            managers.Levels.LevelOne = this;
            managers.Game.Score = 0;
            this.Start();
        }

        // Public Methods
        public Start():void{
            console.log("[LevelOne]:Start()-> Start!");
            this.music = createjs.Sound.play("musicLvlOne").setVolume(2);
            super.Start();

            // Detecting Mouse Click -> TODO: Move to Seperate Manager?
            this.on("click", this.FireBullet);
            this.Main();
        }

        // Protected Methods
        protected CheckWin():void{
            if(this.aliens.length == 0) {
                this.music.destroy();
                // managers.Game.currentScene = config.Scene.LVL_TWO;
                managers.Game.currentScene = config.Scene.CS_LVLONE_LVLTWO;
            }
        }

        protected SpawnAliens():void{
            this.fleetGen.GenerateStaticWaves(managers.AlienGenerator.TestStaticWave);
        }

        // MOVED: GetActiveColour to managers.Game
    }
}
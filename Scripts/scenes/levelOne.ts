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
                managers.Game.currentScene = config.Scene.LVL_TWO;
            }
            // if(this.aliens.length == 0) managers.Game.currentScene = config.Scene.OVER;
        }

        protected SpawnAliens():void{
            // this.fleetGen.GenerateWaves(5, 5);
            this.fleetGen.GenerateWaves(1,1);
            // this.fleetGen.GenerateWaves(1, 12);
        }

        // MOVED: GetActiveColour to managers.Game
    }
}
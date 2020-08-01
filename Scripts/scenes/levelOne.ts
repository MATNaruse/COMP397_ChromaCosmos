module scenes{
    export class LevelOne extends scenes.LevelBase{
        // Variables
        
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            managers.Levels.LevelOne = this;
            managers.Game.Score = 0;
            this.Start();
        }

        // Public Methods
        public Start():void{
            console.log("[LevelOne]:Start()-> Start!");
            super.Start();
            
            // Detecting Mouse Click -> TODO: Move to Seperate Manager?
            this.on("click", this.FireBullet);
            this.Main();
        }

        // Protected Methods
        protected CheckWin():void{
            if(this.aliens.length == 0) managers.Game.currentScene = config.Scene.LVL_TWO;
            // if(this.aliens.length == 0) managers.Game.currentScene = config.Scene.OVER;
        }

        protected SpawnAliens():void{
            this.fleetGen.GenerateWaves(5, 2);
        }

        // MOVED: GetActiveColour to managers.Game
    }
}
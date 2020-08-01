module scenes{
    export class LevelOne extends scenes.LevelBase{
        // Variables
        
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            managers.Levels.LevelOne = this;
            this.Start();
        }

        // Methods
        public Start():void{
            console.log("[LevelOne]:Start()-> Start!");
            super.Start();
            
            // Detecting Mouse Click -> TODO: Move to Seperate Manager?
            this.on("click", this.FireBullet);
            this.Main();
        }

        public Main():void{
            super.Main();
        }

        public Update():void{
            super.Update();
        }


        // Protected Methods
        protected CheckWin():void{
            if(this.aliens.length == 0) managers.Game.currentScene = config.Scene.LVL_TWO;
        }

        protected SpawnAliens():void{
            this.fleetGen.GenerateWaves(5, 2);
        }

        // MOVED: GetActiveColour to managers.Game
    }
}
module scenes{
    export class LevelTwo extends scenes.LevelBase{
        // Variables
        
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.levelName = "Level Two";
            managers.Levels.LevelTwo = this;
            this.Start();
        }

        // Public Methods
        public Start():void{
            console.log("[LevelTwo]:Start()-> Start!");
            super.Start();
            
            // Detecting Mouse Click -> TODO: Move to Seperate Manager?
            this.on("click", this.FireBullet);
            this.Main();
        }

        // Protected Methods
        protected CheckWin():void{
            if(this.aliens.length == 0) managers.Game.currentScene = config.Scene.OVER;
        }

        protected SpawnAliens():void{
            this.fleetGen.GenerateWaves(1, 2, false);
        }

    }
}
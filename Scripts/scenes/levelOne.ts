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
            super.Start();
            console.log("[LevelOne]:Start()-> Start!");

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

        }

        protected SpawnAliens(): Array<objects.Alien>{

        }

        // MOVED: GetActiveColour to managers.Game
    }
}
module scenes{
    export class LevelTwo extends scenes.LevelBase{
        // Variables
        
        // Constructor
        constructor(){
            super();
            this.levelName = "Level Two";
            managers.Levels.LevelTwo = this;
            this.Start();
        }

        // Public Methods
        public Start():void{
            console.log("[LevelTwo]:Start()-> Start!");
            this.music = createjs.Sound.play("musicLvlTwo").setVolume(2);
            super.Start();
            this.player = managers.Game.PlayerEntity;    // Carrying over Player Health from Previous Level
            // Detecting Mouse Click -> TODO: Move to Seperate Manager?
            this.on("click", this.FireBullet);
            this.Main();
        }

        // Protected Methods
        protected CheckWin():void{
            if(this.aliens.length == 0) {
                this.music.destroy();
                console.log("SCORE:" + managers.Game.Score + " * HEALTH:" + managers.Game.PlayerEntity.Health + " = " + (managers.Game.Score * managers.Game.PlayerEntity.Health));
                managers.Game.Score *= managers.Game.PlayerEntity.Health;
                // managers.Game.currentScene = config.Scene.OVER;
                managers.Game.currentScene = config.Scene.CS_LVLTWO_OVER;
            }
        }

        protected SpawnAliens():void{
            // this.fleetGen.GenerateRandomWaves(1,6, false);
            this.fleetGen.GenerateStaticWaves(managers.AlienGenerator.LevelTwoWaves);
        }

    }
}
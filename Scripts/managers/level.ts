module managers{
    export class Levels {
        public static LevelOne: scenes.LevelOne;
        public static LevelTwo: scenes.LevelTwo;

        public static GetCurrentLevel():scenes.LevelBase{
            switch(managers.Game.currentScene){
                case config.Scene.LVL_ONE:
                    return managers.Levels.LevelOne;

                case config.Scene.LVL_TWO:
                    return managers.Levels.LevelTwo;
            }
        }
    }
}
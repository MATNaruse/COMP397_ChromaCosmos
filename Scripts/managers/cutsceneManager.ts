module managers{
    export class CSManager{
        public static GetCSMessages():string[]{
            var Messages = [];

            switch(managers.Game.currentScene){
                case config.Scene.CS_START_LVLONE:
                    Messages = ["This is message one", "Which should be followed by message two", "We'll see if we hit message three", "Good luck!"];
                    break;
                case config.Scene.CS_LVLONE_LVLTWO:
                    Messages = ["You beat the first wave!", "Uh oh, looks like more aliens incoming", "They look tougher than before..", "Better get ready to mix colours!"];
                    break;
                case config.Scene.CS_LVLTWO_OVER:
                    Messages = ["That's all of them!", "Congrats!", "Thank you for saving us!"];
                    break;
            }
            return Messages;
        }
        
        public static GoToNextScene():void{
            switch(managers.Game.currentScene){
                case config.Scene.CS_START_LVLONE:
                    managers.Game.currentScene = config.Scene.LVL_ONE;
                    break;
                case config.Scene.CS_LVLONE_LVLTWO:
                    managers.Game.currentScene = config.Scene.LVL_TWO;
                    break;
                case config.Scene.CS_LVLTWO_OVER:
                    managers.Game.currentScene = config.Scene.OVER;
                    break;
            }
        }
    }
}
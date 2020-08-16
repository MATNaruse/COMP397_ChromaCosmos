module managers {
    export class Game {
        // GLOBAL VARIABLES
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue; // TODO: [!!!] replace ALL Constructors with this reference
        public static currentScene: number;
        public static controlManager: managers.PlayerControls;

        // Tracking Canvas Size
        public static canvasW:number;
        public static canvasH:number;

        // Tracking Player & Score
        public static Score:number;
        public static PlayerLose:boolean;
        public static PlayerEntity: objects.Player;
        
        // Getting Active Colour
        public static GetActiveColour():number{
            let Red = managers.Game.controlManager.KeyA;
            let Blue = managers.Game.controlManager.KeyS;
            let Yellow = managers.Game.controlManager.KeyD;

            if((Red && Blue && Yellow)||(!Red && !Blue && !Yellow)) return -1;  //If All or None of the Keys are Pressed
            else if (Blue && Yellow) return 3;  // Green
            else if (Red && Blue) return 4;     // Purple
            else if (Red && Yellow) return 5;   // Orange
            else if (Red) return 0;
            else if (Blue) return 1;
            else if (Yellow) return 2; 
        }
    }
}
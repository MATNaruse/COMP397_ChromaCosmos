module objects {
    export class Game {
        // GLOBAL VARIABLES
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static controlManager: managers.PlayerControls;

        //Tracking Canvas Size
        public static canvasW:number;
        public static canvasH:number;
    }
}
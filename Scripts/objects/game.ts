module objects {
    export class Game {
        // GLOBAL VARIABLES
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;

        //Tracking Canvas Size
        public static canvasW:number;
        public static canvasH:number;

        //Temporarily Tracking KeyPresses
        public static KeyA:boolean; // "Red" Shot
        public static KeyS:boolean; // "Blue" Shot
        public static KeyD:boolean; // "Yellow" Shot
    }
}
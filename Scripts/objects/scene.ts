module objects {
    export class Scene extends createjs.Container {
        // Variables
        // public assetManager: createjs.LoadQueue;
        protected music: createjs.AbstractSoundInstance;

        // Constructor
        constructor()
        {
            super();

            // this.assetManager = assetManager;
        }
        // Methods
        public Start():void {}
        public Update():void {}
        public Main():void {}
    }
}
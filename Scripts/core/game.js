// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    // Store current scene information
    var currentScene;
    var currentState;
    assetManifest = [
        { id: "startButton", src: "./Assets/StartButton.png" },
        { id: "nextButton", src: "./Assets/NextButton.png" },
        { id: "backButton", src: "./Assets/BackButton.png" },
        { id: "background", src: "./Assets/background2.jpg" },
        // {id:"background", src:"./Assets/background.png"},
        { id: "player", src: "./Assets/spaceship.png" },
        { id: "enemy", src: "./Assets/enemy.png" },
        // Bullet Colours
        { id: "bulletRED", src: "./Assets/bulletRed.png" },
        { id: "bulletBLUE", src: "./Assets/bulletBlue.png" },
        { id: "bulletYELLOW", src: "./Assets/bulletYellow.png" },
        { id: "bulletGREEN", src: "./Assets/bulletGreen.png" },
        { id: "bulletPURPLE", src: "./Assets/bulletPurple.png" },
        { id: "bulletORANGE", src: "./Assets/bulletOrange.png" },
        // Enemies
        { id: "alienRED", src: "./Assets/alienRed.png" },
        { id: "alienBLUE", src: "./Assets/alienBlue.png" },
        { id: "alienYELLOW", src: "./Assets/alienYellow.png" },
        { id: "alienGREEN", src: "./Assets/alienGreen.png" },
        { id: "alienPURPLE", src: "./Assets/alienPurple.png" },
        { id: "alienORANGE", src: "./Assets/alienOrange.png" },
        // Colour Chamber
        { id: "chamberEMPTY", src: "./Assets/chamberEmpty.png" },
        { id: "chamberRED", src: "./Assets/chamberRed.png" },
        { id: "chamberBLUE", src: "./Assets/chamberBlue.png" },
        { id: "chamberYELLOW", src: "./Assets/chamberYellow.png" },
        { id: "chamberGREEN", src: "./Assets/chamberGreen.png" },
        { id: "chamberPURPLE", src: "./Assets/chamberPurple.png" },
        { id: "chamberORANGE", src: "./Assets/chamberOrange.png" }
    ];
    function Init() {
        console.log("Initializing Start");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        objects.Game.canvasW = canvas.clientWidth;
        objects.Game.canvasH = canvas.clientHeight;
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        // Set up default game states -- State Machine
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("Game Start");
        // Finite State Machine
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
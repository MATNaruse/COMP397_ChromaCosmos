// Immediate Invoked Anonymous Function

(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    let controlManager: managers.PlayerControls;

    assetManifest = [
        /*
            VISUAL ASSETS
        */
        {id:"background", src:"./Assets/background4.png"},
        {id:"background2", src:"./Assets/background3.png"},
        {id:"player", src:"./Assets/spaceship.png"},
        // Bullet Colours
        {id:"bulletRED", src:"./Assets/bullets/bulletRed.png"},
        {id:"bulletBLUE", src:"./Assets/bullets/bulletBlue.png"},
        {id:"bulletYELLOW", src:"./Assets/bullets/bulletYellow.png"},
        {id:"bulletGREEN", src:"./Assets/bullets/bulletGreen.png"},
        {id:"bulletPURPLE", src:"./Assets/bullets/bulletPurple.png"},
        {id:"bulletORANGE", src:"./Assets/bullets/bulletOrange.png"},

        // Enemies - Updated Assets
        {id:"alienRED", src:"./InkscapeAssets/alienRed.png"},
        {id:"alienBLUE", src:"./InkscapeAssets/alienBlue.png"},
        {id:"alienYELLOW", src:"./InkscapeAssets/alienYellow.png"},
        {id:"alienGREEN", src:"./InkscapeAssets/alienGreen.png"},
        {id:"alienPURPLE", src:"./InkscapeAssets/alienPurple.png"},
        {id:"alienORANGE", src:"./InkscapeAssets/alienOrange.png"},

        // Colour Chamber -> Temp Changed to Style 2
        {id:"chamberEMPTY", src:"./Assets/hud/chamberEmpty2.png"},
        {id:"chamberRED", src:"./Assets/hud/chamberRed2.png"},
        {id:"chamberBLUE", src:"./Assets/hud/chamberBlue2.png"},
        {id:"chamberYELLOW", src:"./Assets/hud/chamberYellow2.png"},
        {id:"chamberGREEN", src:"./Assets/hud/chamberGreen2.png"},
        {id:"chamberPURPLE", src:"./Assets/hud/chamberPurple2.png"},
        {id:"chamberORANGE", src:"./Assets/hud/chamberOrange2.png"},

        /*
            AUDIO ASSETS
        */
        {id:"laserFire1", src:"./Assets/audio/sfx/laser1.wav"},
        {id:"playerHit1", src:"./Assets/audio/sfx/dull_metal_collision_08_44k_32bit_stereo.wav"},
        {id:"alienDie1", src:"./Assets/audio/sfx/alien_07.ogg"},
        {id:"alienDie2", src:"./Assets/audio/sfx/alien_08.ogg"},
        {id:"alienDie3", src:"./Assets/audio/sfx/alien_09.ogg"},
        {id:"alienDie4", src:"./Assets/audio/sfx/alien_10.ogg"},
        {id:"alienDie5", src:"./Assets/audio/sfx/alien_11.ogg"},
        {id:"alienDie6", src:"./Assets/audio/sfx/alien_12.ogg"}
    ];

    function Init() {
        console.log("Initializing Start");

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        
        //Tracking Canvas Size based on HTML
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
        controlManager = new managers.PlayerControls;
        objects.Game.controlManager = controlManager;
        Main();
    }

    function Update() {
        // Has my state changed since the last check?
        if(currentState != objects.Game.currentScene)
        {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }

        currentScene.Update();
        stage.update();
    }


    function Main() {
        console.log("Game Start");

        // Finite State Machine
        switch(objects.Game.currentScene)
        {
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
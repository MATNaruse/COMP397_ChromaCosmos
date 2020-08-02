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
        {id:"gameLogo", src:"./Assets/gameLogo.png"},

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

        // Colour Chamber -> Updated
        {id:"chamberEMPTY", src:"./InkscapeAssets/colourChamberEMPTY.png"},
        {id:"chamberRED", src:"./InkscapeAssets/colourChamberRED.png"},
        {id:"chamberBLUE", src:"./InkscapeAssets/colourChamberBLUE.png"},
        {id:"chamberYELLOW", src:"./InkscapeAssets/colourChamberYELLOW.png"},
        {id:"chamberGREEN", src:"./InkscapeAssets/colourChamberGREEN.png"},
        {id:"chamberPURPLE", src:"./InkscapeAssets/colourChamberPURPLE.png"},
        {id:"chamberORANGE", src:"./InkscapeAssets/colourChamberORANGE.png"},

        {id:"healthIndicator5", src:"./InkscapeAssets/healthIndicator5.png"},
        {id:"healthIndicator4", src:"./InkscapeAssets/healthIndicator4.png"},
        {id:"healthIndicator3", src:"./InkscapeAssets/healthIndicator3.png"},
        {id:"healthIndicator2", src:"./InkscapeAssets/healthIndicator2.png"},
        {id:"healthIndicator1", src:"./InkscapeAssets/healthIndicator1.png"},
        {id:"healthIndicator0", src:"./InkscapeAssets/healthIndicator0.png"},

        /*
            AUDIO ASSETS
        */
        // Music Related
        {id:"musicMain", src:"./Assets/audio/music/Hardmoon_-_Deep_space.mp3"},
        {id:"musicLvlOne", src:"./Assets/audio/music/Roboxel-SpaceMusic.mp3"},
        {id:"musicLvlTwo", src:"./Assets/audio/music/throughSpace.ogg"},
        {id:"musicWin", src:"./Assets/audio/music/winMusic3.wav"},
        {id:"musicLose", src:"./Assets/audio/music/loseMusic3-1_0.wav"},

        // Player Related
        {id:"laserFire1", src:"./Assets/audio/sfx/laser1.wav"},
        {id:"playerHit1", src:"./Assets/audio/sfx/dull_metal_collision_08_44k_32bit_stereo.wav"},
        
        // Alien Related
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
        managers.Game.canvasW = canvas.clientWidth;
        managers.Game.canvasH = canvas.clientHeight;
        managers.Game.assetManager = assetManager;
    }

    function Start() {
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        // Set up default game states -- State Machine
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        controlManager = new managers.PlayerControls;
        managers.Game.controlManager = controlManager;
        // createjs.Sound.play("mainMusic").setVolume(2);
        Main();
    }

    function Update() {
        // Has my state changed since the last check?
        if(currentState != managers.Game.currentScene)
        {
            console.log("Changing scenes to " + managers.Game.currentScene);
            Main();
        }

        currentScene.Update();
        stage.update();
    }


    function Main() {
        console.log("Game Start");

        // Finite State Machine
        switch(managers.Game.currentScene)
        {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.INSTRUCT:
                stage.removeAllChildren();
                currentScene = new scenes.InstructionScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.LVL_ONE:
                stage.removeAllChildren();
                console.log("Level ONE");
                currentScene = new scenes.LevelOne(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.LVL_TWO:
                stage.removeAllChildren();
                console.log("Level TWO");
                currentScene = new scenes.LevelTwo(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
            break;
        }

        currentState = managers.Game.currentScene;
    }

    window.onload = Init;
})();
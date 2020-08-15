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
        {id:"background", src:"./Assets/background.png"},
        {id:"background2", src:"./Assets/background2.png"},
        {id:"player", src:"./Assets/spaceship.png"},
        {id:"gameLogo", src:"./Assets/gameLogo.png"},

        // Bullet Colours
        {id:"bulletRED", src:"./Assets/bullets/bulletRed.png"},
        {id:"bulletBLUE", src:"./Assets/bullets/bulletBlue.png"},
        {id:"bulletYELLOW", src:"./Assets/bullets/bulletYellow.png"},
        {id:"bulletGREEN", src:"./Assets/bullets/bulletGreen.png"},
        {id:"bulletPURPLE", src:"./Assets/bullets/bulletPurple.png"},
        {id:"bulletORANGE", src:"./Assets/bullets/bulletOrange.png"},

        // Enemies
        {id:"alienRED", src:"./Assets/aliens/alienRed.png"},
        {id:"alienBLUE", src:"./Assets/aliens/alienBlue.png"},
        {id:"alienYELLOW", src:"./Assets/aliens/alienYellow.png"},
        {id:"alienGREEN", src:"./Assets/aliens/alienGreen.png"},
        {id:"alienPURPLE", src:"./Assets/aliens/alienPurple.png"},
        {id:"alienORANGE", src:"./Assets/aliens/alienOrange.png"},

        // Colour Chamber
        {id:"chamberEMPTY", src:"./Assets/hud/colourChamberEMPTY.png"},
        {id:"chamberRED", src:"./Assets/hud/colourChamberRED.png"},
        {id:"chamberBLUE", src:"./Assets/hud/colourChamberBLUE.png"},
        {id:"chamberYELLOW", src:"./Assets/hud/colourChamberYELLOW.png"},
        {id:"chamberGREEN", src:"./Assets/hud/colourChamberGREEN.png"},
        {id:"chamberPURPLE", src:"./Assets/hud/colourChamberPURPLE.png"},
        {id:"chamberORANGE", src:"./Assets/hud/colourChamberORANGE.png"},

        // Health Indicator
        {id:"healthIndicator5", src:"./Assets/hud/healthIndicator5.png"},
        {id:"healthIndicator4", src:"./Assets/hud/healthIndicator4.png"},
        {id:"healthIndicator3", src:"./Assets/hud/healthIndicator3.png"},
        {id:"healthIndicator2", src:"./Assets/hud/healthIndicator2.png"},
        {id:"healthIndicator1", src:"./Assets/hud/healthIndicator1.png"},
        {id:"healthIndicator0", src:"./Assets/hud/healthIndicator0.png"},

        {id:"hud_nextarrow", src:"./Assets/NextButton.png"},
        {id:"hud_cockpit", src:"./Assets/hud/cockpit2.png"},
        {id:"hud_holobg", src:"./Assets/hud/holobg1.png"},

        /*
            AUDIO ASSETS
        */
        // Music Related
        // {id:"musicMain", src:"./Assets/audio/music/Hardmoon_-_Deep_space.mp3"}, // LONG LOAD
        // {id:"musicLvlOne", src:"./Assets/audio/music/Roboxel-SpaceMusic.mp3"},  // LONG LOAD
        // {id:"musicLvlTwo", src:"./Assets/audio/music/throughSpace.ogg"},        // LONG LOAD
        {id:"musicWin", src:"./Assets/audio/music/winMusic3.wav"},
        {id:"musicLose", src:"./Assets/audio/music/loseMusic3-1_0.wav"},
        {id:"radioStatic", src:"./Assets/audio/sfx/static-radio.ogg"},

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
            console.log("Changing scenes to " + config.Scene[managers.Game.currentScene]);
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
            case config.Scene.CS_START_LVLONE:
                stage.removeAllChildren();
                currentScene = new scenes.Cutscene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.CS_LVLONE_LVLTWO:
                stage.removeAllChildren();
                currentScene = new scenes.Cutscene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.CS_LVLTWO_OVER:
                stage.removeAllChildren();
                currentScene = new scenes.Cutscene(assetManager);
                stage.addChild(currentScene);
            break;
        }

        currentState = managers.Game.currentScene;
    }

    window.onload = Init;
})();
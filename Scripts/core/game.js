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
    var controlManager;
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [""],
        "framerate": 20,
        "frames": [
            [1, 1, 150, 173, 0, 0, 0],
            [1, 176, 150, 72, 0, 0, 0],
            [153, 1, 150, 161, 0, 0, 0],
            [153, 164, 150, 72, 0, 0, 0],
            [305, 1, 150, 155, 0, 0, 0],
            [305, 158, 150, 72, 0, 0, 0],
            [457, 1, 125, 125, 0, 0, 0],
            [457, 128, 125, 125, 0, 0, 0],
            [584, 1, 125, 125, 0, 0, 0],
            [584, 128, 125, 125, 0, 0, 0],
            [711, 1, 125, 125, 0, 0, 0],
            [711, 128, 125, 125, 0, 0, 0],
            [838, 1, 150, 72, 0, 0, 0],
            [838, 75, 50, 90, 0, 0, 0],
            [838, 167, 75, 55, 0, 0, 0],
            [838, 224, 39, 31, 0, 0, 0],
            [890, 75, 75, 44, 0, 0, 0],
            [890, 121, 50, 39, 0, 0, 0],
            [915, 162, 50, 66, 0, 0, 0],
            [967, 75, 41, 61, 0, 0, 0],
            [990, 1, 35, 66, 0, 0, 0],
            [967, 138, 36, 56, 0, 0, 0],
            [967, 196, 36, 56, 0, 0, 0],
            [1005, 138, 36, 56, 0, 0, 0],
            [1005, 196, 36, 56, 0, 0, 0],
            [1010, 69, 36, 56, 0, 0, 0],
            [1027, 1, 36, 56, 0, 0, 0]
        ],
        "animations": {
            "chamberPURPLE": { "frames": [0] },
            "chamberBLUE": { "frames": [1] },
            "chamberGREEN": { "frames": [2] },
            "chamberEMPTY": { "frames": [3] },
            "chamberORANGE": { "frames": [4] },
            "chamberRED": { "frames": [5] },
            "healthIndicator0": { "frames": [6] },
            "healthIndicator1": { "frames": [7] },
            "healthIndicator2": { "frames": [8] },
            "healthIndicator3": { "frames": [9] },
            "healthIndicator4": { "frames": [10] },
            "healthIndicator5": { "frames": [11] },
            "chamberYELLOW": { "frames": [12] },
            "alienORANGE": { "frames": [13] },
            "alienGREEN": { "frames": [14] },
            "hub_nextarrow": { "frames": [15] },
            "alienYELLOW": { "frames": [16] },
            "alienBLUE": { "frames": [17] },
            "alienPURPLE": { "frames": [18] },
            "player": { "frames": [19] },
            "alienRED": { "frames": [20] },
            "bulletBLUE": { "frames": [21] },
            "bulletGREEN": { "frames": [22] },
            "bulletORANGE": { "frames": [23] },
            "bulletPURPLE": { "frames": [24] },
            "bulletRED": { "frames": [25] },
            "bulletYELLOW": { "frames": [26] }
        }
    };
    assetManifest = [
        /*
            VISUAL ASSETS
            TODO: Move to sprite sheet
        */
        { id: "background", src: "./Assets/background.png" },
        { id: "background2", src: "./Assets/background2.png" },
        { id: "gameLogo", src: "./Assets/gameLogo.png" },
        { id: "hud_nextarrow", src: "./Assets/NextButton.png" },
        { id: "hud_cockpit", src: "./Assets/hud/cockpit2.png" },
        { id: "hud_holobg", src: "./Assets/hud/holobg1.png" },
        { id: "textureAtlas", src: "./Assets/SpriteSheets/textureAtlas.png" }
        // // Player
        // {id:"player", src:"./Assets/spaceship.png"},
        // // Bullet Colours
        // {id:"bulletRED", src:"./Assets/bullets/bulletRed.png"},
        // {id:"bulletBLUE", src:"./Assets/bullets/bulletBlue.png"},
        // {id:"bulletYELLOW", src:"./Assets/bullets/bulletYellow.png"},
        // {id:"bulletGREEN", src:"./Assets/bullets/bulletGreen.png"},
        // {id:"bulletPURPLE", src:"./Assets/bullets/bulletPurple.png"},
        // {id:"bulletORANGE", src:"./Assets/bullets/bulletOrange.png"},
        // // Enemies
        // {id:"alienRED", src:"./Assets/aliens/alienRed.png"},
        // {id:"alienBLUE", src:"./Assets/aliens/alienBlue.png"},
        // {id:"alienYELLOW", src:"./Assets/aliens/alienYellow.png"},
        // {id:"alienGREEN", src:"./Assets/aliens/alienGreen.png"},
        // {id:"alienPURPLE", src:"./Assets/aliens/alienPurple.png"},
        // {id:"alienORANGE", src:"./Assets/aliens/alienOrange.png"},
        // // Colour Chamber
        // {id:"chamberEMPTY", src:"./Assets/hud/colourChamberEMPTY.png"},
        // {id:"chamberRED", src:"./Assets/hud/colourChamberRED.png"},
        // {id:"chamberBLUE", src:"./Assets/hud/colourChamberBLUE.png"},
        // {id:"chamberYELLOW", src:"./Assets/hud/colourChamberYELLOW.png"},
        // {id:"chamberGREEN", src:"./Assets/hud/colourChamberGREEN.png"},
        // {id:"chamberPURPLE", src:"./Assets/hud/colourChamberPURPLE.png"},
        // {id:"chamberORANGE", src:"./Assets/hud/colourChamberORANGE.png"},
        // // Health Indicator
        // {id:"healthIndicator5", src:"./Assets/hud/healthIndicator5.png"},
        // {id:"healthIndicator4", src:"./Assets/hud/healthIndicator4.png"},
        // {id:"healthIndicator3", src:"./Assets/hud/healthIndicator3.png"},
        // {id:"healthIndicator2", src:"./Assets/hud/healthIndicator2.png"},
        // {id:"healthIndicator1", src:"./Assets/hud/healthIndicator1.png"},
        // {id:"healthIndicator0", src:"./Assets/hud/healthIndicator0.png"},
        /*
            AUDIO ASSETS
        */
        // Music Related
        // {id:"musicMain", src:"./Assets/audio/music/Hardmoon_-_Deep_space.mp3"}, // LONG LOAD
        // {id:"musicLvlOne", src:"./Assets/audio/music/Roboxel-SpaceMusic.mp3"},  // LONG LOAD
        // {id:"musicLvlTwo", src:"./Assets/audio/music/throughSpace.ogg"},        // LONG LOAD
        ,
        // // Player
        // {id:"player", src:"./Assets/spaceship.png"},
        // // Bullet Colours
        // {id:"bulletRED", src:"./Assets/bullets/bulletRed.png"},
        // {id:"bulletBLUE", src:"./Assets/bullets/bulletBlue.png"},
        // {id:"bulletYELLOW", src:"./Assets/bullets/bulletYellow.png"},
        // {id:"bulletGREEN", src:"./Assets/bullets/bulletGreen.png"},
        // {id:"bulletPURPLE", src:"./Assets/bullets/bulletPurple.png"},
        // {id:"bulletORANGE", src:"./Assets/bullets/bulletOrange.png"},
        // // Enemies
        // {id:"alienRED", src:"./Assets/aliens/alienRed.png"},
        // {id:"alienBLUE", src:"./Assets/aliens/alienBlue.png"},
        // {id:"alienYELLOW", src:"./Assets/aliens/alienYellow.png"},
        // {id:"alienGREEN", src:"./Assets/aliens/alienGreen.png"},
        // {id:"alienPURPLE", src:"./Assets/aliens/alienPurple.png"},
        // {id:"alienORANGE", src:"./Assets/aliens/alienOrange.png"},
        // // Colour Chamber
        // {id:"chamberEMPTY", src:"./Assets/hud/colourChamberEMPTY.png"},
        // {id:"chamberRED", src:"./Assets/hud/colourChamberRED.png"},
        // {id:"chamberBLUE", src:"./Assets/hud/colourChamberBLUE.png"},
        // {id:"chamberYELLOW", src:"./Assets/hud/colourChamberYELLOW.png"},
        // {id:"chamberGREEN", src:"./Assets/hud/colourChamberGREEN.png"},
        // {id:"chamberPURPLE", src:"./Assets/hud/colourChamberPURPLE.png"},
        // {id:"chamberORANGE", src:"./Assets/hud/colourChamberORANGE.png"},
        // // Health Indicator
        // {id:"healthIndicator5", src:"./Assets/hud/healthIndicator5.png"},
        // {id:"healthIndicator4", src:"./Assets/hud/healthIndicator4.png"},
        // {id:"healthIndicator3", src:"./Assets/hud/healthIndicator3.png"},
        // {id:"healthIndicator2", src:"./Assets/hud/healthIndicator2.png"},
        // {id:"healthIndicator1", src:"./Assets/hud/healthIndicator1.png"},
        // {id:"healthIndicator0", src:"./Assets/hud/healthIndicator0.png"},
        /*
            AUDIO ASSETS
        */
        // Music Related
        // {id:"musicMain", src:"./Assets/audio/music/Hardmoon_-_Deep_space.mp3"}, // LONG LOAD
        // {id:"musicLvlOne", src:"./Assets/audio/music/Roboxel-SpaceMusic.mp3"},  // LONG LOAD
        // {id:"musicLvlTwo", src:"./Assets/audio/music/throughSpace.ogg"},        // LONG LOAD
        { id: "musicWin", src: "./Assets/audio/music/winMusic3.wav" },
        { id: "musicLose", src: "./Assets/audio/music/loseMusic3-1_0.wav" },
        { id: "radioStatic", src: "./Assets/audio/sfx/static-radio.ogg" },
        // Player Related
        { id: "laserFire1", src: "./Assets/audio/sfx/laser1.wav" },
        { id: "playerHit1", src: "./Assets/audio/sfx/dull_metal_collision_08_44k_32bit_stereo.wav" },
        // Alien Related
        { id: "alienDie1", src: "./Assets/audio/sfx/alien_07.ogg" },
        { id: "alienDie2", src: "./Assets/audio/sfx/alien_08.ogg" },
        { id: "alienDie3", src: "./Assets/audio/sfx/alien_09.ogg" },
        { id: "alienDie4", src: "./Assets/audio/sfx/alien_10.ogg" },
        { id: "alienDie5", src: "./Assets/audio/sfx/alien_11.ogg" },
        { id: "alienDie6", src: "./Assets/audio/sfx/alien_12.ogg" }
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
        textureAtlasData.images = [assetManager.getResult("textureAtlas")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
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
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != managers.Game.currentScene) {
            console.log("Changing scenes to " + config.Scene[managers.Game.currentScene]);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("Game Start");
        // Finite State Machine
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.INSTRUCT:
                stage.removeAllChildren();
                currentScene = new scenes.InstructionScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.LVL_ONE:
                stage.removeAllChildren();
                console.log("Level ONE");
                currentScene = new scenes.LevelOne();
                stage.addChild(currentScene);
                break;
            case config.Scene.LVL_TWO:
                stage.removeAllChildren();
                console.log("Level TWO");
                currentScene = new scenes.LevelTwo();
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.CS_START_LVLONE:
                stage.removeAllChildren();
                currentScene = new scenes.Cutscene();
                stage.addChild(currentScene);
                break;
            case config.Scene.CS_LVLONE_LVLTWO:
                stage.removeAllChildren();
                currentScene = new scenes.Cutscene();
                stage.addChild(currentScene);
                break;
            case config.Scene.CS_LVLTWO_OVER:
                stage.removeAllChildren();
                currentScene = new scenes.Cutscene();
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
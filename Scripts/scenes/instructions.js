var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var InstructionScene = /** @class */ (function (_super) {
        __extends(InstructionScene, _super);
        // private instructions:string[] = ["How to Play",
        //                                 "Use the Mouse to move Left and Right",
        //                                 "Use Left Click to Fire",
        //                                 "Use the A, S, and D keys on the keyboard to change Cannon Colour",
        //                                 "| A = Red",
        //                                 "| S = Blue",
        //                                 "| D = Yellow",
        //                                 "Use Multiple Keys to Mix Colours!"];
        // Constructor
        function InstructionScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        InstructionScene.prototype.Start = function () {
            // Initalize Objects
            this.music = createjs.Sound.play("musicMain").setVolume(2);
            this.background = new objects.Background();
            this.overlay = new objects.StaticDisplayItem("instructOverlay", managers.Game.canvasW / 2, managers.Game.canvasH / 2);
            // this.instructLabels = Array<objects.Label>();
            // this.MultiLineLabels(this.instructions, 100, 100, 50);
            this.returnButton = new objects.MenuButton("Return to Title", managers.Game.canvasW / 2, 650, true);
            this.Main();
        };
        InstructionScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            // this.instructLabels.forEach(l => this.addChild(l));
            this.addChild(this.overlay);
            this.addChild(this.returnButton);
            this.returnButton.on("click", function () {
                if (_this.music != null)
                    _this.music.destroy();
                managers.Game.currentScene = config.Scene.START;
            });
        };
        InstructionScene.prototype.MultiLineLabels = function (input, startX, startY, spacing) {
            var _this = this;
            // var strings = input.split("|")
            var yOffset = startY;
            var label = null;
            input.forEach(function (str) {
                label = new objects.Label(str.replace("| ", "\t\t\t\t\t"), "32px", "Arial", "#fff", startX, yOffset);
                _this.instructLabels.push(label);
                yOffset += spacing;
            });
        };
        return InstructionScene;
    }(objects.Scene));
    scenes.InstructionScene = InstructionScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map
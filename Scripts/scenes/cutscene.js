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
    var Cutscene = /** @class */ (function (_super) {
        __extends(Cutscene, _super);
        // Constructor
        function Cutscene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            // Obj Co-ords
            _this.main_x = managers.Game.canvasW / 2;
            _this.main_y = 240;
            _this.next_x = managers.Game.canvasW / 2;
            _this.next_y = _this.main_y + 50;
            _this.arrow_x = _this.next_x + 100;
            _this.arrow_y = _this.next_y;
            _this.Start();
            return _this;
        }
        // Methods
        Cutscene.prototype.Start = function () {
            // Set MessageText before calling Start in ChildClass
            this.MessageText = managers.CSManager.GetCSMessages();
            this.currentMessage = 0;
            this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", "#FFFFFF", this.main_x, this.main_y, true);
            this.NextLabel = new objects.Label("Click to Continue", "16px", "Consolas", "#FFFFFF", this.next_x, this.next_y, true);
            this.HUD_NextIcon = new objects.Button(managers.Game.assetManager, "hud_nextarrow", this.arrow_x, this.arrow_y, true);
            this.Main();
        };
        Cutscene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.MainLabel);
            this.addChild(this.NextLabel);
            this.addChild(this.HUD_NextIcon);
            this.HUD_NextIcon.on("click", function () { return _this.MoveToNextMessage(); });
        };
        Cutscene.prototype.Update = function () { };
        // Protected Methods
        Cutscene.prototype.MoveToNextMessage = function () {
            console.log("NEXT CLICKED...");
            if (this.currentMessage + 1 != this.MessageText.length) {
                this.currentMessage += 1;
                console.log("\tCurrentMsg:" + this.currentMessage);
                this.removeChild(this.MainLabel);
                this.MainLabel = new objects.Label(this.MessageText[this.currentMessage], "40px", "Consolas", "#FFFFFF", this.main_x, this.main_y, true);
                this.addChild(this.MainLabel);
            }
            else {
                managers.CSManager.GoToNextScene();
                console.log("\t...NEXT SCENE!");
            }
        };
        return Cutscene;
    }(objects.Scene));
    scenes.Cutscene = Cutscene;
})(scenes || (scenes = {}));
//# sourceMappingURL=cutscene.js.map
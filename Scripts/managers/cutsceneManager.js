var managers;
(function (managers) {
    var CSManager = /** @class */ (function () {
        function CSManager() {
        }
        CSManager.GetCSMessages = function () {
            var Messages = [];
            // TODO: Rework the 'Script' 
            switch (managers.Game.currentScene) {
                case config.Scene.CS_START_LVLONE:
                    Messages = ["Attention Captain Roy!", "Use the Colour Cannon to\nattack the incoming aliens!", "Don't forget to match\nthe alien & laser colours!", "Otherwise it won't do anything!", "Good luck!"];
                    break;
                case config.Scene.CS_LVLONE_LVLTWO:
                    Messages = ["You beat the first wave!", "Uh oh!\nLooks like more aliens incoming", "They look tougher than before..", "Better get ready to mix colours!"];
                    break;
                case config.Scene.CS_LVLTWO_OVER:
                    Messages = ["Scanners indicate that's\nthe last of them!", "Well Done!", "Thank you for\nstopping the Aliens!"];
                    break;
            }
            return Messages;
        };
        CSManager.GoToNextScene = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.CS_START_LVLONE:
                    managers.Game.currentScene = config.Scene.LVL_ONE;
                    break;
                case config.Scene.CS_LVLONE_LVLTWO:
                    managers.Game.currentScene = config.Scene.LVL_TWO;
                    break;
                case config.Scene.CS_LVLTWO_OVER:
                    managers.Game.currentScene = config.Scene.OVER;
                    break;
            }
        };
        return CSManager;
    }());
    managers.CSManager = CSManager;
})(managers || (managers = {}));
//# sourceMappingURL=cutsceneManager.js.map
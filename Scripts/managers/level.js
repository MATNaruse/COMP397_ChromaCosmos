var managers;
(function (managers) {
    var Levels = /** @class */ (function () {
        function Levels() {
        }
        Levels.GetCurrentLevel = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.LVL_ONE:
                    return managers.Levels.LevelOne;
                case config.Scene.LVL_TWO:
                    return managers.Levels.LevelTwo;
            }
        };
        return Levels;
    }());
    managers.Levels = Levels;
})(managers || (managers = {}));
//# sourceMappingURL=level.js.map
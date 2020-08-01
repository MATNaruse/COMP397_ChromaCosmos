var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        // Getting Active Colour
        Game.GetActiveColour = function () {
            var Red = managers.Game.controlManager.KeyA;
            var Blue = managers.Game.controlManager.KeyS;
            var Yellow = managers.Game.controlManager.KeyD;
            if ((Red && Blue && Yellow) || (!Red && !Blue && !Yellow))
                return -1; //If All or None of the Keys are Pressed
            else if (Blue && Yellow)
                return 3; // Green
            else if (Red && Blue)
                return 4; // Purple
            else if (Red && Yellow)
                return 5; // Orange
            else if (Red)
                return 0;
            else if (Blue)
                return 1;
            else if (Yellow)
                return 2;
        };
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map
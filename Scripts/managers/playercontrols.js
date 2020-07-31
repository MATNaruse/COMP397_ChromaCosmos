var managers;
(function (managers) {
    var PlayerControls = /** @class */ (function () {
        function PlayerControls() {
            this.enabled = true;
            document.addEventListener("keydown", this.KeyPressHandler.bind(this), false);
            document.addEventListener("keyup", this.KeyPressHandler.bind(this), false);
        }
        PlayerControls.prototype.KeyPressHandler = function (evt) {
            // console.log("Key Pressed! - " + evt.keyCode + "[" + evt.type + "]");
            // A = 65, S = 83, D = 68
            switch (evt.keyCode) {
                case 65:
                    if (evt.type == "keydown")
                        this.KeyA = true;
                    else
                        this.KeyA = false;
                    break;
                case 83:
                    if (evt.type == "keydown")
                        this.KeyS = true;
                    else
                        this.KeyS = false;
                    break;
                case 68:
                    if (evt.type == "keydown")
                        this.KeyD = true;
                    else
                        this.KeyD = false;
                    break;
            }
        };
        return PlayerControls;
    }());
    managers.PlayerControls = PlayerControls;
})(managers || (managers = {}));
//# sourceMappingURL=playercontrols.js.map
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["INSTRUCT"] = 1] = "INSTRUCT";
        Scene[Scene["GAME"] = 2] = "GAME";
        Scene[Scene["LVL_ONE"] = 3] = "LVL_ONE";
        Scene[Scene["LVL_TWO"] = 4] = "LVL_TWO";
        Scene[Scene["OVER"] = 5] = "OVER";
        Scene[Scene["CS_START_LVLONE"] = 6] = "CS_START_LVLONE";
        Scene[Scene["CS_LVLONE_LVLTWO"] = 7] = "CS_LVLONE_LVLTWO";
        Scene[Scene["CS_LVLTWO_OVER"] = 8] = "CS_LVLTWO_OVER";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map
var managers;
(function (managers) {
    var PlayerShots = /** @class */ (function () {
        function PlayerShots() {
        }
        PlayerShots.OnScreen = function (scene) {
            if (scene.playerShots.length > 0) {
                scene.playerShots.forEach(function (b) {
                    if (!b.isOffScreen)
                        b.Update();
                    else
                        scene.removeChild(b);
                });
                scene.playerShots.forEach(function (bullet) {
                    scene.aliens.forEach(function (alien) {
                        if (managers.Collision.VerticalDetect(bullet, alien)) {
                            managers.Game.Score += alien.ScoreValue;
                            scene.removeChild(bullet);
                            scene.removeChild(alien);
                        }
                        ;
                    });
                });
            }
        };
        return PlayerShots;
    }());
    managers.PlayerShots = PlayerShots;
})(managers || (managers = {}));
//# sourceMappingURL=playershots.js.map
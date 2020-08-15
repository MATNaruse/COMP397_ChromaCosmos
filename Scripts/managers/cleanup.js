var managers;
(function (managers) {
    var CleanUp = /** @class */ (function () {
        function CleanUp() {
        }
        CleanUp.Projectiles = function (projList) {
            var projToDelete;
            var projToReturn;
            projToDelete = projList.filter(function (b) { return b.isOffScreen; });
            projToReturn = projList.filter(function (b) { return !b.isOffScreen; });
            if (projToDelete.length > 0) {
                //console.log("projToDelete:" + projToDelete.length);
                projToDelete.splice(0, projToDelete.length);
                //console.log("projToDeleteConfirm:" + projToDelete.length);
            }
            return projToReturn;
        };
        CleanUp.Aliens = function (aliensList) {
            var aliensToDelete;
            var aliensToReturn;
            aliensToDelete = aliensList.filter(function (a) { return a.isDead; });
            aliensToReturn = aliensList.filter(function (a) { return !a.isDead; });
            aliensList.forEach(function (a) {
                aliensToDelete.forEach(function (d) {
                    if (a instanceof objects.SecondaryAlien && d instanceof objects.SecondaryAlien) {
                        if (a.LeftAlien == d)
                            a.LeftAlien = null;
                        if (a.RightAlien == d)
                            a.RightAlien = null;
                    }
                });
            });
            if (aliensToDelete.length > 0) {
                //console.log("aliensToDelete:" + aliensToDelete.length);
                aliensToDelete.splice(0, aliensToDelete.length);
                //console.log("aliensToDeleteConfirm:" + aliensToDelete.length);
            }
            return aliensToReturn;
        };
        return CleanUp;
    }());
    managers.CleanUp = CleanUp;
})(managers || (managers = {}));
//# sourceMappingURL=cleanup.js.map
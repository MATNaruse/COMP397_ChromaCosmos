var managers;
(function (managers) {
    var CleanUp = /** @class */ (function () {
        function CleanUp() {
        }
        CleanUp.Projectiles = function (projList) {
            var projToDelete;
            projToDelete = projList.filter(function (b) { return b.isOffScreen; });
            projList = projList.filter(function (b) { return !b.isOffScreen; });
            if (projToDelete.length > 0) {
                console.log("projToDelete:" + projToDelete.length);
                projToDelete.splice(0, projToDelete.length);
                console.log("ToDeleteConfirm:" + projToDelete.length);
            }
        };
        CleanUp.Aliens = function (aliensList) {
            var aliensToDelete;
            aliensToDelete = aliensList.filter(function (a) { return a.isDead; });
            aliensList = aliensList.filter(function (a) { return !a.isDead; });
            if (aliensToDelete.length > 0) {
                console.log("projToDelete:" + aliensToDelete.length);
                aliensToDelete.splice(0, aliensToDelete.length);
                console.log("ToDeleteConfirm:" + aliensToDelete.length);
            }
        };
        return CleanUp;
    }());
    managers.CleanUp = CleanUp;
})(managers || (managers = {}));
//# sourceMappingURL=cleanup.js.map
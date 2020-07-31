var levels;
(function (levels) {
    var FleetGenerator = /** @class */ (function () {
        function FleetGenerator(lane_space) {
            this.laneXSpacing = lane_space;
            this.waves = [];
        }
        FleetGenerator.prototype.DeployFleet = function () {
            this.waves.forEach(function (w) {
            });
        };
        return FleetGenerator;
    }());
    levels.FleetGenerator = FleetGenerator;
    var Wave = /** @class */ (function () {
        function Wave() {
            this.wave_row = new Array(9);
        }
        Wave.prototype.InsertEnemy = function (enemy, lane) {
            this.wave_row[lane] = enemy;
        };
        Wave.prototype.LaunchWave = function () {
            return this.wave_row;
        };
        return Wave;
    }());
    levels.Wave = Wave;
})(levels || (levels = {}));
//# sourceMappingURL=fleet_generator.js.map
var managers;
(function (managers) {
    var AlienGenerator = /** @class */ (function () {
        function AlienGenerator(alienList) {
            // private LaneXValues: number[] = [375, 550, 725, 900, 1075, 1250];
            this.LaneXValues = [100, 300, 500, 700, 900, 1100];
            this.Waves = new Array();
            this.listOfAllAliens = alienList;
        }
        AlienGenerator.prototype.GenerateRandomWaves = function (numOfWaves, aliensPerWave, basic) {
            if (aliensPerWave === void 0) { aliensPerWave = 5; }
            if (basic === void 0) { basic = true; }
            var colourRange = basic ? 3 : 6;
            var perWave = aliensPerWave > 6 ? 6 : aliensPerWave;
            var waves = aliensPerWave > 6 ? numOfWaves + (Math.floor(aliensPerWave / 6)) : numOfWaves;
            var yWaveOffset = -50;
            for (var i = 0; i < waves; i++) {
                // For Every Wave
                var aliensInWave = [];
                var currentLane = 0;
                // Creating Aliens
                for (var j = 0; j < perWave; j++) {
                    // Selecting Colour
                    var colourPicked = Math.floor(Math.random() * (colourRange));
                    // Generating Alien
                    var new_alien;
                    if (colourPicked < 3)
                        new_alien = new objects.PrimaryAlien(colourPicked, this.LaneXValues[currentLane], yWaveOffset);
                    else
                        new_alien = new objects.SecondaryAlien(colourPicked, this.LaneXValues[currentLane], yWaveOffset);
                    currentLane += 1;
                    aliensInWave.push(new_alien);
                    // console.log("WAVE["+i+"]:ALIEN["+j+"]:startX="+ new_alien.x + "|startY="+ new_alien.y);
                    // console.log("WAVE["+i+"]:ALIEN["+j+"]:yWaveOffset="+ yWaveOffset);
                }
                yWaveOffset -= 500;
                this.Waves.push(aliensInWave);
            }
            this.DeployWaves();
        };
        AlienGenerator.prototype.GenerateStaticWaves = function (template) {
            var _this = this;
            template.forEach(function (row) {
                console.log(row);
            });
            var waves = new Array();
            var yWaveOffset = -50;
            var currWave;
            var currLane;
            template.forEach(function (row) {
                currLane = 0;
                currWave = [];
                row.forEach(function (num) {
                    var new_alien;
                    // Create a new alien based on colour index, anything else returns null
                    switch (num) {
                        case (0):
                            new_alien = new objects.PrimaryAlien(0, _this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case (1):
                            new_alien = new objects.PrimaryAlien(1, _this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case (2):
                            new_alien = new objects.PrimaryAlien(2, _this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case (3):
                            new_alien = new objects.SecondaryAlien(3, _this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case (4):
                            new_alien = new objects.SecondaryAlien(4, _this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case (5):
                            new_alien = new objects.SecondaryAlien(5, _this.LaneXValues[currLane], yWaveOffset);
                            break;
                        default:
                            new_alien = null;
                            break;
                    }
                    currWave.push(new_alien);
                    currLane += 1;
                });
                yWaveOffset -= 500;
                waves.push(currWave);
            });
            this.Waves = waves;
            this.DeployWaves();
        };
        AlienGenerator.prototype.DeployWaves = function (empty) {
            var _this = this;
            if (empty === void 0) { empty = false; }
            this.Waves.forEach(function (list) {
                list.forEach(function (alien) {
                    if (alien != null) {
                        _this.listOfAllAliens.push(alien);
                        console.log("ALIEN[" + alien.name + "]:startX=" + alien.x + "|startY=" + alien.y);
                    }
                });
            });
            if (empty) {
                this.Waves = new Array();
            }
        };
        // Static Alien Waves
        // Note: Spawns rows in order. Visually here, it would be top to bottom
        AlienGenerator.LevelOneWaves = [
            [9, 9, 2, 2, 9, 9],
            [9, 1, 9, 9, 1, 9],
            [0, 9, 9, 9, 9, 0],
            [9, 9, 0, 0, 9, 9],
            [1, 0, 1, 1, 0, 1],
            [0, 1, 2, 2, 1, 0],
            [2, 2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0]
        ];
        AlienGenerator.LevelTwoWaves = [
            [9, 9, 0, 0, 9, 9],
            [9, 1, 9, 9, 1, 9],
            [2, 9, 9, 9, 9, 2],
            [9, 3, 9, 9, 3, 9],
            [9, 9, 9, 9, 9, 9],
            [4, 9, 9, 9, 9, 4],
            [9, 9, 9, 9, 9, 9],
            [9, 5, 9, 9, 5, 9],
            [9, 9, 9, 9, 9, 9],
            [5, 4, 3, 3, 4, 5]
        ];
        return AlienGenerator;
    }());
    managers.AlienGenerator = AlienGenerator;
})(managers || (managers = {}));
//# sourceMappingURL=alienGenerator.js.map
var managers;
(function (managers) {
    var AlienGenerator = /** @class */ (function () {
        function AlienGenerator(alienList) {
            this.listOfAllAliens = alienList;
        }
        AlienGenerator.prototype.Spawn = function (alien, lane) {
            var baseX = 200;
            var increment = 175;
            alien.x = baseX + (increment * lane);
            if (alien instanceof objects.PrimaryAlien) {
                alien.startX = alien.x;
                alien.x += Math.floor(Math.random() * 1 - 1);
            }
        };
        AlienGenerator.prototype.GenerateWaves = function (numOfWaves, aliensPerWave, basic) {
            if (basic === void 0) { basic = true; }
            // TODO: Prevent aliens stacking
            var colourRange = basic ? 3 : 6;
            var yWaveOffset = -50;
            for (var i = 0; i < numOfWaves; i++) {
                // For Each Wave
                for (var j = 0; j < aliensPerWave; j++) {
                    // Pick Alien Colour
                    var colourPicked = Math.floor(Math.random() * (colourRange));
                    //console.log("PICKED " + colourPicked + ": " +  objects.ColourPalette[colourPicked]);
                    // Generate Alien
                    var new_alien = new objects.PrimaryAlien(managers.Game.assetManager, colourPicked);
                    // Set Y Offset for "Wave"
                    new_alien.y = yWaveOffset;
                    //console.log("SET YOFF" + yWaveOffset);
                    // Put into a "Lane"
                    this.Spawn(new_alien, Math.floor((Math.random() * (6 - 1) + 1)));
                    this.listOfAllAliens.push(new_alien);
                }
                yWaveOffset -= 1000;
            }
            // return this.listOfAllAliens;
        };
        return AlienGenerator;
    }());
    managers.AlienGenerator = AlienGenerator;
})(managers || (managers = {}));
//# sourceMappingURL=alienGenerator.js.map
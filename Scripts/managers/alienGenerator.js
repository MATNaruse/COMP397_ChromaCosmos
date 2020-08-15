var managers;
(function (managers) {
    var AlienGenerator = /** @class */ (function () {
        function AlienGenerator(alienList) {
            this.listOfAllAliens = alienList;
        }
        AlienGenerator.prototype.Spawn = function (alien, lane) {
            var baseX = 100;
            var increment = 175;
            alien.x = baseX + (increment * lane);
            alien.startX = alien.x;
            alien.x += Math.floor(Math.random() * 1 - 1);
            if (alien instanceof objects.SecondaryAlien) {
                alien.CollisionActive = false;
            }
        };
        // TODO: Implement "Static" Alien Generation, not random like GenerateWaves()
        // FIXME: Prevent Collision Detection at Construction
        AlienGenerator.prototype.GenerateWaves = function (numOfWaves, aliensPerWave, basic) {
            // TODO: Prevent aliens stacking --> Mutliple Waves stacking
            if (aliensPerWave === void 0) { aliensPerWave = 5; }
            if (basic === void 0) { basic = true; }
            var colourRange = basic ? 3 : 6;
            var yWaveOffset = -50;
            var availableLane;
            var perWave = aliensPerWave > 6 ? 6 : aliensPerWave;
            var waves = aliensPerWave > 6 ? numOfWaves + (Math.floor(aliensPerWave / 6)) : numOfWaves;
            console.log("NumOfWaves:" + waves + " | PerWave:" + perWave);
            for (var i = 0; i < waves; i++) {
                // For Each Wave
                availableLane = [false, false, false, false, false, false]; // Reset Lane Availability
                for (var j = 0; j < perWave; j++) {
                    // Pick Alien Colour
                    var colourPicked = Math.floor(Math.random() * (colourRange));
                    // Generate Alien
                    var new_alien;
                    if (colourPicked < 3)
                        new_alien = new objects.PrimaryAlien(managers.Game.assetManager, colourPicked);
                    else
                        new_alien = new objects.SecondaryAlien(managers.Game.assetManager, colourPicked);
                    // Set Y Offset for "Wave"
                    new_alien.y = yWaveOffset;
                    // Put into a "Lane" -> Ensuring no overlaps
                    // var pickedLane = Math.floor((Math.random() * 6) + 1);
                    var pickedLane;
                    do {
                        pickedLane = Math.floor((Math.random() * 6 + 1));
                        console.log("PickedLane: " + (pickedLane));
                    } while (availableLane[pickedLane] == true);
                    // if(availableLane[pickedLane] = true){
                    this.listOfAllAliens.forEach(function (alien) {
                        if (new_alien.y >= (alien.y + 10) && new_alien.y <= (alien.y - 10)) {
                            new_alien.y -= 50;
                        }
                    });
                    // }
                    availableLane[pickedLane] = true;
                    console.log("Final-PickedLane: " + (pickedLane));
                    this.Spawn(new_alien, pickedLane);
                    this.listOfAllAliens.push(new_alien);
                }
                yWaveOffset -= 1000;
            }
        };
        return AlienGenerator;
    }());
    managers.AlienGenerator = AlienGenerator;
})(managers || (managers = {}));
//# sourceMappingURL=alienGenerator.js.map
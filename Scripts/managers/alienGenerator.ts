module managers{
    export class AlienGenerator{
        private listOfAllAliens: objects.Alien[];

        constructor(alienList: objects.Alien[]){
            this.listOfAllAliens = alienList;
        }

        public Spawn(alien:objects.Alien, lane:number){
            var baseX: number = 100;
            var increment: number = 175;
            alien.x = baseX + (increment * lane);
            alien.startX = alien.x ;
            alien.x += Math.floor(Math.random() * 1 - 1);
            if(alien instanceof objects.SecondaryAlien){
                alien.CollisionActive = false;
            }
            
        }

        // TODO: Implement "Static" Alien Generation, not random like GenerateWaves()
        // FIXME: Prevent Collision Detection at Construction
        public GenerateWaves(numOfWaves: number, aliensPerWave:number = 5, basic:boolean = true){
            // TODO: Prevent aliens stacking --> Mutliple Waves stacking
            
            var colourRange = basic ? 3 : 6;
            var yWaveOffset = -50;
            var availableLane;
            var perWave = aliensPerWave > 6 ? 6 : aliensPerWave;
            var waves = aliensPerWave > 6 ? numOfWaves + (Math.floor(aliensPerWave / 6)) : numOfWaves;

            console.log("NumOfWaves:" + waves + " | PerWave:" + perWave);
            for(let i = 0; i < waves; i++){
                // For Each Wave
                availableLane = [false, false, false, false, false, false]; // Reset Lane Availability

                for(let j = 0; j < perWave; j++){
                    // Pick Alien Colour
                    var colourPicked = Math.floor(Math.random() * (colourRange));

                    // Generate Alien
                    var new_alien;
                    if(colourPicked < 3) new_alien = new objects.PrimaryAlien(managers.Game.assetManager, colourPicked);
                    else new_alien = new objects.SecondaryAlien(managers.Game.assetManager, colourPicked, 0 , yWaveOffset);
                    
                    // Set Y Offset for "Wave"
                    new_alien.y = yWaveOffset;

                    // Put into a "Lane" -> Ensuring no overlaps
                    // var pickedLane = Math.floor((Math.random() * 6) + 1);
                    var pickedLane;
                    do { 
                        pickedLane = Math.floor((Math.random() * 6 + 1));
                        console.log("PickedLane: " + (pickedLane));
                    } while(availableLane[pickedLane] == true);
                    // if(availableLane[pickedLane] = true){

                    this.listOfAllAliens.forEach(alien => {
                        if (new_alien.y >= (alien.y + 10) && new_alien.y <= (alien.y - 10)){
                            new_alien.y -= 50;
                        }
                    })

                    // }
                    availableLane[pickedLane] = true;
                    console.log("Final-PickedLane: " + (pickedLane));
                    this.Spawn(new_alien, pickedLane);
                    this.listOfAllAliens.push(new_alien);
                }
                yWaveOffset -= 1000;
            }
        }

        /*  6 Lanes
            1 - 375
            2 - 550
            3 - 725
            4 - 900
            5 - 1075
            6 - 1250
        */

        /*
            X - Each wave should be pre-determined (Random alien colours?)
            X - Each wave should NOT reload at the top ? 
            O - Score should be assigned to kills & Calculated

        */
    }
}
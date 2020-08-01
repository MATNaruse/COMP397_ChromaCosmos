module levels{
    export class FleetGenerator{
        private listOfAllAliens: objects.Alien[];
        private assetManager: createjs.LoadQueue;

        constructor(alienList: objects.Alien[]){
            this.listOfAllAliens = alienList;
        }

        public Spawn(alien:objects.Alien, lane:number){
            var baseX: number = 200;
            var increment: number = 175;
            alien.x = baseX + (increment * lane);
            if(alien instanceof objects.PrimaryAlien){
                alien.startX = alien.x ;
                alien.x += Math.floor(Math.random() * 1 - 1);
            }
            
        }

        public GenerateWaves(numOfWaves: number, aliensPerWave:number, basic:boolean = true){
            var colourRange = basic ? 3 : 6;
            var yWaveOffset = -50;
            for(let i = 0; i < numOfWaves; i++){
                // For Each Wave
                for(let j = 0; j < aliensPerWave; j++){
                    // Pick Alien Colour
                    var colourPicked = Math.floor(Math.random() * (colourRange));
                    //console.log("PICKED " + colourPicked + ": " +  objects.ColourPalette[colourPicked]);

                    // Generate Alien
                    var new_alien = new objects.PrimaryAlien(managers.Game.assetManager, colourPicked);
                    
                    // Set Y Offset for "Wave"
                    new_alien.y = yWaveOffset;
                    //console.log("SET YOFF" + yWaveOffset);

                    // Put into a "Lane"
                    this.Spawn(new_alien, Math.floor((Math.random() * (6-1) + 1)));
                    this.listOfAllAliens.push(new_alien);
                }
                yWaveOffset -= 1000;
            }

            // return this.listOfAllAliens;
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
            - Each wave should be pre-determined (Random alien colours?)
            - Each wave should NOT reload at the top ? 
            - Score should be assigned to kills & Calculated

        */
    }
}
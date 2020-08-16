module managers{
    export class AlienGenerator{
        private listOfAllAliens: objects.Alien[];
        // private LaneXValues: number[] = [375, 550, 725, 900, 1075, 1250];
        private LaneXValues: number[] = [100, 300, 500, 700, 900, 1100];
        private Waves: Array<objects.Alien[]> = new Array<objects.Alien[]>();

        constructor(alienList: objects.Alien[]){
            this.listOfAllAliens = alienList;
        }

        public GenerateRandomWaves(numOfWaves: number, aliensPerWave:number = 5, basic:boolean = true){
            var colourRange = basic ? 3 : 6;
            var perWave = aliensPerWave > 6 ? 6 : aliensPerWave;
            var waves = aliensPerWave > 6 ? numOfWaves + (Math.floor(aliensPerWave / 6)) : numOfWaves;
            var yWaveOffset = -50;

            for(var i = 0; i < waves; i++){
                // For Every Wave
                var aliensInWave: objects.Alien[] = [];
                var currentLane = 0;

                // Creating Aliens
                for(var j = 0; j < perWave; j++){
                    // Selecting Colour
                    var colourPicked = Math.floor(Math.random() * (colourRange));

                    // Generating Alien
                    var new_alien;
                    if(colourPicked < 3) new_alien = new objects.PrimaryAlien(colourPicked, this.LaneXValues[currentLane], yWaveOffset);
                    else new_alien = new objects.SecondaryAlien(colourPicked, this.LaneXValues[currentLane], yWaveOffset);

                    currentLane += 1;
                    
                    aliensInWave.push(new_alien);
                    // console.log("WAVE["+i+"]:ALIEN["+j+"]:startX="+ new_alien.x + "|startY="+ new_alien.y);
                    // console.log("WAVE["+i+"]:ALIEN["+j+"]:yWaveOffset="+ yWaveOffset);
                }
                yWaveOffset -= 500;
                this.Waves.push(aliensInWave);
            }
            this.DeployWaves();
        }

        public GenerateStaticWaves(template: Array<number[]>){
            template.forEach(row => {
                console.log(row);
            })
            var waves: Array<objects.Alien[]> = new Array<objects.Alien[]>();
            var yWaveOffset:number = -50;
            var currWave: objects.Alien[];
            var currLane: number;
            template.forEach(row => {
                currLane = 0;
                currWave = [];
                row.forEach(num => {
                    var new_alien;

                    // Create a new alien based on colour index, anything else returns null
                    switch(num){
                        case(0):
                            new_alien = new objects.PrimaryAlien(0, this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case(1):
                            new_alien = new objects.PrimaryAlien(1, this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case(2):
                            new_alien = new objects.PrimaryAlien(2, this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case(3):
                            new_alien = new objects.SecondaryAlien(3, this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case(4):
                            new_alien = new objects.SecondaryAlien(4, this.LaneXValues[currLane], yWaveOffset);
                            break;
                        case(5):
                            new_alien = new objects.SecondaryAlien(5, this.LaneXValues[currLane], yWaveOffset);
                            break;
                        default:
                            new_alien = null;
                            break;
                    }
                    currWave.push(new_alien);
                    currLane += 1;
                })
                yWaveOffset -= 500;
                waves.push(currWave);
            })

            this.Waves = waves;
            this.DeployWaves();
        }

        public DeployWaves(empty: boolean = false){
            this.Waves.forEach(list => {
                list.forEach(alien =>{
                    if(alien != null){
                        this.listOfAllAliens.push(alien);
                        console.log("ALIEN["+alien.name+"]:startX="+ alien.x + "|startY="+ alien.y);
                    } 
                })
            })

            if(empty){
                this.Waves = new Array<objects.Alien[]>();
            }
        }

        // Static Alien Waves
        // Note: Spawns rows in order. Visually here, it would be top to bottom
        public static LevelOneWaves = [
            [9,9,2,2,9,9],
            [9,1,9,9,1,9],
            [0,9,9,9,9,0],
            [9,9,0,0,9,9],
            [1,0,1,1,0,1],
            [0,1,2,2,1,0],
            [2,2,2,2,2,2],
            [1,1,1,1,1,1],
            [0,0,0,0,0,0]
        ];

        public static LevelTwoWaves = [
            [9,9,0,0,9,9],
            [9,1,9,9,1,9],
            [2,9,9,9,9,2],
            [9,3,9,9,3,9],
            [9,9,9,9,9,9],
            [4,9,9,9,9,4],
            [9,9,9,9,9,9],
            [9,5,9,9,5,9],
            [9,9,9,9,9,9],
            [5,4,3,3,4,5]
        ];
    }
}
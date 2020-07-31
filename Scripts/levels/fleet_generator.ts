module levels{
    export class FleetGenerator{
        private laneXSpacing:number;
        private waves: Array<levels.Wave>;

        constructor(lane_space: number){
            this.laneXSpacing = lane_space;
            this.waves = [];
        }

        public DeployFleet(){
            this.waves.forEach(w =>{
                
            })
        }
    }

    export class Wave{
        private wave_row: Array<objects.Enemy>;
        constructor(){
            this.wave_row = new Array<objects.Enemy>(9);            
        }

        public InsertEnemy(enemy: objects.Enemy, lane: number){
            this.wave_row[lane] = enemy
        }

        public LaunchWave(): Array<objects.Enemy>{
            return this.wave_row;
        }
    }
}
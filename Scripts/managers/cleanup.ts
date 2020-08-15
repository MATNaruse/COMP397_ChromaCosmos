module managers{
    export class CleanUp{
        public static Projectiles(projList: Array<objects.Projectile>): Array<objects.Projectile>{
            var projToDelete;
            var projToReturn;
            projToDelete = projList.filter(b => b.isOffScreen);
            projToReturn = projList.filter(b => !b.isOffScreen);

            if (projToDelete.length > 0){
                //console.log("projToDelete:" + projToDelete.length);
                projToDelete.splice(0, projToDelete.length);
                //console.log("projToDeleteConfirm:" + projToDelete.length);
            }

            return projToReturn;

        }

        public static Aliens(aliensList: Array<objects.Alien>): Array<objects.Alien>{
            var aliensToDelete;
            var aliensToReturn;
            aliensToDelete = aliensList.filter(a => a.isDead);
            aliensToReturn = aliensList.filter(a => !a.isDead);
            aliensList.forEach(a => {
                aliensToDelete.forEach(d =>{
                    if(a instanceof objects.SecondaryAlien && d instanceof objects.SecondaryAlien){
                        if(a.LeftAlien == d) a.LeftAlien = null;
                        if(a.RightAlien == d) a.RightAlien = null;
                    }
                })
            })
            if (aliensToDelete.length > 0){
                //console.log("aliensToDelete:" + aliensToDelete.length);
                aliensToDelete.splice(0, aliensToDelete.length);
                //console.log("aliensToDeleteConfirm:" + aliensToDelete.length);
            }

            return aliensToReturn;
        }
    }
}
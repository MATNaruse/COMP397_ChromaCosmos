module managers{
    export class CleanUp{
        public static Projectiles(projList: Array<objects.Projectile>){
            var projToDelete;
            projToDelete = projList.filter(b => b.isOffScreen);
            projList = projList.filter(b => !b.isOffScreen);

            if (projToDelete.length > 0){
                console.log("projToDelete:" + projToDelete.length);
                projToDelete.splice(0, projToDelete.length);
                console.log("ToDeleteConfirm:" + projToDelete.length);
            }
        }

        public static Aliens(aliensList: Array<objects.Alien>){
            var aliensToDelete;
            aliensToDelete = aliensList.filter(a => a.isDead);
            aliensList = aliensList.filter(a => !a.isDead);

            if (aliensToDelete.length > 0){
                console.log("projToDelete:" + aliensToDelete.length);
                aliensToDelete.splice(0, aliensToDelete.length);
                console.log("ToDeleteConfirm:" + aliensToDelete.length);
            }
        }
    }
}
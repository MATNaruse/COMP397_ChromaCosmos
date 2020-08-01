module managers{
    export class PlayerShots{
        // TODO: Move Player Shot management here (?)
        public static OnScreen(scene: scenes.LevelBase){
            if(scene.playerShots.length > 0){
                scene.playerShots.forEach(b => {
                    if(!b.isOffScreen) b.Update();
                    else scene.removeChild(b);
                });
                //console.log("Bullets Left:" + scene.playerShots.length);

                scene.playerShots.forEach(bullet => {
                    scene.aliens.forEach(alien => {
                        if(managers.Collision.Detect(bullet, alien)){
                            managers.Game.Score += alien.ScoreValue;
                            scene.removeChild(bullet);
                            scene.removeChild(alien);
                        };

                    });
                });
            }
        }
    }
}
module managers{
    export class PlayerShots{
        public static OnScreen(scene: scenes.LevelBase){
            if(scene.playerShots.length > 0){
                scene.playerShots.forEach(b => {
                    if(!b.isOffScreen) b.Update();
                    else scene.removeChild(b);
                });

                scene.playerShots.forEach(bullet => {
                    scene.aliens.forEach(alien => {
                        if(managers.Collision.VerticalDetect(bullet, alien)){
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
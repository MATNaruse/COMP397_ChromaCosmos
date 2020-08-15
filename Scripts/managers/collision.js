var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.VerticalDetect = function (Incoming, Target) {
            // Collision Detection -> Temp until covered in class
            // Breaking down "Bullet Hit" logic
            /*
                1. Check bullet x, y
                2. Check alien x, y
                3. If bullet x, y matches alien x,y "range"
                    a. alien & bullet destroyed
            */
            // if(Incoming.x < (Target.x + (Target.halfW * Target.ImgScale)) && Incoming.x > (Target.x -(Target.halfW * Target.ImgScale)))
            if (Incoming.x < (Target.GetRightEdge()) && Incoming.x > (Target.GetLeftEdge())) { //If its within the object's range on X axis
                if (Incoming.y < (Target.GetBottomEdge()) && Incoming.y > (Target.GetTopEdge())) {
                    console.log("HIT!!!");
                    // Handling Object Type Encounters:
                    // If Alien encounters Player
                    if (Incoming instanceof objects.Alien && Target instanceof objects.Player) {
                        if (Incoming.attackedPlayer == false) {
                            Incoming.attackedPlayer = true; // This prevents the alien from constantly harming the player as long as they are collided
                            return true;
                        }
                        return false;
                    }
                    // If Bullet encounters Alien
                    else if (Incoming instanceof objects.Projectile && Target instanceof objects.Alien && Incoming.colour == Target.colour) {
                        console.log("ALIEN KILLED!!!");
                        Incoming.isOffScreen = true;
                        Target.isDead = true;
                        var aliendeadsound = "alienDie" + Math.floor((Math.random() * (6 - 1) + 1));
                        console.log(aliendeadsound);
                        createjs.Sound.play(aliendeadsound).setVolume(3);
                        return true;
                    }
                    return false;
                }
            }
            return false;
        };
        Collision.HorizontalDetect = function (AlienA, AlienB) {
            if (AlienA instanceof objects.SecondaryAlien && AlienB instanceof objects.SecondaryAlien) {
                if (AlienA.CollisionActive && AlienB.CollisionActive && AlienA != AlienB) {
                    if (AlienA.x > AlienB.x) {
                        if (AlienA.GetTopEdge() <= (AlienB.GetBottomEdge() + 10)) {
                            if (AlienB.GetRightEdge() > AlienA.GetLeftEdge()) {
                                if (AlienA.AlienLinkCheck(AlienB) && AlienB.AlienLinkCheck(AlienA)) {
                                    AlienA.LeftAlien = AlienB;
                                    AlienB.RightAlien = AlienA;
                                }
                            }
                        }
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
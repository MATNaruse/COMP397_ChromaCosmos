module managers{
    export class Collision{
        public static Detect(Incoming:objects.GameObject, Target:objects.GameObject){
            
            // Collision Detection -> Temp until covered in class
            // Breaking down "Bullet Hit" logic
            /*
                1. Check bullet x, y
                2. Check alien x, y
                3. If bullet x, y matches alien x,y "range"
                    a. alien & bullet destroyed
            */

            if(Incoming.x < (Target.x + (Target.halfW * Target.ImgScale)) && Incoming.x > (Target.x -(Target.halfW * Target.ImgScale)))
            {   //If its within the object's range on X axis
                if(Incoming.y < (Target.y + (Target.halfH * Target.ImgScale)) && Incoming.y > (Target.y - (Target.halfH * Target.ImgScale))){
                    console.log("HIT!!!")
                    if(Incoming instanceof objects.Alien){
                        if(Incoming.attackedPlayer == false){
                            Incoming.attackedPlayer = true;
                            return true;
                        }
                        return false;
                    }
                    return true
                }
            }
            return false;
        }
}
}
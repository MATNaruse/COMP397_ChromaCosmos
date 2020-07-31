module Collision{
    export function Detect(Incoming:objects.GameObject, Target:objects.GameObject){
        
        // Collision Detection -> Temp until covered in class
        // Breaking down "Bullet Hit" logic
        /*
            1. Check bullet x, y
            2. Check alien x, y
            3. If bullet x, y matches alien x,y "range"
                a. alien & bullet destroyed
        */
        
        var inHitbox = false;
        
        // Reimplemented to adjust the Bitmap Scaling
        // TODO: Compensate for bitmap Scaling in gameobject.ts
        if(Incoming.x < (Target.x + (Target.halfW * Target.ImgScale)) && Incoming.x > (Target.x -(Target.halfW * Target.ImgScale)))
        {   //If its within the object's range on X axis
            if(Incoming.y < (Target.y + (Target.halfH * Target.ImgScale)) && Incoming.y > (Target.y - (Target.halfH * Target.ImgScale))){
                console.log("HIT!!!")
                return true
            }
        }
        return inHitbox;
    }
}
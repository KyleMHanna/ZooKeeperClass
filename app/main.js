
import { AllyvsBob, KylevsGary  } from "./Controllers/ZooList.js"
import { Ape } from "./Modules/Ape.js";
import { Bobcat } from "./Modules/Bobcat.js";
import { Chimpmunk } from "./Modules/Chimpmunk.js";



var allyvsbob = new AllyvsBob()
var kylevsgary = new KylevsGary()


window['app'] = {
    controllers: {
        allyvsbob,
        kylevsgary
    }
}

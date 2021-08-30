import { Ape } from "../Modules/Ape.js"
import { Bobcat } from "../Modules/Bobcat.js"
import { Chimpmunk } from "../Modules/Chimpmunk.js"
import { Dolphin } from "../Modules/Dolphin.js"
import { Elephant } from "../Modules/Elephant.js"
import { Falcon } from "../Modules/Falcon.js"
import { GrizzlyBear } from "../Modules/GrizzlyBear.js"
import { HoneyBadger } from "../Modules/HoneyBadger.js"
import { Iguana } from "../Modules/Iguana.js"
import { Jerboa } from "../Modules/Jerboa.js"
import { KomodoDragon } from "../Modules/KomodoDragon.js"
import { Liger } from "../Modules/Liger.js"
import { Moose } from "../Modules/Moose.js"
import { Numbat } from "../Modules/Numbat.js"
import { Oyster } from "../Modules/Oyster.js"
import { Pig } from "../Modules/Pig.js"
import { Quail } from "../Modules/Quail.js"
import { RattleSnake } from "../Modules/RattleSnake.js"
import { Seal } from "../Modules/Seal.js"
import { Tuna } from "../Modules/Tuna.js"
import { Uakari } from "../Modules/Uakari.js"
import { Vulture } from "../Modules/Vulture.js"
import { Walrus } from "../Modules/Walrus.js"
import { Xerus } from "../Modules/Xerus.js"
import { Yak } from "../Modules/Yak.js"
import { Zonkey } from "../Modules/Zonkey.js"

let ally = new Ape('ally')
let bob = new Bobcat('bob')

let Kyle = new KomodoDragon('Kyle')
let Gary = new GrizzlyBear('Gary')



export class AllyvsBob {
    
    allyvsbob() {
        if (ally.dangerous === bob.dangerous)
            alert('they both dangerous')
    }
}

export class KylevsGary {
    kylevsgary() {
        if (Kyle.leg > Gary.legs)
            alert('Kyle the Dragon is King of the jungle')
    }
}
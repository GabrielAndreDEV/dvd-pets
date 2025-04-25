import Pet from './pet'
import sprite from '/images/pets/scarry_dog.png'

export default class ScarryDog extends Pet {
    static SPRITE_PATH = sprite
    static NAME = 'Scarrydog'
    static PRICE = 100000
    static TYPE = 'scarry_dog'
    static DEFAULT_SCORE_INCREMENT = 50
    static INCREMENT_PET_BUY = 0
    static BUY_LIMIT = 1

    constructor(gameInstace, params, utils) {
        const defaultParams = {
            ...params,
            name: 'Cachorrinho',
            description: '????????????????????????????????????????????????????????????? scarry...',
            type: ScarryDog.TYPE,
            spritePath: ScarryDog.SPRITE_PATH,
            spriteDirection: Pet.SPRIT_LEFT_DIRECTION,
            scoreIncrement: ScarryDog.DEFAULT_SCORE_INCREMENT,
            buyLimit: ScarryDog.BUY_LIMIT,
            width: 100 * 3.6,
            height: 150 * 3.6,
            speed: { x: Pet.DEFAULT_SPEED_X * 0.75, y: Pet.DEFAULT_SPEED_Y * 0.75 }
        }

        super(gameInstace, defaultParams, utils)
    }
}

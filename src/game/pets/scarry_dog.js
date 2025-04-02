import Pet from './pet'
import sprite from '/images/pets/scarry_dog.webp'

export default class ScarryDog extends Pet {
    static SPRITE_PATH = sprite
    static NAME = 'Cachorrinho'
    static PRICE = 666
    static TYPE = 'scarry_dog'

    constructor(gameInstace, params, utils) {
        const defaultParams = {
            ...params,
            name: 'Cachorrinho',
            description: '?????????????????????????????????????????????????????????????',
            type: ScarryDog.TYPE,
            spritePath: ScarryDog.SPRITE_PATH,
            spriteDirection: Pet.SPRIT_LEFT_DIRECTION
        }

        super(gameInstace, defaultParams, utils)
    }
}

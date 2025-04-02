import tomatoBallImg from '/images/upgrades/tomato_ball.png'
import tomatoRiceImg from '/images/upgrades/tomato_rice.png'
import tomatoToyImg from '/images/upgrades/tomato_toy.png'
import butterImg from '/images/upgrades/butter.png'
import butterBoneImg from '/images/upgrades/buttery_bone.png'

export const IMPROVEMENTS = [
    {
        type: 'tomato_ball',
        target: 'catomato',
        name: 'Bola de tomate',
        description:
            'Uma bola identica a um tomate, os gatos adoram brincar com ela, ele corre bastante pra pega-la aumentando sua velocidade em 20%',
        price: 250,
        spritPath: tomatoBallImg,
        increment: 1.2
    },
    {
        type: 'tomato_rice',
        target: 'catomato',
        name: 'Comida de gato',
        description:
            'Um tipo de comida especial para gatos tomates, eles ficam satisfeitos por mais tempo aumentando a geração de love em 10%',
        price: 2500,
        spritPath: tomatoRiceImg,
        increment: 1.1
    },
    {
        type: 'tomato_toy',
        target: 'catomato',
        name: 'Brinquedo de tomate',
        description:
            'Todos os seus gatos tomates adoram esse brinquedo, para cada gato tomate que você tem, você ganha 1% de geração de love a mais',
        price: 25000,
        spritPath: tomatoToyImg,
        increment: 1.01
    },
    {
        type: 'butter',
        target: 'breadoggo',
        name: 'Manteiga',
        description:
            'Uma manteiga especial para cachorros pães, CHEGA A MANTEIGA DERRETE, aumentando a geração de love em 20%',
        price: 2500,
        spritPath: butterImg,
        increment: 1.2
    },
    {
        type: 'buttery_bone',
        target: 'breadoggo',
        name: 'Osso Amanteigado',
        description:
            'Um osso delicinha para os seus cachorros pães, eles são totalmente atraidos por ele, aumentando a sua velocidade em 10%',
        price: 25000,
        spritPath: butterBoneImg,
        increment: 1.1
    },
    {
        type: 'catricio_fan',
        target: 'catricio',
        name: 'Fã do Catricio',
        description:
            'Você gosta tanto do Catricio que faz o melhor cafuné do mundo dobrando seu love por Carinho',
        price: 100,
        increment: 2
    },
    {
        type: 'pet_lover',
        target: 'catricio',
        name: 'Amante de Pets',
        description:
            'Você ama tanto seus pets que eles ficam mais felizes com você, aumentando seu love por Carinho para cada pet que você tem em 1',
        price: 1000,
        increment: 1
    }
]

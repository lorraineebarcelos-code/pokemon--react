import bulbasauro from '../assets/bulbasauro.webp'
import squirtle from '../assets/squirtle.webp'
import charmander from '../assets/charmander.webp'
import charmeleonimagem from '../assets/Charmeleon.png'
import ivysaur from '../assets/ivysaur.png'
import wartortle from '../assets/Wartorthe.png'
const Pokemons = {
    bulbasauro: {
        id:1,
        Evolucao: 'ivysaur',
        imagem: bulbasauro,
    },
    ivysaur: {
        id:2,
        Evolucao: 'venusaur',
        imagem: ivysaur,
    },
    
    squirtle: {
        id:3,
        Evolucao: 'wartortle',
        imagem: squirtle,
    },
    wartortle: {
        id:4,
        Evolucao: 'blastoise',
        imagem: wartortle,
    },
    charmander: {
        id:5,       
        Evolucao: 'charmeleon',
        imagem: charmander,
    },
    charmeleon: {
        id:5,
        Evolucao: 'charizard',
        imagem: charmeleonimagem,
    }
    }


export default Pokemons

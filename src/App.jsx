import { useState } from 'react'
import './App.css'
//import bulbasauro from './assets/bulbasauro.webp'
//import squirtle from './assets/squirtle.webp'
//import charmander from './assets/charmander.webp'
//import Pokemoncard from './assets/Pokemoncard/Pokemoncard'
//import Pikachu from './assets/Pikachu.png'
import PokemonButton from './Components/PokemonButton/Pokemonbutton'
import Pokemoncard from './Components/Pokemoncard/Pokemoncard'
import pokemons from './Data/Pokemons'


  function App(){
  
    const [listaPokemons, setListaPokemons] = useState([
      { nome: "charmander", estagio: 1, imagem: pokemons['charmander'].imagem } ,
      { nome: "squirtle", estagio: 1, imagem: pokemons['squirtle'].imagem } ,
      { nome: "bulbasauro", estagio: 1, imagem: pokemons['bulbasauro'].imagem }
    ])

  function EvoluirPokemon(nomePokemon) {

    console.log(nomePokemon)

    const novalista = listaPokemons.map((Pokemon) => {

      if (Pokemon.nome !== nomePokemon) {
        return Pokemon
      }

      const proximaEvolucao = pokemons[Pokemon.nome].Evolucao

      if (!proximaEvolucao) {
        return Pokemon
      }

      return {
        nome: proximaEvolucao,
        estagio: Pokemon.estagio + 1,
        imagem: pokemons[proximaEvolucao].imagem
      }
    })

    setListaPokemons(novalista)
  }

  return (
      <>
        <h1>Ola Mundo :D</h1>
        
        <section id="center">
          {listaPokemons.map((Pokemon) => (
          
<Pokemoncard key={Pokemon.nome} nome={Pokemon.nome}
estagio={Pokemon.estagio} 
imagem={pokemons[Pokemon.nome].imagem}
evoluirPokemon={EvoluirPokemon}
 />  
 
 ))}
  <Pokemoncard nome={"Pikachu"} 
estagio={1} 
imagem={pokemons['charmander'].imagem}
 />
  </section>
  <PokemonButton titulo={'Botão Pokemon'} cor={'yellow'} corDaLetra={'black'}/>

  <PokemonButton titulo={'Botão Secundario'} cor={'yellow'} corDaLetra={'black'}
  /> 
    </>
    )
  }
export default App
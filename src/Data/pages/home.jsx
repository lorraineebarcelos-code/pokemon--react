import { useState } from "react";
import "../../App.css";
import Pokemoncard from "../../Components/Pokemoncard/Pokemoncard";
import pokemons from "../Pokemons";

function Home() {

    const [listaPokemons, setListaPokemons] = useState([
      { nome: "charmander", estagio: 1, imagem: pokemons['charmander'].imagem } ,
      { nome: "squirtle", estagio: 1, imagem: pokemons['squirtle'].imagem } ,
      { nome: "bulbasauro", estagio: 1, imagem: pokemons['bulbasauro'].imagem }
    ]);

  function EvoluirPokemon(nomePokemon) {

    console.log(nomePokemon);

    const novalista = listaPokemons.map((Pokemon) => {

      if (Pokemon.nome !== nomePokemon) {
        return Pokemon;
      }

      const proximaEvolucao = pokemons[Pokemon.nome].Evolucao

      if (!proximaEvolucao) {
        return Pokemon;
      }

      return {
        nome: proximaEvolucao,
        estagio: Pokemon.estagio + 1,
        imagem: pokemons[proximaEvolucao].imagem,
      };
    });

    setListaPokemons(novalista)
  }

 return (
  <main>
    <h1>Pokédex</h1>

    <section id="center">
      {listaPokemons.map((Pokemon) => (
        <Pokemoncard
          key={Pokemon.nome}
          nome={Pokemon.nome}
          estagio={Pokemon.estagio}
          imagem={pokemons[Pokemon.nome].imagem}
          evoluirPokemon={EvoluirPokemon}
        />
      ))}
    </section>
  </main>
);
}
export default Home ;
function PokemonCard({ nome, imagem, estagio, evoluirPokemon }){
    const displayName = nome ? nome[0].toUpperCase() + nome.slice(1) : ''
    return (
         <div className='CardPokemon'>
            <img
  src={imagem}
  width={200}
  height={210}
  alt={`Imagem do Pokémon ${displayName}`}
/>
            <h2>{displayName}</h2>
            <p>Estágio: {estagio}</p>
            <button onClick={() => evoluirPokemon(nome)}>
  Evoluir {displayName}
</button>
          </div>
    )
}
export default PokemonCard
// Récupérer l'url de l'API (url de tout les pokémons)
// fetch l'API (récupérer le json de l'API)
  // Avec la reponse
const list = document.querySelector(".list");

const fetchPokemon = async (pokemon) => {
  try {
    // Récupérer l'url de chaque pokémon
    const pokemonUrl = pokemon.url;
    // On fetch la nouvelle url
    const pokemonResponse = await fetch(pokemonUrl);
    const pokemonData = await pokemonResponse.json();
    // On récupère le name
    const name = pokemonData.name;
    // On récupère l'image
    const img = pokemonData.sprites.front_default;
    // On récupère les types
    const types = pokemonData.types.map((type) => {
      return type.type.name;
    })
    const typesString = types.join(", ");
    // On crée la div html
    const cardPokemon = `<div class="info">
        <img src="${img}" class="pokemon-card-image" />
        <h2 class="pokemon-card-title">${name}</h2>
        <p class="pokemon-card-subtitle">${typesString}</p>
      </div>`
    // On l'ajoute au html (la liste)
    list.innerHTML += cardPokemon;
    // list.insertAdjacentHTML("beforeend", cardPokemon)
  } catch (error) {
    console.error("Erreur :", error)
  }
}


const fetchAllPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
  try {
    const response = await fetch(url)
    const data = await response.json()
    // On récupère la div list
    // Récupérer l'array results et On itère sur l'array
    const results = data.results
    results.forEach((pokemon) => {
      fetchPokemon(pokemon);
    })
  } catch (error) {
    console.error("Erreur :", error)
  }
}

fetchAllPokemon();




let url = "https://pokeapi.co/api/v2/pokemon/#{id}";

const getPokemon = async (id) => {
  url = url.replace("#{id}", id);

  const res = await fetch(url);

  return res.json();
};

const drawPokemon = async () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const pokemon = await getPokemon(randomNumber);

  const nameNode = document.querySelector('.pokedex-pokemon-name');

  nameNode.innerHTML = pokemon.name;
  
};

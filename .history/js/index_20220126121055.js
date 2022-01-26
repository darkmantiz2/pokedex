let url = 'https://pokeapi.co/api/v2/pokemon/#{id}';


const getPokemon = async (id) => {
    url = url.replace('#{id}', id);

    const res = await fetch(url);
    const pokemon = await res.json();

    console.log(pokemon);

}

const randomNumber = Math.floor(Math.random() * 1000);

getPokemon(randomNumber);
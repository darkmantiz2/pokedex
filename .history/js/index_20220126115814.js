const url = 'https://pokeapi.co/api/v2/pokemon/#{id}';


const getPokemon = async () => {
    const res = await fetch(url);

    console.log(res);
}

getPokemon();



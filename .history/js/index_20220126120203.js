let url = 'https://pokeapi.co/api/v2/pokemon/#{id}';


const getPokemon = async (id) => {
    url = url.replace('#{id}', id);

    const res = await fetch(url);

    console.log(res);
}

getPokemon(30);



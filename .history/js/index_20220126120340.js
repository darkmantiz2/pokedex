let url = 'https://pokeapi.co/api/v2/pokemon/#{id}';


const getPokemon = async (id) => {
    url = url.replace('#{id}', id);

    const res = await fetch(url);

    const data = res.body.json();

    console.log(data);
}

getPokemon(30);



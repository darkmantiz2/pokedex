const url = 'https://pokeapi.co/api/v2/pokemon/#{id}';

const res = await fetch(url);

console.log(res);
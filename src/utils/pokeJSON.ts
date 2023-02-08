
import { SmallPokemon } from "@/interfaces";
import { PokeWithSprite } from "./getPokemonInfo";

const readPokemonsFromJSON = (fs: any): PokeWithSprite[] => JSON.parse(fs.readFileSync("./temp/pokeRequest.json", 'utf-8')) || []

const shouldSaveToJson = (pokemonToSave: PokeWithSprite, fs: any) => {
    if (pokemonToSave.id <= 151) {
        return false;
    }

    // Check pokemon in json
    const pokemons = readPokemonsFromJSON(fs);

    const pokemon = pokemons.find(({ id }) => pokemonToSave.id === id)
    if (!pokemon) {
        return true
    }

    return false;
}

const savePokemon = (pokemon: PokeWithSprite, fs: any) => {
    const pokemons = readPokemonsFromJSON(fs);
    pokemons.push(pokemon)
    fs.writeFileSync("./temp/pokeRequest.json", JSON.stringify(pokemons))
}

const parseJSONToSmallPokemon = (fs: any) => {
    const pokemonsFromJSON: SmallPokemon[] = readPokemonsFromJSON(fs).map((p) => ({
        id: p.id.toLocaleString(),
        img: p.sprites.versions?.['generation-v']['black-white'].animated?.front_default || "",
        name: p.name,
        url: "https://pokeapi.co/api/v2/pokemon/1/"
    }));

    return pokemonsFromJSON
}


export default {
    savePokemon,
    readPokemonsFromJSON,
    shouldSaveToJson,
    parseJSONToSmallPokemon,
}

import { PokeWithSprite } from "./getPokemonInfo";

const readPokemonsFromJSON = (fs: any): PokeWithSprite[] => JSON.parse(fs.readFileSync("./temp/pokeRequest.json", 'utf-8')) || []

const shouldSaveToJson = (pokemonToSave: PokeWithSprite, fs: any) => {
    if (pokemonToSave.id < 151) {
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

export const savePokemon = (pokemon: PokeWithSprite, fs: any) => {
    const pokemons = readPokemonsFromJSON(fs);
    pokemons.push(pokemon)
    fs.writeFileSync("./temp/pokeRequest.json", JSON.stringify(pokemons))
}


export default {
    savePokemon,
    readPokemonsFromJSON,
    shouldSaveToJson
}
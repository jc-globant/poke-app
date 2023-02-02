import { PokemonResponse, SmallPokemon } from '../interfaces/pokemon-list';

export const parsePokemonFromApi = ({ name, url }: PokemonResponse): SmallPokemon => {

    const urlParts = url.split('/');
    const id = urlParts[urlParts.length - 2];
    // const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return {
        name,
        url,
        id,
        img
    }

}
import { pokeApi } from "@/api";
import { Pokemon, Sprites } from '@/interfaces';

export interface PokeWithSprite {
    id: number,
    name: string,
    sprites: Sprites

}


export const getPokemonInfo = async (name: string) => {
    try {
        const { data } = await pokeApi<Pokemon>(`/pokemon/${name}`);

        const pokemon: PokeWithSprite = {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        };

        return pokemon;

    } catch (error) {
        return null
    }
}
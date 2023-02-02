import { Grid } from '@nextui-org/react'
import React from 'react'
import { SmallPokemon } from '../../interfaces/pokemon-list';
import { PokeCard } from './PokeCard';

interface Props {
    pokemons: SmallPokemon[]
}


export const PokemonList = ({ pokemons }: Props) => {
    return (
        <Grid.Container gap={2} justify="flex-start">
            {
                pokemons.map((pokemon) => (
                    <Grid xs={12} sm={4} md={3} key={pokemon.id}>
                        <PokeCard pokemon={pokemon} />
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}

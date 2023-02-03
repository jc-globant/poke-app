import { Card, Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"
import { FavoritePokemon } from '../../utils/localFavorites';

interface Props {
    favorites: FavoritePokemon[]
}


export const FavoritePokemons = ({ favorites }: Props) => {

    return <Grid.Container gap={2} direction="row" justify='flex-start'>
        {
            favorites.map(pokemon => (
                <Grid xs={12} sm={4} md={3} key={pokemon.id}>
                    <FavoriteCardPokemon pokemon={pokemon} />
                </Grid>
            ))
        }
    </Grid.Container>
}
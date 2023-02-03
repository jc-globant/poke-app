import { Card, Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"

interface Props {
    favorites: number[]
}


export const FavoritePokemons = ({ favorites }: Props) => {

    return <Grid.Container gap={2} direction="row" justify='flex-start'>
        {
            favorites.map(id => (
                <Grid xs={12} sm={4} md={3} key={id}>
                    <FavoriteCardPokemon id={id} />
                </Grid>
            ))
        }
    </Grid.Container>
}
import { Card, Grid } from "@nextui-org/react"

interface Props {
    favorites: number[]
}


export const FavoritePokemons = ({ favorites }: Props) => {

    return <Grid.Container gap={2} direction="row" justify='flex-start'>
        {
            favorites.map(id => (
                <Grid xs={12} sm={4} md={3} key={id}>
                    <Card isHoverable isPressable css={{ padding: 10 }}>
                        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} />
                    </Card>
                </Grid>
            ))
        }
    </Grid.Container>
}
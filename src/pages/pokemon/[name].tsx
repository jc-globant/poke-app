import { Layout } from '../../components/layouts/Layout';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import pokeApi from '@/api/pokeApi';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { Text, Grid, Card, Button, Container, Image } from '@nextui-org/react';

interface Props {
    pokemon: Pokemon
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const imageSrc = pokemon.sprites.other?.home.front_default || '/no-image.png';

    return (
        <Layout title={`Pokémon App | ${pokemon.name}`}>
            <Grid.Container gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={imageSrc}
                                alt={pokemon.name}
                                width={200}
                                height={200}
                                objectFit={"cover"}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: "space-between" }}>
                            <Text h2 transform='capitalize'>{pokemon.name}</Text>
                            <Button color="error" flat ripple>
                                Save to favorites
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex'>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                            </Container>

                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
};


//Se declaran los paths staticos para poder trabajar con ellos
//En este caso se declaran 151 paths 
export const getStaticPaths: GetStaticPaths = async () => {

    const { data: { results } } = await pokeApi<PokemonListResponse>('/pokemon?limit=151');

    const names = results.map(d => d.name);

    return {
        paths: names.map((name) => ({
            params: { name }
        })),
        fallback: false //Retornara un 404 si el path no esta definido
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { name } = ctx.params as { name: string };
    const { data } = await pokeApi<Pokemon>(`/pokemon/${name}`)

    return {
        props: {
            pokemon: data
        }
    }
}


export default PokemonPage
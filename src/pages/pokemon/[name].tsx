import { Layout } from '../../components/layouts/Layout';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import pokeApi from '@/api/pokeApi';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { Text } from '@nextui-org/react';

interface Props {
    pokemon: Pokemon
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout title='Some pokemon'>
            {/* {JSON.stringify(pokemon)} */}
            <Text transform='capitalize' h2>{pokemon.name}</Text>
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
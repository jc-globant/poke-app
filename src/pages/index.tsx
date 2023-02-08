import fs from 'fs'
import { NextPage, GetStaticProps } from 'next';
import { Layout } from '@/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { parsePokemonFromApi } from '../helpers/parsePokemonFromApi';
import { PokemonList } from '@/components/pokemon';
import { pokeJSON } from '@/utils';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title="Listado de Pokémons">
      <PokemonList pokemons={pokemons} />
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await pokeApi<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map(parsePokemonFromApi);

  const pokemonsFromJSON: SmallPokemon[] = pokeJSON.readPokemonsFromJSON(fs).map((p) => ({
    id: p.id.toLocaleString(),
    img: p.sprites.versions?.['generation-v']['black-white'].animated?.front_default || "",
    name: p.name,
    url: ""
  }))

  return {
    props: {
      pokemons: [...pokemons, ...pokemonsFromJSON],
      revalidate: 10,
    }
  }
}


export default HomePage;
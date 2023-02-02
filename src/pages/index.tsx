import { NextPage, GetStaticProps } from 'next';
import { Layout } from '@/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { parsePokemonFromApi } from '../helpers/parsePokemonFromApi';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title="Listado de Pokémon">
      <ul>
        {
          pokemons.map(({ id, name, img }) =>
          (
            <li>
              #{id} - {name}
              <img src={img} alt={name} />
            </li>
          ))
        }
      </ul>
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await pokeApi<PokemonListResponse>('/pokemon?limit=100');

  const pokemons: SmallPokemon[] = data.results.map(parsePokemonFromApi);

  return {
    props: {
      pokemons
    }
  }
}


export default HomePage;
import { NextPage } from 'next';
import { Layout } from '@/layouts';
import { useState, useEffect } from 'react';
import { NoFavorites, FavoritePokemons } from '@/components/ui/';
import { localFavorites } from '@/utils';
import { FavoritePokemon } from '../../utils/localFavorites';

const Favorites: NextPage = () => {

    const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

    useEffect(() => {
        setFavorites(localFavorites.getFavorites())
    }, [])

    return (
        <Layout>
            {
                favorites.length === 0 ? <NoFavorites /> : <FavoritePokemons favorites={favorites} />
            }
        </Layout>
    )

};

export default Favorites;
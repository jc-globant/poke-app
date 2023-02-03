import { Card } from "@nextui-org/react"
import { useRouter } from 'next/router';
import { pokeApi } from '@/api';
import { PokemonResponse } from "@/interfaces";
import { FavoritePokemon } from '../../utils/localFavorites';

interface Props {
    pokemon: FavoritePokemon
}

export const FavoriteCardPokemon = ({ pokemon: { name, id } }: Props) => {
    const router = useRouter();

    const handlePress = () => router.push(`/pokemon/${name}`)

    return (
        <Card
            isHoverable
            isPressable
            onPress={handlePress}
            css={{ padding: 10, ds: 'none', minHeight: 150, display: 'flex', justifyContent: 'center' }}
        >
            <Card.Image
                width={100}
                height={100}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
            />
        </Card>
    )
}

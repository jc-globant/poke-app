import { Card } from "@nextui-org/react"

interface Props {
    id: number
}

export const FavoriteCardPokemon = ({ id }: Props) => {
    return (
        <Card
            isHoverable
            isPressable
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

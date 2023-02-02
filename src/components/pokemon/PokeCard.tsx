import { FC, PropsWithChildren } from 'react'
import { Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
    pokemon: SmallPokemon

}

export const PokeCard: FC<PropsWithChildren<Props>> = ({ pokemon }) => {

    const { id, img, name } = pokemon;

    return (
        <Card isHoverable isPressable>
            <Card.Body>
                <Card.Image src={img} width={100} height={100} />
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

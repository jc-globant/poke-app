import { Container, Text, Image } from '@nextui-org/react';

export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'calc(100vh - 200px)',
            justifyContent: 'center',
            alignSelf: 'center'
        }}>
            <Text h4>No favorites</Text>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png'
                width={250}
                height={250}
                css={{
                    opacity: 0.5
                }}
            />
        </Container>
    )
}

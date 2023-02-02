import { NextPage } from 'next';
import { Layout } from '@/layouts';
import { Button, Grid } from '@nextui-org/react';

const Favorites: NextPage = () => {

    return (
        <Layout>
            <Grid.Container gap={10}>

                <Button css={{ marginTop: 80 }} color="error" flat onClick={() => alert("haz sido hackeada bb 👀")}> Cica es mi pokemon favorito ❤️</Button>
            </Grid.Container>

        </Layout>
    )

};

export default Favorites;
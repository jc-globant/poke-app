import { NextPage } from 'next';
import { Layout } from '@/layouts';
import { Grid, Text } from '@nextui-org/react';

const Favorites: NextPage = () => {

    return (
        <Layout>
            <Grid.Container gap={2}>
                <p>hola</p>
                <br />
                <p>como estas</p>


            </Grid.Container>

        </Layout>
    )

};

export default Favorites;
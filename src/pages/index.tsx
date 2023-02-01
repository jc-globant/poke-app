import { Button } from '@nextui-org/react';
import { NextPage } from 'next';
import { Layout } from '@/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout text='hello'>
      <Button color="gradient"  >
        Im a button
      </Button>
    </Layout>
  )

};

export default HomePage;
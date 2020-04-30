import {
  Heading,
  Button,
  useColorMode,
  Icon,
  Grid,
  Divider,
  Flex,
  Input,
} from '@chakra-ui/core';
import Layout from '../components/layout/Layout';
import Card from '../components/courses/Card';
import PopoverBase from '../components/popOver/Popover';

const Home = (props) => {
  return (
    <Layout>
      <Flex justifyContent='center'>
        <PopoverBase></PopoverBase>
        <Input
          ml='30px'
          w={{ sm: '100px', md: '400px' }}
          placeholder='Busca algo...'
        />
        <Button
          variantColor='teal'
          leftIcon='search'
          ml='20px'
          variant='outline'
        >
          Buscar
        </Button>
      </Flex>
      <br></br> <Divider></Divider>
      <br></br>
      <Heading as='h2' size='lg'>
        Más Populares
      </Heading>
      <Divider></Divider>
      <br></br>
      <Grid
        templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(4,1fr)' }}
        gap={10}
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Grid>
      <br></br>
      <Heading as='h2' size='lg'>
        Próximos cursos presenciales
      </Heading>
      <Divider></Divider>
      <br></br>
      <Grid
        templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(4,1fr)' }}
        gap={10}
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Grid>
      <Heading as='h2' size='lg'></Heading>
    </Layout>
  );
};

export default Home;

import {
  Heading,
  Button,
  useColorMode,
  Icon,
  Grid,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Box,
} from '@chakra-ui/core';
import Layout from '../components/layout/Layout';
import Card from '../components/courses/Card';
import PopoverBase from '../components/popOver/Popover';

const Home = (props) => {
  return (
    <Layout>
      <SimpleGrid columns={[1, 5, 5]} spacing='20px'>
        <Box></Box>
        <PopoverBase></PopoverBase>
        <Input w='100%' placeholder='Busca algo...' />
        <Button variantColor='teal' leftIcon='search' variant='outline'>
          Buscar
          {process.env.PORT}
        </Button>
        <Box></Box>
      </SimpleGrid>
      <br></br> <Divider></Divider>
      <br></br>
      <Heading as='h2' size='lg'>
        Más Populares
      </Heading>
      <Divider></Divider>
      <br></br>
      <SimpleGrid columns={[1, null, 4]} spacing='40px'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </SimpleGrid>
      <Heading as='h2' size='lg'></Heading>
    </Layout>
  );
};

export default Home;

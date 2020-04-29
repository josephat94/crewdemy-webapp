import {
  Heading,
  Button,
  useColorMode,
  Icon,
  Grid,
  Box,
} from '@chakra-ui/core';
import Layout from '../components/layout/Layout';
import Card from '../components/courses/Card';

const CreateAccount = (props) => {
  return (
    <Layout>
      <Heading textAlign='center'>Crea Tu cuenta</Heading>
      <Grid
        h='100%'
        templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(1,1fr)' }}
        gap={10}
        flex
        justifyContent='center'
        alignItems='center'
      >
        <Box>Aqui va el formulario</Box>
      </Grid>
    </Layout>
  );
};

export default CreateAccount;

import {
  Heading,
  Stack,
  Box,
  Divider,
  Text,
  SimpleGrid,
  Button,
  Image,
  Tag,
  TagLabel,
  TagIcon,
  Flex,
  useToast,
} from '@chakra-ui/core';
import Layout from '../../components/layout/Layout';
import Tema from './Tema';

const Content = ({ head, text, children }) => {
  return (
    <Stack spacing={8}>
      <Box p={5} shadow='md' borderWidth='1px'>
        <Heading fontSize='xl'>{head}</Heading>
        <Text mt={4}>{text}</Text>

        {children}
      </Box>
    </Stack>
  );
};

const imageUrl = 'https://img-a.udemycdn.com/course/240x135/2056209_90a3_2.jpg';
export default (props) => {
  const toast = useToast();
  return (
    <Layout>
      <Heading as='h2' size='lg'>
        Nombre del Curso
      </Heading>
      <Divider></Divider>

      <SimpleGrid columns={2} spacing={2}>
        <Box>
          <SimpleGrid columns={2} spacing={2}>
            <Box>
              <Content head='Duración' text={'20 Hrs'}></Content>
            </Box>
            <Box>
              <Content head='Precio' text='$2500.00MXN'></Content>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={1} spacing={2}>
            <Box>
              <Content
                head='Descripción'
                text={'Aqui va la descripción del curso'}
              ></Content>
            </Box>
            <Box>
              <Content head='Temario'>
                {Array(1, 2, 3, 4).map((item) => (
                  <Tema title={'Sección ' + item} key={item}></Tema>
                ))}
              </Content>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <SimpleGrid columns={1} spacing={2}>
            <Box>
              <Content head='Preview'>
                <Image w='100% ' src={imageUrl} />
                <Divider></Divider>
                <Button
                  onClick={() => {
                    toast({
                      position: 'top-right',
                      title: 'Curso Comprado!.',
                      description:
                        'Excelente! podrás acceder a tu curso desde tu perfil',
                      status: 'success',
                      duration: 9000,
                      isClosable: true,
                    });
                  }}
                  variantColor='teal'
                  isFullWidth={true}
                >
                  Comprar Curso
                </Button>
              </Content>
            </Box>
          </SimpleGrid>
          <Divider></Divider>
          <SimpleGrid columns={2} spacing={2}>
            <Box>
              <Content head='Categoria'>
                <Flex flexDirection='row' flexWrap>
                  <Tag mr='10px' variantColor='cyan'>
                    <TagLabel>Tecnología</TagLabel>
                    <TagIcon icon='check' size='12px' />
                  </Tag>

                  <Tag variantColor='cyan'>
                    <TagLabel>Programación</TagLabel>
                    <TagIcon icon='check' size='12px' />
                  </Tag>
                </Flex>
              </Content>
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

import {
  Heading,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  SimpleGrid,
  Box,
  Image,
  Divider,
  Stack,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';

export default function DrawerCalendar(props) {
  const { isOpen, onClose } = props;
  const btnRef = React.useRef();
  const router = useRouter();
  const redirectTo = () => {
    router.push("/course/1'");
  };
  const imageUrl =
    'https://img-a.udemycdn.com/course/240x135/2056209_90a3_2.jpg';
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'md'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Curso Presencial!</DrawerHeader>
          <SimpleGrid pr='20px' pl='20px' columns={1} spacing={2}>
            <Box>
              <Image w='100% ' src={imageUrl} />
            </Box>
            <Box flex='flex' justifyContent='space-between' alignItems='center'>
              <Stack spacing={10}>
                <Box p={2} shadow='md' borderWidth='1px'>
                  <Heading fontSize='xl'> Nombre del curso</Heading>

                  <Heading as='h2' size='sm'>
                    <strike
                      style={{
                        fontSize: '15px',
                        marginRight: '20px',
                        opacity: '0.6',
                      }}
                    >
                      $3500.00MXN
                    </strike>
                    $2500.00 MXN
                    <b
                      ml='20px'
                      color='teal'
                      style={{ marginLeft: '20px', textTransform: 'uppercase' }}
                    >
                      Aparta con el 10%
                    </b>
                  </Heading>
                </Box>
              </Stack>
            </Box>

            <Divider></Divider>

            <SimpleGrid columns={2} spacing={2}>
              <Stack spacing={10}>
                <Box p={2} shadow='md' borderWidth='1px'>
                  <Heading fontSize='xl'>Fecha de inicio</Heading>
                  20/ 02/ 2020
                </Box>
              </Stack>

              <Stack spacing={10}>
                <Box p={2} shadow='md' borderWidth='1px'>
                  <Heading fontSize='xl'>Duración</Heading>
                  20 HRS
                </Box>
              </Stack>
            </SimpleGrid>
          </SimpleGrid>
          <DrawerBody>
            <br></br>
            <Button onClick={redirectTo} variantColor='teal' isFullWidth={true}>
              Saber Más
            </Button>
          </DrawerBody>

          {/*        <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

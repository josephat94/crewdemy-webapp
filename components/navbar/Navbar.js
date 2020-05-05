import { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Button,
  Divider,
  useColorMode,
  useToast,
  Icon,
} from '@chakra-ui/core';
import { RiMenuLine } from 'react-icons/ri';
import Link from 'next/link';
const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { onOpen } = props;
  const toast = useToast();
  const ChangeMode = () => {
    toggleColorMode();
    toast({
      position: 'top',
      title: 'Nuevo Logro Desbloqueado!',
      description:
        'Cambiaste al modo ' + (colorMode == 'light' ? 'dark' : 'light'),
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <div className='navBar'>
      <Flex w='100%' justifyContent='space-between' alignItems='center'>
        <Flex alignItems='center'>
          <Flex alignItems='center' cursor='pointer'>
            <Link href='/'>
              <Image src='/img/logo.png' h='50px' />
            </Link>
            <Link href='/'>
              <Heading fontSize='1.5rem' ml='10px'>
                Crewdemy
              </Heading>
            </Link>
          </Flex>
          <Flex h='100%' alignItems='center' className='opts-large' ml='20px'>
            <Link href='/presenciales'>
              <Box cursor='pointer' ml='10px'>
                Calendario
              </Box>
            </Link>
            <Link href='/live'>
              <Box cursor='pointer' ml='10px'>
                CrewdemyLive
              </Box>
            </Link>
            <Box cursor='pointer' ml='10px'>
              Nosotros
            </Box>
            <Box cursor='pointer' ml='10px'>
              Crewsoft
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Button
            className='opts-large'
            variant='ghost'
            variantColor='teal'
            onClick={ChangeMode}
          >
            {colorMode === 'light' ? (
              <Icon name='moon' size='24px' />
            ) : (
              <Icon color='white' name='sun' size='24px' />
            )}
          </Button>
          <Button onClick={onOpen} className='opts-large' variantColor='teal'>
            Ingresar
          </Button>
          <Button
            variant='ghost'
            fontSize='30px'
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <Box as={RiMenuLine} />
          </Button>
        </Flex>
      </Flex>
      <ul className={toggle ? 'links show-nav' : 'no-links'}>
        <Divider></Divider>
        <Link href='/presenciales'>
          <li href='#'>Presenciales</li>
        </Link>
        <Divider></Divider>
        <li href='#'>Nosotros</li>
        <Divider></Divider>
        <Divider></Divider>
        <Link href='/live'>
          <li href='#'>CrewdemyLive</li>
        </Link>
        <Divider></Divider>
        <li href='#'>Crewsoft</li>
        <Divider></Divider>
        <li
          href='#'
          onClick={() => {
            ChangeMode();
            setToggle(!toggle);
          }}
        >
          Modo nocturno
        </li>
        <Divider></Divider>
        <li
          href='#'
          onClick={() => {
            onOpen();
            setToggle(!toggle);
          }}
        >
          Ingresar
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

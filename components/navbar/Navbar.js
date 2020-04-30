import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Switch,
  useColorMode,
  Icon,
  Image,
  useToast,
} from '@chakra-ui/core';

import Link from 'next/link';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display='block'>
    {children}
  </Text>
);

const Navbar = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
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
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      bg='brand.900'
      color='white'
      width='100%'
      {...props}
    >
      <Flex className='wow-animate grow' cursor='pointer' align='center' mr={5}>
        <Link href='/'>
          <Image mr='5px' height='40px' src='/img/logo.png'></Image>
        </Link>
        <Link href='/'>
          <Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
            Crewdemy
          </Heading>
        </Link>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill='white'
          width='12px'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
      >
        {' '}
        <Link href='/presenciales'>
          <Box className='grow' mr='20px' cursor='pointer'>
            Cursos Presenciales
          </Box>
        </Link>
        <Box className='grow' mr='20px' cursor='pointer'>
          Nosotros
        </Box>
        <Box className='grow' mr='20px' cursor='pointer'>
          CrewSoft
        </Box>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        mt={{ base: 4, md: 0 }}
        alignItems='center'
      >
        <MenuItems>
          <Button variant='ghost' variantColor='teal' onClick={ChangeMode}>
            {colorMode === 'light' ? (
              <Icon name='moon' size='24px' />
            ) : (
              <Icon color='white' name='sun' size='24px' />
            )}
          </Button>
        </MenuItems>

        <Button onClick={onOpen} bg='brand.300' border='0px'>
          Ingresar
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;

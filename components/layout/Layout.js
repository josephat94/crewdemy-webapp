import Navbar from '../navbar/Navbar';
import Head from 'next/head';
import { Grid, Box, useDisclosure } from '@chakra-ui/core';
import LoginModal from '../login/LoginModal';
import Footer from '../footer/Footer';
const Layout = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,200&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar onOpen={onOpen}></Navbar>

      <Grid
        pr='20px'
        pl='20px'
        pt='50px'
        className='layout-body'
        templateColumns='repeat(1, 1fr)'
        gap={10}
      >
        <Box>{props.children}</Box>

        <Footer></Footer>
      </Grid>

      <LoginModal isOpen={isOpen} onClose={onClose}></LoginModal>
    </>
  );
};

export default Layout;

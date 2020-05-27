import Layout from '../components/layout/Layout';
import moment from 'moment';
import {
  SimpleGrid,
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Input,
  Button,
  Skeleton,
  useToast,
} from '@chakra-ui/core';
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

const Msg = (props) => {
  const myRef = useRef(null);
  useEffect(() => {
    //myRef.current.scrollIntoView();
  }, []);
  return (
    <Flex
      ref={myRef}
      flexDirection='column'
      justifyContent='center'
      alignItems='flex-end'
      w='95%'
    >
      <Flex>
        <span style={{ color: '#a8aab1', marginRight: '20px' }}>
          {moment().format('DD MM YYYY hh mm A')}
        </span>
        <span>Joseph</span>
      </Flex>
      <div className='message wow-animate'>{props.children}</div>
    </Flex>
  );
};
export const Live = (props) => {
  const [msgs, setMsgs] = useState([]);
  const [notes, setNotes] = useState([]);
  const [textNote, setTextNote] = useState('');
  const [text, setText] = useState('');
  const toast = useToast();
  const sendMsg = () => {
    let newmsg = [...msgs];

    if (text != '') {
      newmsg.push(text);
      setMsgs(newmsg);
      setText('');
    }
  };
  const SendNote = () => {
    let newNotes = [...notes];
    if (textNote != '') {
      newNotes.push(textNote);
      setNotes(newNotes);
      setTextNote('');
    }
  };
  useEffect(() => {
    OpenPay.setSandboxMode(true);
    OpenPay.setId(process.env.OPEN_PAY_ID);
    OpenPay.setApiKey(process.env.OPEN_PAY_PKEY);
  }, []);
  const createToken = (e) => {
    e.preventDefault();
    OpenPay.token.extractFormAndCreate(
      $('#processCard'),
      successCard,
      errorCard
    );
  };
  const successCard = () => {
    toast({
      position: 'top-right',
      title: 'Curso Comprado!.',
      description: 'Error al procesar el pago',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  const errorCard = () => {
    toast({
      position: 'top-right',
      title: 'Compra Fallida.',
      description: 'Error al procesar tu pago',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Layout>
      <SimpleGrid columns={[1, 0, 2]} spacing={10}>
        <Box>
          <div>
            <Heading as='h2'>Informacion de la compra</Heading>
            <Skeleton height='300px' my='10px' />
            <Skeleton height='20px' my='10px' />
            <Skeleton height='20px' my='10px' />
            <Skeleton height='20px' my='10px' />
            <Skeleton height='20px' my='10px' />
            <Skeleton height='20px' my='10px' />
          </div>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Heading as='h2'>Informacion de pago</Heading>
          <br></br>
          <form id='processCard' name='processCard'>
            <SimpleGrid columns={[2, 0, 2]} spacing={10}>
              <Box>
                <img
                  className='img-responsive pull-right'
                  src='http://i76.imgup.net/accepted_c22e0.png'
                />
                <br></br>
                <Input
                  variant='filled'
                  data-openpay-card='holder_name'
                  size='50'
                  type='text'
                  placeholder='Holder name'
                />
                <br></br>
                <Input
                  variant='filled'
                  data-openpay-card='card_number'
                  size='50'
                  type='text'
                  placeholder='Card Number'
                />
                <br></br>
                <Input
                  placeholder='Exṕiration year'
                  variant='filled'
                  data-openpay-card='expiration_year'
                  size='4'
                  type='text'
                />
                <br></br>
                <Input
                  placeholder='Expiration Month'
                  variant='filled'
                  data-openpay-card='expiration_month'
                  size='4'
                  type='text'
                />
                <br></br>
                <Input
                  placeholder='CVVr'
                  variant='filled'
                  data-openpay-card='cvv2'
                  size='5'
                  type='text'
                />
              </Box>

              <Box>
                <Input
                  variant='filled'
                  data-openpay-card-address='line1'
                  size='20'
                  type='text'
                  placeholder='Street'
                />
                <br></br>
                <Input
                  variant='filled'
                  data-openpay-card-address='line2'
                  size='20'
                  type='text'
                  placeholder='Number'
                />
                <br></br>
                <Input
                  variant='filled'
                  data-openpay-card-address='line3'
                  size='20'
                  type='text'
                  placeholder='References'
                />
                <br></br>
                <Input
                  variant='filled'
                  data-openpay-card-address='postal_code'
                  size='6'
                  type='text'
                  placeholder='Postal code'
                />
                <br></br>
                <Input
                  variant='filled'
                  data-openpay-card-address='city'
                  size='20'
                  type='text'
                  placeholder='City'
                />
                <br></br>
                <Input
                  variant='filled'
                  data-openpay-card-address='state'
                  size='20'
                  type='text'
                  placeholder='State'
                />
                <br></br>
                <Input
                  variant='filled'
                  data-openpay-card-address='country_code'
                  size='3'
                  type='text'
                  placeholder='Country code ej MX'
                />
              </Box>
            </SimpleGrid>
            <br></br>
            <Flex justifyContent='center'>
              <Button
                isFullWidth
                variantColor='teal'
                onClick={createToken}
                id='makeRequestCard'
                type='button'
                value='Make Card'
              >
                PAGAR
              </Button>
            </Flex>
          </form>
        </Box>
      </SimpleGrid>
    </Layout>
  );
};
export default Live;

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
} from '@chakra-ui/core';
import { useState, useRef, useEffect } from 'react';

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
  return (
    <Layout>
      <SimpleGrid columns={[1, 1, 2]} spacing='40px'>
        <Box>
          <Box
            style={{ display: 'flex' }}
            justifyContent='center'
            alignItems='center'
            w='100%'
            h='auto'
            bg='black'
          >
            <video width='100%' controls>
              <source
                src='https://www.w3schools.com/html/mov_bbb.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Heading mt='30px'>Titulo del Live</Heading>
        </Box>

        <Box>
          <Tabs variant='soft-rounded' variantColor='teal'>
            <TabList>
              <Tab>Chat</Tab>
              <Tab>Notas del expositor</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex
                  flexDirection='column'
                  mt='10px'
                  h='400px'
                  w='100%'
                  bg='transparent'
                >
                  <Flex
                    border='1px solid #efefef'
                    h='380px'
                    w='100%'
                    overflowY='auto'
                    position='relative'
                    flexDirection='column'
                  >
                    {msgs.length > 0 ? (
                      msgs.map((msg, index) => {
                        return <Msg key={'index' + index}>{msg}</Msg>;
                      })
                    ) : (
                      <Flex
                        alignItems='center'
                        h='200px'
                        flex='flex'
                        justifyContent='center'
                        w='100%'
                      >
                        Agrega un nuevo comentario!
                      </Flex>
                    )}
                  </Flex>

                  <Flex mt='20px'>
                    <Input
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                      placeholder='Comparte un comentario'
                    />
                    <Button
                      onClick={sendMsg}
                      variantColor='teal'
                      ml='20px'
                      width='200px'
                    >
                      Enviar
                    </Button>
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  flexDirection='column'
                  mt='10px'
                  h='400px'
                  w='100%'
                  bg='white'
                >
                  <Flex
                    border='1px solid #efefef'
                    h='380px'
                    w='100%'
                    overflowY='auto'
                    position='relative'
                    flexDirection='column'
                  >
                    {notes.length > 0 ? (
                      notes.map((note, index) => {
                        return <Msg key={'index' + index}>{note}</Msg>;
                      })
                    ) : (
                      <Flex
                        alignItems='center'
                        h='200px'
                        flex='flex'
                        justifyContent='center'
                        w='100%'
                      >
                        Agrega una nueva nota!
                      </Flex>
                    )}
                  </Flex>

                  <Flex mt='20px'>
                    <Input
                      value={textNote}
                      onChange={(e) => {
                        setTextNote(e.target.value);
                      }}
                      placeholder='Comparte un comentario'
                    />
                    <Button
                      onClick={SendNote}
                      variantColor='teal'
                      ml='20px'
                      width='200px'
                    >
                      Enviar
                    </Button>
                  </Flex>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SimpleGrid>
    </Layout>
  );
};
export default Live;

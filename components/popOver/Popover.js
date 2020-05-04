import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  Box,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core';

function PopoverBase(props) {
  const categories = [
    'Programación web',
    'Backend',
    'Frontend',
    'Mobile',
    'Diseño',
    'Marketing Digital',
    'Ofimática',
    'Online',
    'Presenciales',
  ];
  const initialFocusRef = React.useRef();
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      trigger='hover'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button variant='outline' variantColor='teal' w='100%'>
          Categorías
        </Button>
      </PopoverTrigger>
      <PopoverContent
        zIndex={4}
        /*   color='white'
        bg='brand.900' */
        borderColor='brand.300'
      >
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Nuestras categorias
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <List spacing={3}>
            {categories.map((cat, index) => (
              <ListItem
                cursor='pointer'
                className='grow-sm'
                key={'cat-' + index}
              >
                <ListIcon icon='check-circle' color='green.500' />
                {cat}
              </ListItem>
            ))}
          </List>
        </PopoverBody>
        <PopoverFooter
          border='0'
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        ></PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverBase;

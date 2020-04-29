import { Button, Collapse, Box } from '@chakra-ui/core';

const Tema = (props) => {
  const { title } = props;
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Box
        h='15'
        p={5}
        bg='teal'
        fontWeight='bold'
        color='brand.600'
        padding='.5rem'
        shadow='md'
        borderWidth='1px'
        onClick={handleToggle}
        cursor='pointer'
        className='grow-sm'
      >
        {title}
      </Box>
      <Collapse mt={4} isOpen={show}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
    </>
  );
};
export default Tema;

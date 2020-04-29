import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/core';

export default function LoginModal(props) {
  const { isOpen, onClose } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className='wow-animate'>
          <ModalHeader textAlign='center'>Iniciar Sesión</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor='email'>Email </FormLabel>
              <Input
                type='email'
                id='email'
                aria-describedby='email-helper-text'
              />
              <FormHelperText id='email-helper-text'>
                Nunca compartiremos tu email
              </FormHelperText>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel htmlFor='email'>Contraseña </FormLabel>
              <Input
                type='password'
                id='email'
                aria-describedby='email-helper-text'
              />
              <FormHelperText id='email-helper-text'>
                Ingresa la contraseña de tu cuenta
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter flex justifyContent='center' alignItems='center'>
            <Button variantColor='teal' mr={3} onClick={onClose}>
              Registrate
            </Button>
            <Button variant='outline' variantColor='teal'>
              Entrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

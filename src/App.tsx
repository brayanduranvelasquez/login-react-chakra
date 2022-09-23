/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaLock, FaUser } from 'react-icons/fa';

export default function App(): JSX.Element {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bgColor={'gray.300'}>
      <Stack spacing={8} width="85%" maxWidth="780px" mx={'auto'} py={12} px={6}>
        <Box rounded={'10px'} boxShadow={'lg'} background={'white'}>
          <Grid templateColumns={{ base: '1fr none', md: '1fr 1fr' }} rounded={'10px'}>
            <GridItem p={8}>
              <Stack spacing={3} mb={8}>
                <Text as="u" fontSize="4xl">
                  Iniciar Sesión
                </Text>
              </Stack>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUser color="gray" />}
                  />
                  <Input
                    type="text"
                    placeholder="Usuario"
                    sx={{ borderRadius: '200px' }}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock color="gray" />}
                  />
                  <Input
                    type="password"
                    placeholder="Contraseña"
                    sx={{ borderRadius: '200px' }}
                  />
                </InputGroup>
              </Stack>
              <Box my={3}>
                <Button bg={'purple.600'} _hover={{ bg: 'purple.400' }} color={'white'}>
                  Button
                </Button>
              </Box>
              <Stack spacing={4} mt={6}>
                <Text>
                  ¿No recuerdas tu contraseña? <Link color={'blue.400'}>Recuperar</Link>
                </Text>
              </Stack>
            </GridItem>
            <GridItem
              display={{ base: 'none', md: 'block' }}
              bgGradient="linear(to-l, purple, purple.700)"
              rounded={'10px'}
            >
              <Flex height={'100%'} align={'center'} justify={'center'}>
                <Heading color={'white'} textAlign={'center'}>
                  Hola, es hora de iniciar sesión en nuestro sitio.
                </Heading>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Stack>
    </Flex>
  );
}

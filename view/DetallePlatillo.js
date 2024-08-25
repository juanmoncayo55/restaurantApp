import React, { useContext } from 'react';
import {
  Image
} from 'react-native';
import {
  Container,
  View,
  Box,
  HStack,
  VStack,
  Divider,
  Button,
  Text,
  Heading
} from 'native-base'

import PedidosContext from '../context/pedidos/pedidosContext.js'

import globalStyles from '../styles/global.js'

const DetallePlatillo = () => {
  //Context Pedidos
  const {platillo} = useContext(PedidosContext)

  const {nombre, imagen, categoria, descripcion, precio} = platillo;

  return (
    <View style={globalStyles.contenedor}>
      <Box style={globalStyles.contenido}>
        <Heading style={globalStyles.titulo}>{nombre}</Heading>

        {/* Inicio de nuestro Card En la version NB-3.x.x */}
        <Box
          borderWidth="1"
          borderColor="coolGray.300"
          rounded="lg"
          _android={{
            shadow: 1,
            borderWidth: 0
          }}
        >
          <VStack space="4" divider={<Divider />} >
            <Box p="3">
              <Image
                style={globalStyles.imagen}
                source={{uri: imagen}}
              />

              <Text>{descripcion}</Text>
              <Text style={globalStyles.cantidad}>Precio: $ {precio}</Text>
            </Box>
            { /*<Box px="3">
              NativeBase is a free and open source framework that enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.
            </Box>
            <Box px="3" pb="3">
              GeekyAnts
            </Box>*/}
          </VStack>
        </Box>
        {/* Fin de nuestro Card En la version NB-3.x.x */}
      </Box>
    </View>
  );
}

export default DetallePlatillo;
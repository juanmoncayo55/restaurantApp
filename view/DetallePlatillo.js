import React, { useContext } from 'react';
import {
  Image,
  ScrollView
} from 'react-native';
import {
  Container,
  Center,
  View,
  Box,
  HStack,
  VStack,
  Divider,
  Button,
  Pressable,
  Text,
  Heading
} from 'native-base'
import {useNavigation} from '@react-navigation/native'

import PedidosContext from '../context/pedidos/pedidosContext.js'

import globalStyles from '../styles/global.js'

const DetallePlatillo = () => {
  //Context Pedidos
  const {platillo} = useContext(PedidosContext)

  const {nombre, imagen, categoria, descripcion, precio} = platillo;

  const navigation = useNavigation()

  return (
    <ScrollView style={{flex: 1}}>
      <View style={[globalStyles.contenedor, {marginBottom: 30}]}>
        <Box style={globalStyles.contenido}>
          <Heading style={globalStyles.titulo}>{nombre}</Heading>

          {/* Inicio de nuestro Card En la version NB-3.x.x */}
          <Box
            borderWidth="1"
            borderColor="coolGray.300"
            rounded="lg"
          >
            <VStack space="4" divider={<Divider />} >
              <Box p="3">
                <Image
                  style={globalStyles.imagen}
                  source={{uri: imagen}}
                />

                <Text style={{marginTop: 20}}>{descripcion}</Text>
                <Text style={globalStyles.cantidad}>Precio: $ {precio}</Text>
              </Box>
            </VStack>
          </Box>
          {/* Fin de nuestro Card En la version NB-3.x.x */}
        </Box>

      </View>
      <Box flex={1} bg="white" safeAreaBottom width="100%" alignSelf="center">
        <HStack>
          <Button style={[globalStyles.boton, {borderRadius: 0}]} cursor="pointer" py="3" flex={1} onPress={() => navigation.navigate('FormularioPlatillo')}>
            <Text style={globalStyles.botonTexto}>Ordenar Platillo</Text>
          </Button>
        </HStack>
      </Box>
    </ScrollView>
  );
}

export default DetallePlatillo;
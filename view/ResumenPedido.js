import React, {useContext, useEffect, Fragment} from 'react';
import {
  View, StyleSheet
} from 'react-native';
import {
  Box,
  Image,
  Text,
  FlatList,
  HStack,
  VStack,
  Divider,
  Heading,
  Button
} from 'native-base';
import PedidosContext from '../context/pedidos/pedidosContext.js'
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global.js'

const ResumenPedido = () => {

  const { pedido, total, resumenPedido } = useContext(PedidosContext)
  const navigation = useNavigation()

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce( (suma, platillo) => suma + platillo.total, 0 );

    resumenPedido(nuevoTotal);
  }

  return (
    <View style={globalStyles.contenedor}>
      <Box style={globalStyles.contenido}>
        <Heading style={globalStyles.titulo}>Resumen Pedido</Heading>
        <FlatList
          data={pedido}
          renderItem={({item}) => {
            console.log(item)
            const {imagen, nombre, precio, cantidad} = item;

            return(
              <Fragment>
                <Box py="3" borderBottomWidth="1" borderColor="muted.300">
                  <HStack space={[3]}>
                    <Image
                      source={{uri: imagen}}
                      size="md"
                      resizeMode="cover"
                      alt={nombre}
                    />
                    <VStack>
                      <Box>
                        <Text
                          dark={{
                            color: "warmGray.50"
                          }}
                          color="coolGray.800"
                          fontSize="lg"
                        >
                          {nombre}
                        </Text>
                        <Text
                          dark={{
                            color: "warmGray.50"
                          }}
                          color="coolGray.800"
                          fontSize="sm"
                        >
                          Cantidad: {cantidad}
                        </Text>
                        <Text
                          dark={{
                            color: "warmGray.50"
                          }}
                          color="coolGray.800"
                          fontSize="sm"
                        >Precio: $ {precio}</Text>
                      </Box>
                    </VStack>
                  </HStack>
                </Box>
              </Fragment>
            )
          } } keyExtractor={(item, i) => item.id+i}
        />

        <Text style={globalStyles.cantidad}>Total a Pagar: $ {total}</Text>
        <Button
          colorScheme="secondary"
          onPress={() => navigation.navigate("Menu")}
          style={globalStyles.boton}
        >
          <Text style={globalStyles.botonTexto}>Seguir Pidiendo</Text>
        </Button>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  separador: {
    backgroundColor: "#000"
  },
  separadorTexto: {
    color: "#FFDA00",
    fontWeight: "bold",
    textTransform: "uppercase"
  }
})

export default ResumenPedido;
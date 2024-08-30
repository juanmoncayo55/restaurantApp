import React, {useContext, useEffect, Fragment} from 'react';
import {
  Alert, View, StyleSheet
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
  Button,
  Icon
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import firebase from '../firebase/';
import PedidosContext from '../context/pedidos/pedidosContext.js'
import globalStyles from '../styles/global.js'

const ResumenPedido = () => {

  const { pedido, total, resumenPedido, eliminarProducto, guardarIdPedido } = useContext(PedidosContext)
  const navigation = useNavigation()

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce( (suma, platillo) => suma + platillo.total, 0 );

    resumenPedido(nuevoTotal);
  }

  //funcion que redirecciona a progreso pedido
  const progresoPedido = () => {
    Alert.alert(
      "Revisa tu pedido",
      "Una vez que realizas tu pedido. no podrás cambiarlo",
      [
        {
          text: "Confirmar",
          onPress: async () => {

            //crear un objeto
            const pedidoObj = {
              tiempoetrega: 0,
              completado: false,
              total: Number(total),
              orden: pedido, //array
              creado: Date.now()
            }

            console.log(pedidoObj)

            try {
              const pedido = await firebase.db.collection('ordenes').add(pedidoObj);
              guardarIdPedido(pedido.id)
            } catch (error) {
              console.log(error)
            }

            //escribir el pedido en firebase

            navigation.navigate("ProgresoPedido")
          }
        },
        {
          text: "Revisar",
          style: "cancel"
        }
      ]
    )

    //navigation.navigate("ProgresoPedido")
  }

  //Confirmar Eliminacion de los pedidos
  const confirmarEliminacion = id => {
    Alert.alert(
      "¿Deseas Eliminar este Artículo?",
      "Una vez Eliminado, no se puede recuperar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            //Eliminar del state
            eliminarProducto(id)
          }
        },
        {
          text: "Revisar",
          style: "cancel"
        }
      ]
    )
  }

  return (
    <View style={globalStyles.contenedor}>
      <Box style={globalStyles.contenido}>
        <Heading style={globalStyles.titulo}>Resumen Pedido</Heading>
        <FlatList
          data={pedido}
          renderItem={({item}) => {
            const {imagen, nombre, precio, cantidad, id} = item;

            return(
              <Fragment>
                <Box py="3" borderBottomWidth="1" borderColor="muted.300">
                  <HStack space={[3]} alignItems="center">
                    <Image
                      source={{uri: imagen}}
                      size="md"
                      resizeMode="cover"
                      alt={nombre}
                    />
                    <VStack>
                      <Box style={{width: "100%"}}>
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
                        <Button
                          bgColor="error.500"
                          style={globalStyles.fullWidth}
                          mt="3"
                          _text={{
                            color: "white",
                            textTransform: "uppercase",
                            fontWeight: "bold"
                          }}
                          _pressed={{
                            opacity: 90
                          }}
                          endIcon={<Icon as={Ionicons} name="trash-outline" size="sm" />}
                          onPress={() => confirmarEliminacion(id) }
                        >
                          Eliminar
                        </Button>
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
          dark
          style={[globalStyles.boton, {backgroundColor: '#000000'}]}
        >
          <Text style={[globalStyles.botonTexto, {color: "#FFF"}]}>Seguir Pidiendo</Text>
        </Button>
      </Box>
      <Button
        colorScheme="secondary"
        onPress={() => progresoPedido()}
        style={[globalStyles.boton, {borderRadius: 0, marginTop: 50}]}
      >
        <Text style={[globalStyles.botonTexto]}>Ordenar Pedido</Text>
      </Button>
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
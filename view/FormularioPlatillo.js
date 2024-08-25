import React, { useState, useEffect, useContext } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import {
  View,
  Box,
  Stack,
  HStack,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  Center,
  Icon,
  Heading
} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import PedidosContext from '../context/pedidos/pedidosContext.js'

import globalStyles from '../styles/global.js'


const FormularioPlatillo = () => {
  //State de cantidad
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);

  //Context
  const {platillo, guardarPedidoPlatillo} = useContext(PedidosContext);
  const {precio} = platillo;

  const navigation = useNavigation()

  useEffect(() => {
    calcularPagar()
  }, [cantidad]);

  //Funcion para calcular el total a pagar
  const calcularPagar = () => {
    const calcularTotal = precio * cantidad;
    setTotal(calcularTotal);
  }

  // Funcion Decrementar cantidad
  const decrementarCantidad = () => {
    if(cantidad >= 2){
      let cantidadNueva = parseInt(cantidad)-1;
      setCantidad(cantidadNueva);
    }
  }

  //Funcion Incrementar cantidad
  const incrementarCantidad = () => {
    let cantidadNueva = parseInt(cantidad)+1;
    setCantidad(cantidadNueva);
  }

  const confirmarOrden = () => {
    Alert.alert(
      "¿Deseas Confirmar tu Pedido?",
      "Un pedido confirmado ya no se podrá modificar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            const pedido = {
              ...platillo,
              cantidad,
              total
            }

            //console.log(pedido)
            guardarPedidoPlatillo(pedido)

            navigation.navigate("ResumenPedido")
          }
        },{
          text: "Cancelar",
          style: "cancel"
        }
      ]
    )
  }

  return (
    <View style={[globalStyles.contenedor, {marginBottom: 30, position: 'relative'}]}>
      <Box style={globalStyles.contenido}>
        <FormControl>
          <Heading style={globalStyles.titulo}>Cantidad</Heading>
          <Stack direction="row">
            <VStack flex="1">
              <Button
                style={{height: 80, justifyContent: 'center', backgroundColor: '#000000'}}
                onPress={() => decrementarCantidad()}
              >
                <Icon size="3xl" as={Ionicons} name="remove" color="#FFF" />
              </Button>
            </VStack>
            <VStack flex="1">
              <Input
                style={{textAlign: "center", fontSize: 25, height: 79}}
                value={cantidad.toString()}
                onChangeText={value => setCantidad(value) }
                keyboardType="numeric"
              />
            </VStack>
            <VStack flex="1">
              <Button
                style={{height: 80, justifyContent: 'center', backgroundColor: '#000000'}}
                onPress={() => incrementarCantidad()}
              >
                <Icon size="3xl" as={Ionicons} name="add" color="#FFF" />
              </Button>
            </VStack>
          </Stack>
          <Text style={globalStyles.cantidad}>Total: $ {total}</Text>
        </FormControl>
      </Box>

      <Box flex={1} bg="white" safeAreaBottom width="100%" alignSelf="center" style={styles.btnFooter}>
        <HStack>
          <Button
            style={[globalStyles.boton, {borderRadius: 0}]}
            cursor="pointer"
            py="3"
            flex={1}
            onPress={() => confirmarOrden()}
          >
            <Text style={globalStyles.botonTexto}>Ordenar Platillo</Text>
          </Button>
        </HStack>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  btnFooter: {
    position: "absolute",
    bottom: 0
  }
})

export default FormularioPlatillo;
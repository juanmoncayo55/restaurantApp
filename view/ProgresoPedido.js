import React, {useContext, useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Box, Button, Heading, Text} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Countdown from 'react-countdown';
import firebase from '../firebase/';
import globalStyles from '../styles/global.js';
import PedidoContext from '../context/pedidos/pedidosContext.js';

const ProgresoPedido = () => {

  const { idpedido } = useContext(PedidoContext);

  const [entrega, setEntrega] = useState(0);
  const [completado, setCompletado] = useState(false);

  const navigation = useNavigation()

  useEffect(() => {
    const obtenerProducto = () => {
      firebase.db.collection('ordenes')
        .doc(idpedido)
        .onSnapshot(function(doc){
          setEntrega(doc.data().tiempoetrega)
          setCompletado(doc.data().completado)
        })
    }
    obtenerProducto();
  }, []);

  const renderer = ({minutes, seconds}) => {
    return (
        <Text style={styles.tiempo}>{minutes}:{seconds}</Text>
      )
  }

  return (
    <Box style={globalStyles.contenedor}>
      <View style={[globalStyles.contenido, {marginTop: 50}]}>
        {entrega === 0 && (
          <>
            <Text style={{textAlign: "center"}}>Hemos recibido tu orden.</Text>
            <Text style={{textAlign: "center"}}>Estamos calculando el tiempo de entrega.</Text>
          </>
        )}

        { !completado && entrega > 0 && (
          <>
            <Text style={{textAlign: "center"}}>Su orden estará lista en: </Text>
            <Countdown
              date={Date.now() + entrega * 60000}
              renderer={renderer}
            />
          </>
        )}

        {completado && (
          <>
            <Heading size="xl" style={{fontWeight: "normal", textAlign: "center"}}>Orden Lista</Heading>
            <Heading size="md" style={{fontWeight: "normal", textAlign: "center"}}>Por favor, pase a recoger su pedido</Heading>

            <Button
              style={[globalStyles.boton, {marginTop: 50}]}
              onPress={() => navigation.navigate("NuevaOrden")}
            >
              <Text style={globalStyles.botonTexto}>Comenzar una Nueva Orden</Text>
            </Button>
          </>
        )}
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  tiempo: {
    marginBottom: 20,
    fontSize: 60,
    textAlign: "center",
    paddingTop: 50
  }
})

export default ProgresoPedido;
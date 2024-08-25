import React, {useContext, useEffect, Fragment} from 'react';
import { StyleSheet, View } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext.js'
import PedidosContext from '../context/pedidos/pedidosContext.js'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Separator,
  Box,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,


  FlatList,
  HStack,
  VStack,
  Icon,
  Image,
  Divider,
  Pressable
} from 'native-base'
import globalStyles from '../styles/global.js'

const Menu = () => {
  //Context de Firebase
  const { menu, obtenerProductos } = useContext(FirebaseContext)
  //Context de Pedidos
  const { seleccionandoPlatillo } = useContext(PedidosContext)

  //Hook para redirecionar a otra vista
  const navigation = useNavigation()

  useEffect(() => {
    obtenerProductos()
  }, [])

  const mostrarHeading = (categoria, i) => {
    if(i > 0){
      const categoriaAnterior = menu[i - 1].categoria
      if(categoriaAnterior !== categoria){ //Si la categoria anterior no es igual a la presente se agrega un nuevo encabezado
        return (
          <View style={styles.separador}>
            <Text style={styles.separadorTexto}> {categoria} </Text>
          </View>
        )
      }
    }else{
      return (
        <View style={styles.separador}>
          <Text style={styles.separadorTexto}> {categoria} </Text>
        </View>
      )
    }
  }
  return (
    <View style={globalStyles.contenedor}>
      <Box style={[globalStyles.contenido, styles.cnt]}>
        <FlatList
          data={menu}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() => {
                const { existencia, ...platillo } = item; //elimino existencia
                seleccionandoPlatillo(platillo) // paso existencia como parametro

                navigation.navigate("DetallePlatillo")
              }}
              _pressed={{backgroundColor: "coolGray.200"}}
            >
              <Fragment>
                <Box py="3" borderBottomWidth="1" borderColor="muted.300">
                  <HStack space={[3]}>
                    <Image
                      source={{uri: item.imagen}}
                      size="md"
                      resizeMode="cover"
                      alt={item.nombre}
                    />
                    <VStack>
                      <Box style={{width: "98%"}}>
                        <Text
                          dark={{
                            color: "warmGray.50"
                          }}
                          color="coolGray.800"
                          bold
                          fontSize="md"
                        >
                          {item.nombre}
                        </Text>
                        <Text
                          color="coolGray.500"
                          noOfLines={2}
                        >
                          {item.descripcion}
                        </Text>

                        <Text
                          dark={{
                            color: "warmGray.50"
                          }}
                          color="coolGray.800"
                          bold
                          fontSize="sm"
                        >
                          Precio: $ {item.precio}
                        </Text>
                      </Box>
                    </VStack>
                  </HStack>
                </Box>
              </Fragment>
            </Pressable>
          ) } keyExtractor={(item) => item.id}
        />
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

export default Menu;
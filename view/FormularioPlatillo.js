import React, { useContext } from 'react';
import {
  Image,
  ScrollView
} from 'react-native';
import {
  View,
  Box,
  Stack,
  FormControl,
  Input,
  Button,
  Text,
  Center,
  Icon
} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import PedidosContext from '../context/pedidos/pedidosContext.js'

import globalStyles from '../styles/global.js'

const FormularioPlatillo = () => {
  return (
    <View style={[globalStyles.contenedor, {marginBottom: 30}]}>
      <Box style={globalStyles.contenido}>
        <Stack direction="row">
          <Center size="16" bg="primary.400" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"3"} flex="1">
            <Icon as={Ionicons} name="remove" color="coolGray.800" _dark={{
        color: "warmGray.50"}} />
          </Center>
          <Center size="16" bg="primary.400" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"3"} flex="1">
            Box 2
          </Center>
          <Center size="16" bg="primary.400" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"3"} flex="1">
            Box 3
          </Center>
        </Stack>
      </Box>
    </View>
  );
}

export default FormularioPlatillo;
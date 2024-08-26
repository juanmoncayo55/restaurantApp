import React, {useContext} from 'react'
import {
	Button,
	Text
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../../styles/global'
import PedidosContext from '../../context/pedidos/pedidosContext.js'

const BotonResumen = () => {
	const { pedido } = useContext(PedidosContext)
	const navigation = useNavigation()

	if(pedido.length == 0) return null;

	return (
		<Button
			style={globalStyles.boton}
			onPress={() => navigation.navigate("ResumenPedido") }
		>
			<Text style={globalStyles.botonTexto}>Ir a Pedido</Text>
		</Button>
	)
}

export default BotonResumen
import React, {useReducer} from 'react'

import PedidosReducer from './pedidosReducer.js'
import PedidosContext from './pedidosContext.js'

import {
	SELECCIONAR_PRODUCTO,
	CONFIRMAR_PEDIDO_PLATILLO,
	RESUMEN_PEDIDO,
	ELIMINAR_PRODUCTO,
	PEDIDO_ORDENADO
} from '../../types/'

const PedidosState = props => {

	const initialState = {
		pedido: [],
		platillo: null,
		total: 0,
		idpedido: ""
	}

	const [state, dispatch] = useReducer(PedidosReducer, initialState);

	const seleccionandoPlatillo = platillo => {

		dispatch({
			type: SELECCIONAR_PRODUCTO,
			payload: platillo
		})
	}

	const guardarPedidoPlatillo = pedido => {
		dispatch({
			type: CONFIRMAR_PEDIDO_PLATILLO,
			payload: pedido
		})
	}

	const resumenPedido = valorTotal => {
		dispatch({
			type: RESUMEN_PEDIDO,
			payload: valorTotal
		})
	}

	const eliminarProducto = id => {
		dispatch({
			type: ELIMINAR_PRODUCTO,
			payload: id
		})
	}

	const guardarIdPedido = id => {
		dispatch({
			type: PEDIDO_ORDENADO,
			payload: id
		})
	}

	return (
		<PedidosContext.Provider
			value={{
				pedido: state.pedido,
				total: state.total,
				platillo: state.platillo,
				idpedido: state.idpedido,
				seleccionandoPlatillo,
				guardarPedidoPlatillo,
				resumenPedido,
				eliminarProducto,
				guardarIdPedido
			}}
		>
			{props.children}
		</PedidosContext.Provider>
	)
}


export default PedidosState;
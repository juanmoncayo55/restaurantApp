import React, {useReducer} from 'react'

import PedidosReducer from './pedidosReducer.js'
import PedidosContext from './pedidosContext.js'

import {
	SELECCIONAR_PRODUCTO,
	CONFIRMAR_PEDIDO_PLATILLO,
	RESUMEN_PEDIDO
} from '../../types/'

const PedidosState = props => {

	const initialState = {
		pedido: [],
		platillo: null,
		total: 0
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

	return (
		<PedidosContext.Provider
			value={{
				pedido: state.pedido,
				total: state.total,
				seleccionandoPlatillo,
				platillo: state.platillo,
				guardarPedidoPlatillo,
				resumenPedido
			}}
		>
			{props.children}
		</PedidosContext.Provider>
	)
}


export default PedidosState;
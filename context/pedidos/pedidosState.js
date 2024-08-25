import React, {useReducer} from 'react'

import PedidosReducer from './pedidosReducer.js'
import PedidosContext from './pedidosContext.js'

import {
	SELECCIONAR_PRODUCTO,
	CONFIRMAR_PEDIDO_PLATILLO
} from '../../types/'

const PedidosState = props => {

	const initialState = {
		pedido: [],
		platillo: null
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

	return (
		<PedidosContext.Provider
			value={{
				pedido: state.pedido,
				seleccionandoPlatillo,
				platillo: state.platillo,
				guardarPedidoPlatillo
			}}
		>
			{props.children}
		</PedidosContext.Provider>
	)
}


export default PedidosState;
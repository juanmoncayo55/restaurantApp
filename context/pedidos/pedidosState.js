import React, {useReducer} from 'react'

import PedidosReducer from './pedidosReducer.js'
import PedidosContext from './pedidosContext.js'

import { SELECCIONAR_PRODUCTO } from '../../types/'

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

	return (
		<PedidosContext.Provider
			value={{
				pedido: state.pedido,
				seleccionandoPlatillo,
				platillo: state.platillo
			}}
		>
			{props.children}
		</PedidosContext.Provider>
	)
}


export default PedidosState;
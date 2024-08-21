import React, {useReducer} from 'react'

import PedidosReducer from './pedidosReducer.js'
import PedidosContext from './pedidosContext.js'

const PedidosState = props => {

	const initialState = {
		pedido: []
	}
	const [state, dispatch] = useReducer(PedidosReducer, initialState);




	return (
		<PedidosContext.Provider
			value={{
				pedido: state.pedido
			}}
		>
			{props.children}
		</PedidosContext.Provider>
	)
}


export default PedidosState;
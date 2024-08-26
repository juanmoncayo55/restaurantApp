import {
	SELECCIONAR_PRODUCTO,
	CONFIRMAR_PEDIDO_PLATILLO,
	RESUMEN_PEDIDO
} from '../../types/'

export default (state,action) => {
	switch(action.type){
		case SELECCIONAR_PRODUCTO:
			return {
				...state,
				platillo: action.payload
			}
		case CONFIRMAR_PEDIDO_PLATILLO:
			return {
				...state,
				pedido: [...state.pedido, action.payload]
			}
		case RESUMEN_PEDIDO:
			return {
				...state,
				total: action.payload
			}

		default:
			return state;
	}
}
import {
	SELECCIONAR_PRODUCTO,
	CONFIRMAR_PEDIDO_PLATILLO,
	RESUMEN_PEDIDO,
	ELIMINAR_PRODUCTO,
	PEDIDO_ORDENADO
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
		case ELIMINAR_PRODUCTO:
			return {
				...state,
				pedido: state.pedido.filter(producto => producto.id !== action.payload)
			}
		case PEDIDO_ORDENADO:
			return {
				...state,
				pedido: [],
				total: 0,
				idpedido: action.payload
			}

		default:
			return state;
	}
}
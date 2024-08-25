import {OBTENER_PRODUCTOS_EXISTENTE} from '../../types/'

export default (state,action) => {
	switch(action.type){
		case OBTENER_PRODUCTOS_EXISTENTE:
			return {
				...state,
				menu: action.payload
			}
		default:
			return state;
	}
}

/*
	2. Despues de importar createContext y exportarlo, procedemos a crear el reducer aqui es donde creamos las acciones y mentenemos el state
*/
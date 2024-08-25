import React, {useReducer} from 'react'

import firebase from '../../firebase'
import FirebaseReducer from './firebaseReducer.js'
import FirebaseContext from './firebaseContext.js'

import {OBTENER_PRODUCTOS_EXISTENTE} from '../../types/'

const FirebaseState = props => {

	//Crear State Inicial
	const initialState = {
		menu: []
	}

	// useReducer con dispath para ejecutar las funciones
	const [state, dispatch] = useReducer(FirebaseReducer, initialState);

	//Funcion que se ejecuta para obtener los productos
	const obtenerProductos = () => {
		//consultar firebase
		firebase.db
			.collection("productos")
			.where('existencia', "==", true) //trae solo los productos que existencia sea igual a true
			.onSnapshot(manejarSnapshop);

		function manejarSnapshop(sanpshot){
			let platillos = sanpshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data()
				}
			})

			dispatch({
				type: OBTENER_PRODUCTOS_EXISTENTE,
				payload: platillos
			});
		}
	}


	return (
		<FirebaseContext.Provider
			value={{
				menu: state.menu,
				firebase,
				obtenerProductos
			}}
		>
			{props.children}
		</FirebaseContext.Provider>
	)
}


export default FirebaseState;

/*
	- Aquí es donde importamos el reducer y el context
*/
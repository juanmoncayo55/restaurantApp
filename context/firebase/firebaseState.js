import React, {useReducer} from 'react'

import firebase from '../../firebase'
import FirebaseReducer from './firebaseReducer.js'
import FirebaseContext from './firebaseContext.js'

const FirebaseState = props => {

	//Crear State Inicial
	const initialState = {
		menu: []
	}

	// useReducer con dispath para ejecutar las funciones
	const [state, dispatch] = useReducer(FirebaseReducer, initialState);




	return (
		<FirebaseContext.Provider
			value={{
				menu: state.menu,
				firebase
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
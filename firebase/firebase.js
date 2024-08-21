import app from 'firebase/compat/app'
import 'firebase/compat/firestore'

import firebaseConfig from './config'

/* Creamos una clase Firebase para verificar la inicializacion de una aplicación Firebase */
class Firebase {
	constructor() {
	  if(!app.apps.length){ //Aquí verificamos si hay o no una app inicializada
	  	app.initializeApp(firebaseConfig); // de no ser asi, en esta línea inicializamos al app
	  }

	  this.db = app.firestore();
	}
}

const firebase = new Firebase()

export default firebase
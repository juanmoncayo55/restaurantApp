import React from 'react'
import { View, Text } from 'react-native'
import {NativeBaseProvider} from 'native-base'

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NuevaOrden from './view/NuevaOrden';
import Menu from './view/Menu';
import DetallePlatillo from './view/DetallePlatillo';
import FormularioPlatillo from './view/FormularioPlatillo';
import ResumenPedido from './view/ResumenPedido';
import ProgresoPedido from './view/ProgresoPedido';
import BotonResumen from './components/ui/BotonResumen'

//importar el state de context
import FirebaseState from './context/firebase/firebaseState'
import PedidosState from './context/pedidos/pedidosState'

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<>
			<NativeBaseProvider>
				<FirebaseState>
					<PedidosState>
						<NavigationContainer>
							 <Stack.Navigator
								screenOptions={{
									headerTitleAlign: "center",
									headerStyle: {
										backgroundColor: '#FFDA00'
									},
									headerTitleStyle: {
										fontWeight: "bold"
									}
								}}
							 >
								 <Stack.Screen
									name="NuevaOrden"
									component={NuevaOrden}
									options={{
										title: "Nueva Orden"
									}}
								 />

								 <Stack.Screen
									name="Menu"
									component={Menu}
									options={{
										title: "Nuestro Menu",
										headerRight: props => <BotonResumen />
									}}
								 />

								 <Stack.Screen
									name="DetallePlatillo"
									component={DetallePlatillo}
									options={{
										title: "Detalle Platillo"
									}}
								 />

								 <Stack.Screen
									name="FormularioPlatillo"
									component={FormularioPlatillo}
									options={{
										title: "Ordenar Platillo"
									}}
								 />
								 <Stack.Screen
									name="ResumenPedido"
									component={ResumenPedido}
									options={{
										title: "Resumen Pedido"
									}}
								 />
								 <Stack.Screen
									name="ProgresoPedido"
									component={ProgresoPedido}
									options={{
										title: "Progreso de Pedido"
									}}
								 />
							 </Stack.Navigator>
						</NavigationContainer>
					</PedidosState>
				</FirebaseState>
			</NativeBaseProvider>
		</>
	)
}

export default App
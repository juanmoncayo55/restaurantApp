import {StyleSheet} from 'react-native'

const globalStyles = StyleSheet.create({
	contenedor: {
		flex: 1
	},
	contenido: {
		marginHorizontal: '2.5%',
		flex: 1
	},
	boton: {
		backgroundColor: '#FFDA00',
		display: "block",
		borderRadius: 20
	},
	botonTexto: {
		textTransform: "uppercase",
		fontWeight: "bold",
		color: "#000"
	},
	titulo: {
		fontWeight: "500",
		fontSize: 30,
		marginTop: 40,
		marginBottom: 20,
		textAlign: 'center',
	},
	imagen: {
		width: "100%",
		height: 300
	},
	cantidad: {
		marginVertical: 20,
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold"
	}
})

export default globalStyles
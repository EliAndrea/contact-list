const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			listaContactos: [],
			nuevoContacto: {},
			contactoParaEliminar: ""
		},
		
		actions: {
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            crearNuevaLista: (lista) => {
				let estadoActual = getStore();
				estadoActual.listaContactos = lista;
				setStore({estadoActual});
            },
            crearNuevoContacto: (contacto) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: 'POST',
					body: JSON.stringify(contacto),
					headers:{'Content-Type': 'application/json'}
				}).then(res => res.json())
				.catch(error => alert("Ups!, ha ocurrido algo. El contacto NO ha sido guardado"))
				.then(response => alert("Contacto guardado"));
            },
            eliminarContacto: (id)=> {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: 'DELETE'
				}).then(res => res.json())
				.catch(error => alert("Ups!, ha ocurrido algo. El contacto NO se pudo eliminar"))
				.then(response => alert("Contacto eliminado"));
            }
		}
	};
};

export default getState;

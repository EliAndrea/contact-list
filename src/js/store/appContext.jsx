import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
			this.cargarNuevaLista = this.cargarNuevaLista.bind(this);
		}

		componentDidMount() {
			this.cargarNuevaLista();
		}
		cargarNuevaLista(){
			fetch("https://assets.breatheco.de/apis/fake/contact/agenda/eli")
				.then((response)=>{
					return response.json();
				})
				.then((responseJSon)=>{
					this.state.actions.crearNuevaLista(responseJSon);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;

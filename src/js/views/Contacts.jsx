import React from "react";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import { Context } from '../store/appContext.jsx';

export default class Contacts extends React.Component {
	constructor(){
		super();
		this.state = {
			showModal: false  
		};
	}
	render() {
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">Add new contact</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<Context.Consumer>
							{({store, actions})=>{
								let lista = store.listaContactos;
								let tarjetas = [];
								for(let i=0; i<lista.length; i++){
									tarjetas.push(<ContactCard key = {i} onDelete={() => this.setState({ showModal: true})} datos={lista[i]} />);	
								}
								return tarjetas;
							}}
						</Context.Consumer>
					</ul>
				</div>
			</div>
			<Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
		</div>
		);
	}
}

import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class AddContact extends React.Component {
	constructor(){
		super();
		this.state = {
			full_name: "",
			email: "",
			address: "",
			phone: ""
		};
		this.obtenerNombre = this.obtenerNombre.bind(this);
		this.obtenerEmail = this.obtenerEmail.bind(this);
		this.obtenerDireccion = this.obtenerDireccion.bind(this);
		this.obtenerTelefono = this.obtenerTelefono.bind(this);
		this.guardarDatos = this.guardarDatos.bind(this);
	}
	
	obtenerNombre(e){
		this.setState({full_name: e.target.value});
	}
	obtenerEmail(e){
		this.setState({email: e.target.value});
	}
	obtenerDireccion(e){
		this.setState({address: e.target.value});
	}
	obtenerTelefono(e){
		this.setState({phone: e.target.value});
	}
	guardarDatos(){
		let nuevoContacto = {
			full_name: this.state.full_name,
			email: this.state.email,
			agenda_slug: "eli",
			address: this.state.address,
			phone: this.state.phone
		};
		return nuevoContacto;
	}
	render() {
		let datos = this.state;
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input type="text" className="form-control" placeholder="Full Name" value={datos.full_name} 
								onChange={this.obtenerNombre}/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="Enter email" value={datos.email}
								onChange={this.obtenerEmail}/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="phone" className="form-control" placeholder="Enter phone" value={datos.phone}
								onChange={this.obtenerTelefono}/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" placeholder="Enter address" value={datos.address}
								onChange={this.obtenerDireccion}/>
						</div>
						<Context.Consumer>
							{({store, actions})=>{
								return <button type="button" className="btn btn-primary form-control" onClick={()=>{
									actions.crearNuevoContacto(this.guardarDatos());
								}
								}>save</button>;
							}
							}
						</Context.Consumer>
						<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
					</form>
				</div>
			</div>
		);
	}
}

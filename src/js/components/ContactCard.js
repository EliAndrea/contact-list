import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Context} from '../store/appContext.jsx';

class ContactCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			// initialize your state
		};
	}
	render(){
		return (
			<li className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className=" float-right">
							<button className="btn" onClick={() => this.props.history.push('/edit')}><i className="fas fa-pencil-alt mr-3"></i></button>
							<button className="btn" onClick={() => this.props.onDelete()}><i className="fas fa-trash-alt"></i></button>
						</div>
						<label className="name lead">{this.props.datos.full_name}</label>
						<br/> 
						<i className="fas fa-map-marker-alt text-muted mr-3"></i>
						<span className="text-muted">{this.props.datos.address}</span>
						<br/>
						<span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
						<span className="text-muted small">{this.props.datos.phone}</span>
						<br/>
						<span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
						<span className="text-muted small text-truncate">{this.props.datos.email}</span>
					</div>
				</div>
			</li>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
**/
ContactCard.propTypes = {
		history: PropTypes.object,
		onDelete: PropTypes.func,
		datos: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
**/
ContactCard.defaultProps = {
	onDelete: null
};
export default withRouter(ContactCard);
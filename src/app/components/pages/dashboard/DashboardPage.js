import React from 'react';
import { Route, Link } from "react-router-dom";


export default class DashboardPage extends React.Component {

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h1>Dashboard</h1>
						<Link to="/login">go to login</Link>						
					</div>
				</div>
			</div>
		)
	}

}
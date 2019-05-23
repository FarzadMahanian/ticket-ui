import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";


import { setNavbarTitle } from '../../actions/AppActions';
import DashboardPage from '../pages/dashboard/DashboardPage';
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/signup/SignupPage';
import UserPage from '../pages/user/UserPage';
import AdminPage from '../pages/admin/AdminPage';
import SettingPage from '../pages/admin/SettingPage';
import UsersPage from '../pages/admin/UsersPage';
import TicketsPage from "../pages/admin/TicketsPage";

class MainContainerComponent extends React.Component {

	componentWillMount() {
		this.props.setNavbarTitle('صفحه داشبورد');
	}

	render() {
		return (
			<div>
				<Route exact path="/" component={LoginPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/signup" component={SignupPage} />
				<Route path="/user" component={UserPage} />
				<Route path="/admin" component={AdminPage} />
				<Route path="/setting" component={SettingPage} />
				<Route path="/users" component={UsersPage} />
				<Route path="/tickets" component={TicketsPage} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		setNavbarTitle: (title) => dispatch(setNavbarTitle(title))
	}
}

let MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainerComponent)

export { MainContainer }
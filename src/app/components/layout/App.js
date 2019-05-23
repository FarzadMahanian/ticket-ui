import React from "react";
import { connect } from "react-redux";
import { Router as Router, Switch, Route } from "react-router-dom";

import history from "../../services/history";
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/signup/SignupPage';
import UserPage from '../pages/user/UserPage';
import AdminPage from '../pages/admin/AdminPage';
import SettingPage from '../pages/admin/SettingPage';
import UsersPage from '../pages/admin/UsersPage';
import TicketsPage from "../pages/admin/TicketsPage";
import { Navbar, Sidebar, MainContainer, Footer } from "./";
import * as AuthActions from "../../actions/AuthActions";
import "../../../../semantic/dist/semantic.rtl.min.css";

class App extends React.Component {

	componentDidMount() {
		let anonumousePages = ['/signup', '/login', '/'];
		let token = this.props.getToken();
		let path = history.location.pathname;
		if (!token) {
			if (anonumousePages.indexOf(path)<0) {
				this.props.logout();
				history.replace('/');
			}
		} else {
			this.props.getUserDetail();
		}
	}

	render() {
		return (
			<Router ref="router" history={history}>
				<div>
					<Navbar title={navbarTitle} />
					<div className="ui container page-container">
						<Switch>
							<Route exact path="/" component={LoginPage} />
							<Route path="/login" component={LoginPage} />
							<Route path="/signup" component={SignupPage} />
							<Route path="/user" component={UserPage} />
							<Route path="/admin" component={AdminPage} />
							<Route path="/setting" component={SettingPage} />
							<Route path="/users" component={UsersPage} />
							<Route path="/tickets" component={TicketsPage} />
						</Switch>
					</div>
				</div>
			</Router>
		);
		let { navbarTitle } = this.props;
	}

}

function mapStateToProps(store) {
	return {
		token: store.auth.token
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(AuthActions.logout()),
		getToken: () => dispatch(AuthActions.getToken()),
		getUserDetail: () => dispatch(AuthActions.getUserDetailAsync())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
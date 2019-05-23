import React from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import qs from "qs";
import * as AuthActions from "../../../actions/AuthActions";
import MessageBox from '../../common/MessageBox';

class AdminPage extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			isLogingIn : false,
			logedInSuccessfully: false
		};
	}

    componentDidMount() {
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
    }

	render() {
		let {isTokenFetchSuccessfull} = this.props;
		let {isLogingIn} = this.state;

		return (

			<div>
				<div id="scene">
					<div id="page-bg" className="first-element" data-depth="0.5"></div>
				</div>
				<div id="admin-login" className="ui segment">
					<img src="assets/img/logo-orig.png" />

					<form className="ui form" id="enter-password-form">
						<div className="field">
							<label>شماره موبایل</label>
							<input ref="mobileNum" type="text" name="mobile" placeholder="نام کاربزی" required />
						</div>
						<div className="field">
							<label>رمز عبور</label>
							<input ref="password" type="text" name="password" placeholder="رمز عبور" required />
						</div>
						<button className={"fluid ui primary button " + (isLogingIn? "loading" : "")} 
									onClick={this.handleLogin}>ورود</button>
					</form>
				</div>

						
						
			</div>
		)
	}

	handleLogin =  () => {
		let password = this.refs.password.value;
		let username = this.refs.mobileNum.value;
		this.setState({isLogingIn: true, logedInSuccessfully: false});
		this.props.login(username, password).then(() => {
		  this.props.getUserDetail().then((result) => {
				this.setState({isLogingIn: false, logedInSuccessfully:true});
				this.props.history.replace('/user');
			});
		}).catch((err) => {
			this.setState({isLogingIn: false, logedInSuccessfully:false});		
		});
	}

}

let mapStateToProps = (store) => {
	return {
		isTokenFetchSuccessfull: store.auth.isTokenFetchSuccessfull,
		isAuthenticated: store.auth.isAuthenticated,
		user: store.auth.user
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		login: (username, password) => dispatch(AuthActions.loginAsync(username, password)),
		getUserDetail: () => dispatch(AuthActions.getUserDetailAsync())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
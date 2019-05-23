import React from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";
import qs from "qs";

import * as AuthActions from "../../../actions/AuthActions";
import MessageBox from '../../common/MessageBox';

class LoginPage extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			isLogingIn : false,
			logedInSuccessfully: false
		};
	}

	componentDidMount() {

		if (this.props.getToken()) {
			this.props.history.replace('/user');
		}

		var scene = document.getElementById('scene');
		var parallax = new Parallax(scene);
		
	  this.mobileNumber =	qs.parse(this.props.history.location.search, { ignoreQueryPrefix: true }).mobileNumber;
		if (!this.mobileNumber) {
			this.props.history.replace('/signup');
		}
	}

	render() {
		let {isTokenFetchSuccessfull} = this.props;
		let {isLogingIn} = this.state;
		
		return (

			<div>
				{ isTokenFetchSuccessfull ? <MessageBox title='موفقیت' message='کد امنیتی با موفقیت به شماره شما ارسال شد' type='success'/>: null }				
				<div id="scene">
					<div id="page-bg" className="first-element" data-depth="0.5"></div>
				</div>
				<div id="enter-password" className="ui segment">
					<img src="assets/img/logo-orig.png" />

					<div className="ui form" id="enter-password-form">
						<div className="field">
							<label>کد امنیتی</label>
							<input id="password" ref="password" type="number" name="password" placeholder="کد امنیتی را وارد نمایید ..." required />
						</div>
						<Button primary fluid loading={isLogingIn} disabled={isLogingIn} onClick={this.handleLogin}>ورود</Button>
					</div>
				</div>
			</div>
			
		);
	}

	handleLogin =  () => {
		let password = this.refs.password.value;
		this.setState({isLogingIn: true, logedInSuccessfully: false});
		this.props.login(this.mobileNumber, password).then(() => {
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
		getUserDetail: () => dispatch(AuthActions.getUserDetailAsync()),
		getToken: () => dispatch(AuthActions.getToken())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
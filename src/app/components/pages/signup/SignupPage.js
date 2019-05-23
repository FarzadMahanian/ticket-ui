import React from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";

import * as AuthActions from "../../../actions/AuthActions";

class SignupPage extends React.Component {

    componentDidMount() {
			if (this.props.getToken()) {
				this.props.history.replace('/user');
			}

        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
	}

	render() {
		let {isFetchingToken} = this.props;

		return (
			<div>

				<div id="scene">
					<div id="page-bg" className="first-element" data-depth="0.5"></div>
				</div>
				<div id="enter-mobile" className="ui segment">
					<img src="assets/img/logo-orig.png" />

					<div className="ui form" id="enter-mobile-form">
						<div className="field">
							<label>شماره موبایل</label>
							<input ref="_mobileNum" type="number" name="mobile" placeholder="شماره موبایل خود را وارد کنید ..." required />
						</div>
						<Button fluid primary loading={isFetchingToken} 
							disabled={isFetchingToken} onClick={this.handleSignup}>دریافت کد</Button>
					</div>
				</div>


			</div>
		)
	}

	handleSignup = () => {
		let mobileNum =this.refs._mobileNum.value;
		this.props.generateToken(mobileNum).then(() => {
			this.props.history.push(`/login?mobileNumber=${mobileNum}`);
		});
	}

}

let mapStateToProps = (store) => {
	return {
		isFetchingToken: store.auth.isFetchingToken
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		getToken: () => dispatch(AuthActions.getToken()),
		generateToken: (id) => dispatch(AuthActions.getTokenAsync(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
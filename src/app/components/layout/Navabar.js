import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Dropdown, Icon } from "semantic-ui-react";

import * as AuthActions from "../../actions/AuthActions";
// import "../../assets/img/logo.png"

class NavbarComponent extends React.Component {

	componentDidMount() {
		// $('.ui.dropdown').dropdown();

		// $('.context.admin-menu .ui.sidebar').sidebar({
		// 	context: $('.context.admin-menu .bottom.segment')
		// }).sidebar('attach events', '.context.admin-menu .menu .item.menu-item');
	}

	render() {
		let { isAuthenticated, user } = this.props;
        return (
			<header>
				<div className="ui top fixed menu">

					<div className="item site-branding">
						<img src="assets/img/logo-orig.png" />
						<span className="site-name">سامانه ثبت شکایات و انتقادات</span>
					</div>

					<div className="right menu">
                        { isAuthenticated ?
                            [
                                (
                                    showSidbarToggle ?
										<div className="item menu-item" key="1">
											<i className="sidebar icon"></i>
										</div> : null
                                ),
								<Dropdown className="icon" item icon='user' simple key="2">
									<Dropdown.Menu>
										<Dropdown.Item>تغییر مشخصات</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item  onClick={this.handleLogout}>خروج</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>,
								<div className="item"  key="3">
							<span>
								{ user ? (`${user.firstName || ''} ${user.lastName || ''}`) : '...'}
							</span>
								</div>
                            ] : null
                        }
					</div>

				</div>
			</header>
        );

		let showSidbarToggle = user && user.isAgent;
	}
	handleLogout = () => {
		this.props.logout();
		this.props.history.replace('/');
	}
}

NavbarComponent.propTypes = {

}

let mapStateToProps = (store) => {
	return {
		isAuthenticated: store.auth.isAuthenticated,
		user: store.auth.user
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(AuthActions.logout())
	}
}


let Navbar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarComponent));
export {
	Navbar
};
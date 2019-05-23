import React from 'react';
import { connect } from "react-redux";
import "../../../../src/assets/img/sidebar-5.jpg";


class SidebarComponent extends React.Component {

	render() {
		return (
			<div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
				<div className="sidebar-wrapper">
					<div className="logo">
						<a href="http://www.lifeweb.ir" className="simple-text">
							لایف‌وب
						</a>
					</div>

					<ul className="nav">
						<li className="active">
							<a href="dashboard.html">
								<i className="pe-7s-graph"></i>
								<p>داشبورد</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="pe-7s-user"></i>
								<p>آیتم شماره ۱</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="pe-7s-note2"></i>
								<p>آیتم شماره ۲</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="pe-7s-news-paper"></i>
								<p>آیتم شماره ۳</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="pe-7s-science"></i>
								<p>آیتم شماره ۴</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="pe-7s-map-marker"></i>
								<p>آیتم شماره ۴</p>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="pe-7s-bell"></i>
								<p>آیتم شماره ۵</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);

export {
	Sidebar
};

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
// import { AppContainer } from "react-hot-loader";

import * as Store from './app/Store';
import App from './app/components/layout/App'
import './assets/style/style.scss';
import "./assets/img/logo-orig.png";
import "./assets/img/logo.png";
import "./assets/img/logo1.png";
import "./assets/img/logo2.png";
import "./assets/img/BG.jpg";

var store = Store.configureStore();

var Base = (
	<div>
		<Provider store={store}>
				<App/>
		</Provider>
	</div>
)

ReactDOM.render(Base, document.getElementById('app'));
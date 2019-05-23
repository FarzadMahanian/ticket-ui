import Axios from "axios";
import history from "./history";

export const BASE_URL = 'http://ticket.visitoiran.com/';

export function get(url, config) {
	return Axios.get(url, config);
}

export function post(url, data, config) {
	return Axios({
		method: 'post',
		url: url,
		data: data,
		...config
	});
}

export function auth_post(url, data, props, config) {
	let token = props.getToken();
	if (!token) {
		props.logout();
		history.replace('/signup');	
		return Promise.reject(null);
	}
	return post(BASE_URL + url, data, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	}).catch((err) => {
		if (err && err.response && err.response.status == 403) {
			props.logout();
			history.replace('/signup');	
		}
	});
}
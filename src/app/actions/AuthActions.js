
import ActionTypes from './ActionTypes';
import * as http from '../services/HttpServices';
import qs from "qs";

import history from "../services/history";

const BASE_URL = http.BASE_URL;

export function logout() {
	localStorage.removeItem('token');
	return {
		type: ActionTypes.AUTH_SIGNED_OUT
	}
}

export function loginAsync(username, password) {
	return (dispatch, store) => {
		let data = qs.stringify({
			grant_type: 'password',
			client_id: 'a87dd67a-8ce1-4ad6-bed1-38e7067a98d5',
			client_secret: 'admin',
			username,
			password
		});
		return http.post(BASE_URL+'oauth/token',data ).then((result) => {
			localStorage.setItem('token', result.data.access_token);
			dispatch(login(result.data.access_token));
		});
	}
}

export function getToken() {
	return (dispatch, store) => {
		if (store().auth.token) {
			return store().auth.token;
		} else {
			let token = localStorage.getItem('token');
			if (token) {
				dispatch(login(token));
				return token;
			} else {			
				return null;
			}
		}
	}
}

export function getUserDetailAsync() {
	return (dispatch,store) => {
		let token = store().auth.token;
		return http.post(BASE_URL+'api/getUserDetail?_format=json', {}, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		}).then((result) => {
			dispatch(setUserDetail(result.data));
		}).catch((err) => {
			dispatch(logout());
		});
	}
}

function setUserDetail(user) {
	return {
		type: ActionTypes.AUTH_SET_USER,
		user
	}
}

function login(token) {
	return {
		type: ActionTypes.AUTH_LOGED_IN,
		token
	}
}

export function getTokenAsync(id) {
	return (dispatch, store) => {
		dispatch(setFetchingTokenState(true));
		return http.get(BASE_URL+'api/getToken', {
			params: {
				'_format': 'json',
				id 
			}
		})
			.then(() => {
				dispatch(setFetchingTokenState(false));
				dispatch(setIsTokenFetchSuccessfull(true));
			}).catch(() => {
				dispatch(setFetchingTokenState(false));
				dispatch(setIsTokenFetchSuccessfull(false));				
			});
	}
}

function setIsTokenFetchSuccessfull(isSuccessfull) {
	return {
		type: ActionTypes.AUTH_SET_IS_TOKEN_FETCH_SUCCESSFULL,
		isSuccessfull: isSuccessfull
	}
}

function setFetchingTokenState(isFetching) {
	return {
		type: ActionTypes.AUTH_SET_FETCH_TOKEN_STATE,
		isFetchingToken: isFetching
	}
}
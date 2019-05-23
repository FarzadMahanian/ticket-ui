
import axios from 'axios';
import ActionTypes from './ActionTypes';
import _ from 'lodash';

let baseUrl = 'https://api.tahlilgar.org/api/';
let token   = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEwMDEsImlzcyI6Imh0dHBzOlwvXC9hcGkudGFobGlsZ2FyLm9yZ1wvYXBpXC92MVwvc2Vzc2lvbnMiLCJpYXQiOjE1MTQ3MTc1MzUsImV4cCI6MTUxNDcyODMzNSwibmJmIjoxNTE0NzE3NTM1LCJqdGkiOiJncVliN2ZteURRV1pBQ2VpIn0.WThD9Q_VoRoiQX4mouf3QrGIj-WdUVjAkQKak2XhoS4';

export function loadNewsCloudAsync() {
	return (dispatch, state) => {
		return axios.get(`${baseUrl}v2/news/subjects?count=100&token=${token}`).then((result) => {
			dispatch(loadNewsCloud(_.map(result.data.data,(i) => { 
				return {
					weight: i.weight,
					text: i.word,
					link: `https://tahlilgar.org/#/subject/news/word/${i.word}`
				}
			})));
		});
	}
}

export function loadNewsCloud(items) {
	return {
		type: ActionTypes.LOAD_NEWS_CLOUD,
		newsCloud: items
	}
}

export function loadCurrentUserInfoAsync() {
	return (dispatch, state) => {
		return axios.get(`${baseUrl}v2/me?token=${token}`).then((result) => {
			dispatch(loadCurentUserInfo(result.data.data));
		})
	}
}

export function loadCurentUserInfo(info) {
	return {
		type: ActionTypes.LOAD_CURRENT_USER_INFO,
		info: info
	}
}
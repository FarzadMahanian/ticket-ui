import ActionTypes from "../actions/ActionTypes";


let initialState = {
	newsCloud : [],
	userInfo: null
}

export  function LifeWebReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.LOAD_NEWS_CLOUD:
			return {
				...state,
				newsCloud: action.newsCloud
			}
		case ActionTypes.LOAD_CURRENT_USER_INFO:
			return {
				...state,
				userInfo: action.info
			}
		default:
			return state;
	}
}
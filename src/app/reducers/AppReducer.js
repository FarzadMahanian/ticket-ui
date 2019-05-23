
let initialState = {
	navbarTitle: ''
}

export function AppReducer(state = initialState, action) {
	switch (action.type) {
		case 'CAHNGE_NAVBAR_TITLE':
			return {
				...state,
				navbarTitle: action.title
			}
		default:
			return state;
	}
} 
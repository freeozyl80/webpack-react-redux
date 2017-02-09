import { combineReducers } from 'redux'
import { TEST, ONLY } from './action'

function deliverTest (state = 'testjs', action) {
	if (action.fn && typeof action.fn == 'function'){
		action.fn();
	}
	switch (action.type) {
		case 'TEST':
			return action.fn
		default:
			return state
	}
}

function showOnly (state = '', action) {
	console.log(action);
	switch (action.type) {
	    case ONLY:
	      	return state + action.text
	    default:
	    	return state;
	}
}

const rootReducer = combineReducers({ deliverTest, showOnly})

export default rootReducer
import { combineReducers } from 'redux'
import { TEST, ONLY, SHOW, HIDE } from './action'

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
	console.log(action,'2次');
	switch (action.type) {
	    case ONLY:
	      	return state + action.text
	    default:
	    	return '';
	}
}

function runText (state = '', action) {
	console.log(action.type,'测试');
	switch (action.type) {
		case SHOW:
			return action.text
		default:
			return '12312321'
	}
}

const rootReducer = combineReducers({ deliverTest, showOnly, runText})

export default rootReducer
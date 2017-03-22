export const TEST = 'TEST';
export const ONLY = 'ONLY';
export const SHOW = 'SHOW';
export const HIDE = 'HIDE';

export function test(fn) {
  return { type: TEST, fn }
}
export function only(text) {
	return { type: ONLY, text}
}

function show(id, text) {
	return { type: SHOW, id, text}
}
function hide(id) {
	return { type: HIDE, id}
}
let index = 0;
export function run(text) {
	return function (dispatch) {
		const id = index++;
		dispatch(show(id, text))

		setTimeout(() => {
			dispatch(hide(id))
		}, 10000)
	}
 }
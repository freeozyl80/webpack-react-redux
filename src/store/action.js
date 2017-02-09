export const TEST = 'TEST';
export const ONLY = 'ONLY';

export function test(fn) {
  return { type: TEST, fn }
}
export function only(text) {
	return { type: ONLY, text}
}
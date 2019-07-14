

export function throttle<F extends (a: A, a1: A1, a2: A2, a3: A3, a4: A4) => R, A, A1, A2, A3, A4, R>(cb: F, delay: number): F
export function throttle<F extends (a: A, a1: A1, a2: A2, a3: A3) => R, A, A1, A2, A3, R>(cb: F, delay: number): F
export function throttle<F extends (a: A, a1: A1, a2: A2) => R, A, A1, A2, R>(cb: F, delay: number): F
export function throttle<F extends (a: A, a1: A1) => R, A, A1, R>(cb: F, delay: number): F
export function throttle<F extends (a: A) => R, A, R>(cb: F, delay: number): F
export function throttle<F extends () => R, R>(cb: F, delay: number): F
export function throttle(cb: any, delay: number) {
	let block = false;
	return (...args: any[]) => {
		if (block) {
			return false;
		}
		block = true;
		setTimeout(() => (block = false), delay);
		cb(...args);
	};
}

import { createEvent, Effect, Event, sample, Store } from "effector";

export function sampleFrom<S, A, R, T extends Event<R> | Effect<R, any, any>>(
	source: Event<S> | Store<S> | Effect<S, any, any>,
	fn: (source: S, arg: A) => R,
	target: T
): [Event<A>, T];
export function sampleFrom<S, A, R>(
	source: Event<S> | Store<S> | Effect<S, any, any>,
	fn: (source: S, arg: A) => R
): [Event<A>, Event<R>];
export function sampleFrom<S>(source: Event<S> | Store<S> | Effect<S, any, any>): [Event<any>, Event<S>];
export function sampleFrom(source: any, fn?: any, target?: any): any {
	const clock = createEvent<any>();
	const unit = sample({ source, clock, fn, target });
	return [clock, unit];
}
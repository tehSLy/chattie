import { Store, Event, Effect, createEvent, sample } from "effector";


export function sampleTo<S>(source: Effect<S, any, any>|Event<S>|Store<S>, target: Event<S>|Effect<S, any, any>|Store<S>): Event<void>
export function sampleTo<S, R>(source: Effect<S, any, any>|Event<S>|Store<S>, fn: (source: S) => R, target: Event<R>|Effect<R, any, any>|Store<R>): Event<void>
export function sampleTo<S, R, A>(source: Effect<S, any, any>|Event<S>|Store<S>, fn: (source: S, arg: A) => R, target: Event<R>|Effect<R, any, any>|Store<R>): Event<A>
export function sampleTo(source: any, fn: any, target?: any): any{
	const clock = createEvent();
	const params = {
		source,
		fn: target ? fn : undefined,
		target: target ? target : fn,
		clock
	}
	sample(params)
	return clock;
}
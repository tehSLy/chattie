import { createEvent, Effect, Event, sample, Store } from "effector";

export const sampleFrom = <S, A>(
	source: Event<S> | Store<S> | Effect<S, any, any>,
	handler: (source: S, arg: A) => void
) => {
	const event = createEvent<A>();
	sample(source, event, handler);
	return event;
};

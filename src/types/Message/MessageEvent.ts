export interface MessageEvent<T = any> extends Event {
	data: T;
}
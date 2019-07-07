export const createCache = <T>(key: string) => ({
	set: (value: T) => localStorage.setItem(key, JSON.stringify(value)),
	get: (initial?: T): T => JSON.parse(localStorage.getItem(key)!) || initial
});

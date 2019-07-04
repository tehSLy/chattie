export const createCache = <T>(key: string) => ({
	set: (value: T) => localStorage.setItem(key, JSON.stringify(value)),
	get: () => JSON.parse(localStorage.getItem(key) as any) as T | null
});

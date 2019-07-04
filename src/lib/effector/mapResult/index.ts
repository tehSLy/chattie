export const mapResult = <R, M>(handler: (data: R) => M) => {
	return (_: M, { result }: { result: R }) => handler(result);
};

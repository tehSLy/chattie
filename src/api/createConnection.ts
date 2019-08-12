export const createConnection = () => {
	if(!process.env.WS_URL){
		throw new Error("No websocket address specified")
	}
	const connection = new WebSocket(process.env.WS_URL);


	return connection;
}
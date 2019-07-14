export const initials = (str: string) => {
	try {
		return str
			.split(" ")
			.splice(0, 2)
			.filter((p) => p)
			.map((p) => p[0])
			.join("")
			.toUpperCase();
			
	} catch (error) {
		return "N";
	}
};

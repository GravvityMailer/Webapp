export const SERVER_URL =
	process.env.NODE_ENV === "production"
		? "https://server.gravvity.in"
		: "http://localhost:8080";

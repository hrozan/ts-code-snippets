import { App } from "./app";

const app = new App();

app.run().then(() => {
	console.log("server running");
});

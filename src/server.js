const { PORT = 5001 } = process.env;

const app = require("./app");

const listener = () => console.log(`Listening on ${PORT}!`);
app.listen(PORT, listener);

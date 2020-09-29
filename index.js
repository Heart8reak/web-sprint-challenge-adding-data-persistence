const server = require('./api/server');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`\n*** The API is up and Running on PORT:${PORT} ***\n`);
});

const server = require('./api/server.js');

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => console.log(`\n** Listening on port: ${PORT} **\n`));

server.get('/', (req, res) => {
    res.send("API is running!");
  })
const debug = require('debug')('aston-martin:app');
const initDatabase = require('./config/mongo');
const initRoutes = require('./router');
const initCors = require('./config/cors');
const express = require("express");
const app = express();
app.use(express.json());

initCors(app)
initDatabase();
initRoutes(app);

app.get('/', (req, res) => {
	res.send('Server up and running!!')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    debug(`Server listening on port ${PORT}`)
});
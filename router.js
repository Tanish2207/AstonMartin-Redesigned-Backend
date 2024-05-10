const debug = require('debug')('aston-martin:routes')
const dealerController = require('./controller/dealerController')
const userController = require('./controller/userController')

module.exports = initRoutes = (app) => {
	debug('Initializing routes...')

	app.get('/dealers', dealerController.get)
	app.post('/users', userController.post)
	app.get("/", (req, res) => {
		res.send("Server up and running!!")
	});


	debug('Finished initializing routes...')
}

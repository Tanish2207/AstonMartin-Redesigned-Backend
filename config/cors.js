const debug = require('debug')('aston-martin:cors')
const cors = require("cors");

module.exports = initCors = (app) => {
    app.use(
        cors({
            credentials: true,
            origin: "*",
        })
    );
    debug("CORS initialized");
};

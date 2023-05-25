const { Router } = require( 'express' )

const routes = Router()

const usersRouter = require( './users.routes' )
const movieNotesRouter = require( './movienotes.routes' )

routes.use( "/users", usersRouter )
routes.use( "/moviesnotes", movieNotesRouter )


module.exports = routes
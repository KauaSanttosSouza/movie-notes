const { Router } = require( 'express' )

const routes = Router()

const usersRouter = require( './users.routes' )
const movieNotesRouter = require( './movienotes.routes' )
const categoriesRouter = require( './categories.routes' )

routes.use( "/users", usersRouter )
routes.use( "/moviesnotes", movieNotesRouter )
routes.use( "/categories", categoriesRouter )


module.exports = routes
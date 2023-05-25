const { Router } = require( 'express' )
const MovieNotesController = require('../controllers/movieNotesController')

const movieNotesController = new MovieNotesController()

const movieNotesRoutes = Router()

movieNotesRoutes.post("/:user_id", movieNotesController.create)

module.exports = movieNotesRoutes
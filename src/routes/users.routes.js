const { Router } = require( 'express' )
const UsersController = require( '../controllers/usersController' )

const usersController = new UsersController()

const usersRoutes = Router()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes
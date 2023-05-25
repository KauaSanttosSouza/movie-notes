const { Router } = require( 'express' )
const CategoriesController = require( '../controllers/categoriesController' )

const categoriesController = new CategoriesController()

const categoriesRoutes = Router()

categoriesRoutes.get("/:user_id", categoriesController.index)


module.exports = categoriesRoutes
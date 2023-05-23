const AppError = require('../utils/AppError')
class usersController {
   create( request, response ) {
      const { name, email, password } = request.body;

      if(!name) {
         throw new AppError("Please, fill in the name!")
      }

      return response.status(201).json({ name, email, password })
   }
}

module.exports = usersController
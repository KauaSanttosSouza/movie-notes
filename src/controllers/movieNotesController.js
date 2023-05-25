const knex = require('../database/knex')

class MovieNotesController {
   async create( request, response ) {
      const { title, description, rating, categories } = request.body;
      const { user_id } = request.params;

      const [note_id] = await knex("movie_notes").insert({
         title, 
         description, 
         rating,
         user_id
      });

      
      const categoriesInsert = categories.map(category => {
         return {
            note_id,
            category, 
            user_id
         };
      });

      await knex("categories").insert(categoriesInsert)

      return response.status(201).json()
   };
}

module.exports = MovieNotesController
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

   async show( request, response ) {

      const { id } = request.params;

      const movieNote = await knex("movie_notes").where({ id }).first()
      
      const category = await knex("categories").where({ note_id: id }).orderBy("category")

      
      return response.json({ 
         movieNote, 
         category
      })
   }

   async delete( request, response ) {
      const { id } = request.params;

      await knex("movie_notes").where({ id }).delete()

      return response.json()
   }

   async index( request, response ) {
      const { user_id, title, categories } = request.query;
      let notes;

      if( categories ) {
         const filterCategories = categories.split(",").map(category => category.trim())

         notes = await knex("categories")
         .select([ "notes.id", "notes.title", "notes.user_id" ])
         .where("notes.user_id", user_id)
         .whereLike("notes.title", `%${title}%`)
         .whereIn("name", filterCategories)
         .innerJoin("notes", "notes.id", "categories.note_id")
         .orderBy("notes.title")
      } else {

         notes = await knex("movie_notes")
         .where({ user_id })
         .orderBy("title")
         .whereLike("title", `%${title}%`)
      }
      
      const userCategories = await knex("categories").where({ user_id })
      const notesWithCategories = notes.map(note => {
         const noteCategories = userCategories.filter(category => category.note_id === note.id)

         return {
            ...note,
            categories: noteCategories
         }
      })

      return response.json(notesWithCategories)
   }
}

module.exports = MovieNotesController
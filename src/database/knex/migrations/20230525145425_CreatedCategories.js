
exports.up = knex => knex.schema.createTable("categories", table => {
   table.increments("id");
   table.integer("note_id").references("id").inTable("movie_notes").onDelete("CASCADE");
   table.integer("user_id").references("id").inTable("users");
   table.varchar("category").notNullable();
});

exports.down = knex => knex.schema.dropTable('categories');
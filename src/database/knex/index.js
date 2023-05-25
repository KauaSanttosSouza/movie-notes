const config = require('../../../knexfile')
const knex = require ('knex')

const connection = new knex( config.development )

module.exports = connection
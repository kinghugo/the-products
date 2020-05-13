
exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id_product')

        table.string('name_product').notNullable()
        table.string('category').notNullable()
        table.string('value').notNullable()
    })
  
};

exports.down = function (knex) {
    return knex.schema.dropTable('products')

};


exports.up = function(knex) {
    return knex.schema.createTable('vendedor', function (table) {
        table.string('cpf').primary();
        table.string('url').notNullable();
        table.string('imgVendName').notNullable()
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.integer('rg').notNullable();
        table.string('email').notNullable();
        table.integer('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vendedor');
};
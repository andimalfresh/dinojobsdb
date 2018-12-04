exports.up = function(knex, Promise) {
  return knex.schema.createTable("jobs", rows => {
    rows.increments("id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist("jobs");
};

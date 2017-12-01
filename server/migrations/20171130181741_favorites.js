exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', function (table) {
  table.increments('id');
  table.string('title').notNullable();
  table.string('thumbnail').notNullable();
  table.string('description').notNullable();
  table.string('videoId').notNullable().unique();
  table.timestamps(true,true);
});

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('youtube-favorites');
};

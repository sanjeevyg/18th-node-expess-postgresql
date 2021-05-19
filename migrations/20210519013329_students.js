
exports.up = function(knex) {
  return knex.schema.createTable('students', (student) => {
      student.increments('id')
      student.string('name')
      student.integer('phase')
  })
};

exports.down = function(knex) {
    knex.schema.dropTable('students')
  
};

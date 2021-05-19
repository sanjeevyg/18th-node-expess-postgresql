
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Sam', phase: 5},
        {name: 'Nick', phase: 3},
        {name: 'Arielle', phase: 5}
      ]);
    });
};

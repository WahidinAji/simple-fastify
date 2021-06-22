const {
  getStudentsOpts,
  getIdStudentOpts,
  postStudentsOpts,
  updateIdStudentOpts,
  deleteIdStudentOpts,
} = require('../options/StudentsOpts');

function studentRoutes(fastify, options, done) {
  // Get all students
  fastify.get('/students', getStudentsOpts);
  // Get by id students
  fastify.get('/students/:id', getIdStudentOpts);
  // Post single student
  fastify.post('/students', postStudentsOpts);
  // Update by id students
  fastify.put('/students/:id', updateIdStudentOpts);
  // Delete by id students
  fastify.delete('/students/:id', deleteIdStudentOpts);
  done();
}

module.exports = studentRoutes;

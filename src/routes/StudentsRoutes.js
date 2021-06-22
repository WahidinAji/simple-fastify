const {
  getAllStudents,
  getByIdStudents,
} = require('../controllers/StudentsController');
const Student = require('../repository/StudentRepository');

// Options for get student by id
const getStudentsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Student,
      },
    },
  },
  handler: getAllStudents,
};

const getIdStudentOpts = {
  schema: {
    response: {
      200: Student,
    },
  },
  handler: getByIdStudents,
};
function studentRoutes(fastify, options, done) {
  // Get all students
  fastify.get('/students', getStudentsOpts);
  // Get by id students
  fastify.get('/students/:id', getIdStudentOpts);
  done();
}

module.exports = studentRoutes;

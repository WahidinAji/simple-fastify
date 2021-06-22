const {
  getAllStudents,
  getByIdStudents,
  addStudents,
  updateStudents,
  deleteStudents,
} = require('../controllers/StudentsController');
const {
  SchemaGetAll,
  SchemaPost,
  SchemaDelete,
  SchemaGetIdorUpdate,
} = require('../schema/StudentSchema');

// Options for get all student
const getStudentsOpts = {
  schema: SchemaGetAll,
  handler: getAllStudents,
};
  // Options for get student by id
const getIdStudentOpts = {
  schema: SchemaGetIdorUpdate,
  handler: getByIdStudents,
};

// Options for add single student
const postStudentsOpts = {
  schema: SchemaPost,
  handler: addStudents,
};

// Options for update single student
const updateIdStudentOpts = {
  schema: SchemaGetIdorUpdate,
  handler: updateStudents,
};

// Options for delete single student
const deleteIdStudentOpts = {
  schema: SchemaDelete,
  handler: deleteStudents,
};

module.exports = {
  getStudentsOpts,
  getIdStudentOpts,
  postStudentsOpts,
  updateIdStudentOpts,
  deleteIdStudentOpts,
};

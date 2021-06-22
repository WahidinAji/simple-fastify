// const { v4: uuidv4 } = require('uuid');
const students = require('../model/Students');

const getAllStudents = (req, reply) => {
  reply.send(students);
};
const getByIdStudents = (req, reply) => {
  const { id } = req.params;
  const student = students.find((studentById) => studentById.id === id);
  reply.send(student);
};
module.exports = {
  getAllStudents,
  getByIdStudents,
};

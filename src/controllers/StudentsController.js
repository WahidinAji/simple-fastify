const { v4: uuidv4 } = require('uuid');
let students = require('../model/Students');

// Get all students
const getAllStudents = (req, reply) => {
  reply.send(students);
};
// Get by id students
const getByIdStudents = (req, reply) => {
  const { id } = req.params;
  const student = students.find((studentById) => studentById.id === id);
  reply.send(student);
};
// Add students
const addStudents = (req, reply) => {
  const { name, sex } = req.body;
  const student = {
    id: uuidv4(),
    name,
    sex,
  };
  students = [...students, student];
  reply.code(201).send(student);
};

// Update students
const updateStudents = (req, reply) => {
  const { id } = req.params;
  const { name, sex } = req.body;
  students = students.map((student) => (student.id === id ? { id, name, sex } : student));
  student = students.find((student) => student.id === id);
  reply.send(student);
};

// Delete single students
const deleteStudents = (req, reply) => {
  const { id } = req.params;
  students = students.filter((student) => student.id !== id);
  reply.send({ message: `Student ${id} has been removed` });
};
module.exports = {
  getAllStudents,
  getByIdStudents,
  addStudents,
  updateStudents,
  deleteStudents,
};

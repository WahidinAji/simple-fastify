const Student = require('./iStudents');
// Get All
const SchemaGetAll = {
  response: {
    200: {
      type: 'array',
      items: Student,
    },
  },
};

// Post
const SchemaPost = {
  body: {
    type: 'object',
    required: ['name', 'sex'],
    properties: {
      name: { type: 'string' },
      sex: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

// Update or Get by Id
const SchemaGetIdorUpdate = {
  response: {
    200: Student,
  },
};

// Delete
const SchemaDelete = {
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

module.exports = {
  SchemaPost,
  SchemaDelete,
  SchemaGetIdorUpdate,
  SchemaGetAll,
};

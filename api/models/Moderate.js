module.exports = {
  tableName: 'moderate_answers',

  attributes: {
    url: {
      type: 'string',
      unique: true,
    },
    caption: 'string',
    type: 'string',
    violation: 'string',
  },
}
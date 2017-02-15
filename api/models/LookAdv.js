module.exports = {
  tableName: 'look_advertisment',

  attributes: {
    imageName: 'string',
    answerIsAdv: 'boolean',
    answerName: 'string',
    evaluated: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
};

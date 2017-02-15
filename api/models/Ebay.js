module.exports = {
  tableName: 'ebay_answers',

  attributes: {
    title: {
      type: 'string',
      unique: true
    },

    answerButton: {
      type: 'string',
    },

    answerType: {
      type: 'string',
    },

    humanAnswer: {
      type: 'string'
    }
  }
};
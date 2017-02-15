/**
 * Clotching.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'clothing_answers',

  attributes: {
    url: 'text',
    gender: 'string',
    type: 'string',
    category: 'string',
    subcategory: 'string',
    evaluated: {
      type: 'boolean',
      defaultsTo: false
    },
    updateTimes: {
    	type: 'integer',
    	defaultsTo: 0
    }
  }
};



/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `likes`. (Can be re-generated.)
const merge = require('lodash.merge');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      uuid: {
        bsonType: "int"
      },
      authorUuid: {
        bsonType: "int"
      },
      commentUuid: {
        bsonType: "int"
      }
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end


// Application hooks that run for every service. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');

//!<DEFAULT> code: imports
const logger = require('./hooks/logger');
//!end

//!<DEFAULT> code: used
const { iff } = commonHooks; // eslint-disable-line no-unused-vars
//!end
//!code: init //!end

let moduleExports = {
  before: {
    all: [ 
      //!<DEFAULT> code: before_all
      logger(),
      //!end
    ],
    find: [
      //!code: before_find //!end
    ],
    get: [
      //!code: before_get //!end
    ],
    create: [
      //!code: before_create //!end
    ],
    update: [
      //!code: before_update //!end
    ],
    patch: [
      //!code: before_patch //!end
    ],
    remove: [
      //!code: before_remove //!end
    ]
  },

  after: {
    all: [
      //!<DEFAULT> code: after_all
      logger(),
      //!end
    ],
    find: [
      //!code: after_find //!end
    ],
    get: [
      //!code: after_get //!end
    ],
    create: [
      //!code: after_create //!end
    ],
    update: [
      //!code: after_update //!end
    ],
    patch: [
      //!code: after_patch //!end
    ],
    remove: [
      //!code: after_remove //!end
    ]
  },

  error: {
    all: [
      //!code: error_all //!end
    ],
    find: [
      //!code: error_find //!end
    ],
    get: [
      //!code: error_get //!end
    ],
    create: [
      //!code: error_create //!end
    ],
    update: [
      //!code: error_update //!end
    ],
    patch: [
      //!code: error_patch //!end
    ],
    remove: [
      //!code: error_remove //!end
    ]
  },
  //!code: moduleExports //!end
};

//!code: exports //!end
module.exports = moduleExports;

//!code: funcs //!end
//!code: end //!end
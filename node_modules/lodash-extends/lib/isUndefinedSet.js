'use strict';

const _ = {
    get: require('lodash').get,
    isUndefined: require('lodash').isUndefined,
    set: require('lodash').set,
};

module.exports = (obj, attr, set) => {
    if (_.isUndefined(_.get(obj, attr))) _.set(obj, attr, set);
};

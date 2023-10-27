'use strict';

const _ = {
    get: require('lodash').get,
    isPlainObject: require('lodash').isPlainObject,
    isUndefined: require('lodash').isUndefined,
    some: require('lodash').some,
};

module.exports = (array, prop) => {
    return _.some(array, (obj) => {
        if (!_.isPlainObject(obj)) return false;
        if (_.isUndefined(_.get(obj, prop))) return false;
        return true;
    });
};

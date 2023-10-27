'use strict';

const _ = {
    isNull: require('lodash').isNull,
    isUndefined: require('lodash').isUndefined,
};

module.exports = (value) => {
    if (_.isNull(value) || _.isUndefined(value)) return true;
    return false;
};

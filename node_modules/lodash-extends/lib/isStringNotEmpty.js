'use strict';

const _ = {
    isString: require('lodash').isString,
    isEmpty: require('lodash').isEmpty,
};

module.exports = (str) => (_.isString(str) && !_.isEmpty(str));

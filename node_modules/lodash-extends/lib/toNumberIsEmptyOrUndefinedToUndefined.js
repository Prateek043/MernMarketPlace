'use strict';

const _ = {
    isEmpty: require('lodash').isEmpty,
    isUndefined: require('lodash').isUndefined,
    toNumber: require('lodash').toNumber,
};

module.exports = (number) => (_.isEmpty(number) || _.isUndefined(number)) ? undefined : _.toNumber(number);

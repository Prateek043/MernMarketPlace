'use strict';

const _ = {
        isNumber: require('lodash').isNumber,
        isString: require('lodash').isString,
        toLower: require('lodash').toLower,
        toString: require('lodash').toString,
    },
    switchParse = {
        'true': true, '1': true,
        'false': false, '0': false,
    };

module.exports = (value) => {
    if (_.isNumber(value)) value = _.toString(value);
    value = _.toLower(value);
    return switchParse[value];
};

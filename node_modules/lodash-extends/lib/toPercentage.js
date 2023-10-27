'use strict';

const _ = {
    isArray: require('lodash').isArray,
    isEmpty: require('lodash').isEmpty,
    isNull: require('lodash').isNull,
    isString: require('lodash').isString,
    toNumberIsNaNToNull: $LEPath.include('/lib', 'toNumberIsNaNToNull.js'),
};

module.exports = (value) => {
    if (_.isString(value)) {
        if (_.isEmpty(value)) return null;
        value = value.replace(',', '.');
        if ((value.match(/\./g) || []).length > 1) {
            // @t: log warning
            return null;
        }
    }
    if (_.isArray(value) && _.isEmpty(value)) return null;
    value = _.toNumberIsNaNToNull(value);
    if (_.isNull(value)) return null;
    if (value < 0) return null;
    if (value > 1) value = value / 100;
    if (value > 1) return null;
    return value;
};

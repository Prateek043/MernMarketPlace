'use strict';

const _ = {
        isUndefined: require('lodash').isUndefined,
        each: require('lodash').each,
        isPlainObject: require('lodash').isPlainObject,
        isArray: require('lodash').isArray,
        isNumber: require('lodash').isNumber,
        isBoolean: require('lodash').isBoolean,
    },
    switchLodashOrMoongose = {
        lodash: (parent, key) => {
            if (_.isNumber(key)) {
                if (!_.isUndefined(parent)) return parent + '[' + key + ']';
                return '[' + key + ']';
            }
            return (!_.isUndefined(parent) ? parent + '.' : '') + key;
        },
        mongoose: (parent, key) => {
            return (!_.isUndefined(parent) ? parent + '.' : '') + key;
        },
    },
    // encontrar los path que cumplan con la key: value (condition)
    propsMatchFunction = (obj, fn, lodashOrMoongose, result, parent) => {
        if (_.isUndefined(lodashOrMoongose)) lodashOrMoongose = 'mongoose';
        if (_.isUndefined(result)) result = [];
        if (_.isPlainObject(obj) || _.isArray(obj)) {
            _.each(obj, (value, key) => {
                let fullpath = switchLodashOrMoongose[lodashOrMoongose](parent, key);
                if (fn(value)) result.push(fullpath);
                propsMatchFunction(value, fn, lodashOrMoongose, result, fullpath);
            });
        }
        return result;
    };

module.exports = propsMatchFunction;

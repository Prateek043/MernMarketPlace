'use strict';

const _ = {
        concat: require('lodash').concat,
        isArray: require('lodash').isArray,
        mergeWith: require('lodash').mergeWith,
    },
    arrayConcat = (objValue, srcValue) => {
        if (_.isArray(objValue)) return objValue = _.concat(objValue, srcValue);
    };

module.exports = (object, other) => _.mergeWith(object, other, arrayConcat);
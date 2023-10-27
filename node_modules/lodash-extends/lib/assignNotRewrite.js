'use strict';

const _ = {
        assignWith: require('lodash').assignWith,
        isUndefined: require('lodash').isUndefined,
        partialRight: require('lodash').partialRight,
    },
    checkExistValue = (objValue, srcValue) => _.isUndefined(objValue) ? srcValue : objValue;

module.exports = _.partialRight(_.assignWith, checkExistValue);

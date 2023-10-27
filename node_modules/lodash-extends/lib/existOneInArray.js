'use strict';

const _ = {
    some: require('lodash').some,
    existInArray: $LEPath.include('/lib', 'existInArray.js'),
};

module.exports = (checkArray, array) => _.some(checkArray, (value) => _.existInArray(value, array));

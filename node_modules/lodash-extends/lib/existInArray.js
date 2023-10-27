'use strict';

const _ = {
    indexOf: require('lodash').indexOf,
};

module.exports = (value, array) => _.indexOf(array, value) != -1;

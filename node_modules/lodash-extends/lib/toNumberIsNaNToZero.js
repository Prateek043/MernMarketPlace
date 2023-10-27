'use strict';

const _ = {
    isNaN: require('lodash').isNaN,
    toNumber: require('lodash').toNumber,
};

module.exports = (number) => (_.isNaN(_.toNumber(number))) ? 0 : _.toNumber(number);

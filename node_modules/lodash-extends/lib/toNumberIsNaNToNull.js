'use strict';

const _ = {
    isNaN: require('lodash').isNaN,
    toNumber: require('lodash').toNumber,
};

module.exports = (number) => (_.isNaN(_.toNumber(number))) ? null : _.toNumber(number);

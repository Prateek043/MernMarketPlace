'use strict';

module.exports = (length) => {
    length = length || 5;
    return Math.random().toString(35).substr(2, length);
};

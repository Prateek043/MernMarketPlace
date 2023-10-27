'use strict';

const uuid = {
    v4: require('uuid').v4,
};

module.exports = () => {
    return uuid.v4();
};

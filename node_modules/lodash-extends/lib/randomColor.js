'use strict';

module.exports = () => {
    let letters = '0123456789ABCDEF',
        color = '#',
        i;
    for (i = 0; i < 6; i++ ) color += letters[Math.floor(Math.random() * 16)];
    return color;
};

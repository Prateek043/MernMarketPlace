'use strict';

const _ = {
    get: require('lodash').get,
    isEmpty: require('lodash').isEmpty,
    isFloat: $LEPath.include('/lib', 'isFloat.js'),
    isNull: require('lodash').isNull,
    slice: require('lodash').slice,
    toInteger: require('lodash').toInteger,
};

module.exports = (array, opts) => {
    let page = _.get(opts, 'page'),
        pageRange = _.get(opts, 'pageRange'),
        itemsPerPage = _.get(opts, 'itemsPerPage'),
        startPage,
        endPage,
        count = array.length,
        pages,
        range,
        offset;

    page = (page && page > 0) ? page : 1;
    pageRange = (pageRange) ? pageRange : null;
    itemsPerPage = (itemsPerPage && itemsPerPage > 0) ? itemsPerPage : 10;

    if (_.isNull(pageRange)) {
        startPage = page;
        endPage = page;
    } else {    
        startPage = pageRange[0];
        endPage = pageRange[1];
    }

    pages = count / itemsPerPage;
    pages = _.isFloat(pages) ? _.toInteger(pages + 1) : pages;
    offset = itemsPerPage * (startPage - 1);
    range = (endPage - startPage) + 1;
    offset = (offset > count) ? count : offset;

    if (page > pages && !_.isEmpty(array)) return null;
    
    array = _.slice(array, offset, (itemsPerPage * range) + offset);

    return {
        items: array,
        pagination: {
            page: page,
            first: 1,
            items: array.length,
            last: pages,
            next: (endPage >= pages) ? undefined : endPage + 1,
            pages: pages,
            prev: (endPage == 1) ? undefined: endPage -1,
            offset: offset,
            totalItems: count,
        },
    };
};
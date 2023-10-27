'use strict';

require('wrapper-path').init({pathRoot: __dirname, prefix: '$LE'});

module.exports = {
    assignNotRewrite: $LEPath.include('/lib', 'assignNotRewrite.js'),
    existInArray: $LEPath.include('/lib', 'existInArray.js'),
    existOneInArray: $LEPath.include('/lib', 'existOneInArray.js'),
    formatStringWithDictionary: $LEPath.include('/lib', 'formatStringWithDictionary.js'),
    format: $LEPath.include('/lib', 'formatStringWithDictionary.js'),
    isArrayObjectWithProp: $LEPath.include('/lib', 'isArrayObjectWithProp.js'),
    isFloat: $LEPath.include('/lib', 'isFloat.js'),
    isStringNotEmpty: $LEPath.include('/lib', 'isStringNotEmpty.js'),
    isUndefinedOrNull: $LEPath.include('/lib', 'isUndefinedOrNull.js'),
    isUndefinedSet: $LEPath.include('/lib', 'isUndefinedSet.js'),
    mergeWithArrayConcat: $LEPath.include('/lib', 'mergeWithArrayConcat.js'),
    paginate: $LEPath.include('/lib', 'paginate.js'),
    propsMatchFunction: $LEPath.include('/lib', 'propsMatchFunction.js'),
    randomColor: $LEPath.include('/lib', 'randomColor.js'),
    randomString: $LEPath.include('/lib', 'randomString.js'),
    toBoolean: $LEPath.include('/lib', 'toBoolean.js'),
    toNumberIsEmptyOrUndefinedToNull: $LEPath.include('/lib', 'toNumberIsEmptyOrUndefinedToNull.js'),
    toNumberIsEmptyOrUndefinedToUndefined: $LEPath.include('/lib', 'toNumberIsEmptyOrUndefinedToUndefined.js'),
    toNumberIsNaNToNull: $LEPath.include('/lib', 'toNumberIsNaNToNull.js'),
    toNumberIsNaNToZero: $LEPath.include('/lib', 'toNumberIsNaNToZero.js'),
    toPercentage: $LEPath.include('/lib', 'toPercentage.js'),
    uuid: $LEPath.include('/lib', 'uuid.js'),
    validPercentage: $LEPath.include('/lib', 'validPercentage.js'),
};

'use strict';

const _ = {
    templateSettings: require('lodash').templateSettings,
    template: require('lodash').template,
    isUndefined: require('lodash').isUndefined,
};

module.exports = (str, dict, regex) => {
    regex = (_.isUndefined(regex)) ? /{{([\s\S]+?)}}/gm : regex;
    _.templateSettings.interpolate = regex;
    let compiled = _.template(str);
    return compiled(dict);
};

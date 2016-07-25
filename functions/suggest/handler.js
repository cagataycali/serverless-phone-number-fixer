'use strict';
var phoneNumberFixer = require('phone-number-fixer');
//
module.exports.handler = function(event, context, cb) {
  return cb(null, {
    suggested: phoneNumberFixer.suggestion(event.number)
  });
};

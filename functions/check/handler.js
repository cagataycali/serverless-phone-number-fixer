'use strict';
var phoneNumberFixer = require('phone-number-fixer');
// phoneNumberFixer.check(number, countryCode)

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    checked: phoneNumberFixer.check(event.number, event.countryCode)
  });
};

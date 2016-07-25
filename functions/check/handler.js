'use strict';
var phoneNumberFixer = require('phone-number-fixer');
// phoneNumberFixer.check(number, countryCode)

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};

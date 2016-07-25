'use strict';
var phoneNumberFixer = require('phone-number-fixer');
// phoneNumberFixer.suggestion(number)
module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};

'use strict';

var Twit = require('twit');
var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

module.exports.handler = function (event, context, cb) {
  T.get('search/tweets',
    { q: 'MeteorCampNYC', count: 100 },
    function (err, data, response) {
      return cb(null, {
        response: data,
      });
    });

};

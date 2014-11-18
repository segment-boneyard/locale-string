
var countries = require('country-list')();
var langs = require('langs');

/**
 * Module exports
 */

module.exports = stringify;
module.exports.parse = parse;

/**
 * Convert the country and language to a locale string
 *
 *  stringify('Italian', 'Italy') -> 'it-It'
 *
 * @param {String} language
 * @param {String} country
 * @return {String} locale
 */

function stringify(language, country){
  if (!language) return;
  if (!langs.has('name', language)) return;
  // pair ISO 639-1 language code and ISO 3166-1-alpha-2 country code
  var langCode = langs.where('name', language)['1'];

  if (country) {
    var countryCode = countries.getCode(country);
    return countryCode ? langCode + '-' + countryCode : undefined;
  }

  return langCode;
};

/**
 * Parses a locale string and returns its country and language
 *
 *   parse('it-IT') -> { language: 'Italian', country: 'Italy' }
 *
 * @param {String} string  `en_US`
 * @return {String} [description]
 */

function parse(string){
  var result = {};
  var parts = string.split('-');
  var language = parts[0];
  var country = parts[1];
  if (!language) return;
  if (!langs.has('1', language)) return;

  if (country) {
    var countryName = countries.getName(country);
    if (!countryName) return;
    result.country = countryName;
  }

  result.language = langs.where('1', language).name;

  return result;
}

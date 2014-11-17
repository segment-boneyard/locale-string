
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
    if (!countries.getCode(country)) return;
    var countryCode = countries.getCode(country);
    return langCode + '-' + countryCode;
  } else {
    return langCode;
  }
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
  var language = string.split('-')[0];
  var country = string.split('-')[1];
  if (!language) return;
  if (!langs.has('1', language)) return;
  
  if (country) {
    if (!countries.getName(country)) return;
    
    return {
      language: langs.where('1', language).name,
      country: countries.getName(country)
    }
  } else {
    return {
      language: langs.where('1', language).name
    }
  }
}

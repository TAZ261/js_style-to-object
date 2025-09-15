'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.split(':').map((item) => item.trim()))
    .reduce((obj, [key, value]) => {
      obj[key] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;

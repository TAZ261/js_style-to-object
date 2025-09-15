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
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .map((declaration) => declaration.split(':').map((item) => item.trim()))
    .reduce((styleObject, [key, value]) => {
      if (key && key.length) {
        styleObject[key] = value;
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;

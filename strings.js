/**
 * Convert a String to Pascal Case format.
 * 
 * @param {String} text 
 * @returns Formatted String
 */

function formatText(text) {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult
}

//=====================================================================================

/**
 * Convert value into locale format or shortend. requires "short-number" module!
 * 
 * @param {String|Number} value the value
 * @param {Boolean} locale if the value should be locale format.
 * @param {Boolean} short true = short, false = formatted
 * @returns formatted String
 */

function formatValue(value, locale, short) {

  let number = Number(value);
  if (!number) return value;

  if (short === true) return shortener(number);
  if (locale === true) return number.toLocaleString();
  return value
}

//=====================================================================================

/**
 * Returns an ID as a String with the specified amout of characters.
 *
 * @param {Number} size amount of characters
 * @returns a random ID.
 */

function generateID(size) {
  return Math.random().toString().substr(2, size);
}

//=====================================================================================

/**
 * Replaces multiple things in one string.
 * 
 * @param {String} string The string that needs to be updated.
 * @param {Object} options A object with replacer strings.
 * @returns updated string with all replacements applied.
 */

function replacer(string, options) {

  for (const [name, value] of Object.entries(options)) {
    string = string.replaceAll(name, value);
  }
  return string
}
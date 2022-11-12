/**
 * Convert a hex color to its numeric value
 * @param {String} color Hex color
 * @returns {Number} Numeric color
 * @example let color = parseColor('#ff0000');
 */

// convert hex color to number
function parseColor(color) {
	if (color.startsWith('#')) {
		color = color.slice(1);
	}

	if (color.length === 3) {
		color = color
			.split('')
			.map((char) => char + char)
			.join('');
	}

	return parseInt(color, 16);
}

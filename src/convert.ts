/**
 * @description Convert a hex color to decimal.
 * @example convertHexToDecimal('#FFFFFF') // returns 16777215
 */
export function hexToDecimal(hex: string): number {
	// remove the # from the hex color
	hex = hex.replace('#', '');
	// convert the hex color to decimal
	return parseInt(hex, 16);
}

export default {
	hexToDecimal,
};

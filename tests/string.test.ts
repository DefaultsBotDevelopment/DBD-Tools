import { StringUtils } from '../src/string';

describe('StringUtils formatText function', () => {
	it('should format text to camel case', () => {
		const text = 'Hello World';

		const result = StringUtils.formatText(text, 'camel');

		expect(result).toBe('helloWorld');
	});

	it('should format text to pascal case', () => {
		const text = 'Hello World!';

		const result = StringUtils.formatText(text, 'pascal');

		expect(result).toBe('HelloWorld');
	});

	it('should format text to snake case', () => {
		const text = 'Hello World!';

		const result = StringUtils.formatText(text, 'snake');

		expect(result).toBe('hello_world');
	});

	it('should format text to kebab case', () => {
		const text = 'Hello World!';

		const result = StringUtils.formatText(text, 'kebab');

		expect(result).toBe('hello-world');
	});

	it('should return the same text if no casing is specified', () => {
		const text = 'Hello World!';

		// @ts-ignore
		const result = StringUtils.formatText(text, 'none');

		expect(result).toBe(text);
	});
});

describe('StringUtils generateId function', () => {
	it('should generate an ID with the specified amount of characters', () => {
		const size = 5;

		const result = StringUtils.generateId(size);

		expect(result.length).toBe(size);
	});

	it('should return an empty string when size is 0', () => {
		const size = 0;

		const result = StringUtils.generateId(size);

		expect(result).toBe('');
	});
});

describe('StringUtils generateUuid function', () => {
	it('should generate a UUID', () => {
		const result = StringUtils.generateUuid();

		expect(result.length).toBe(36);
	});
});

describe('StringUtils replacer function', () => {
	it('should replace all the placeholders with the correct values', () => {
		const string = 'Hello {name}, how are you?';

		const result = StringUtils.replacer(string, { name: 'John' });

		expect(result).toBe('Hello John, how are you?');
	});

	it('should return the same string if no placeholders are found', () => {
		const string = 'Hello World!';

		const result = StringUtils.replacer(string, { name: 'John' });

		expect(result).toBe(string);
	});

	it('should return the same string if no options are provided', () => {
		const string = 'Hello {name}, how are you?';

		const result = StringUtils.replacer(string, {});

		expect(result).toBe(string);
	});
});

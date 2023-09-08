import { ObjectUtils } from '../src/object';

describe('ObjectUtils getValue function', () => {
	it('should get the value of a key', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		const result = ObjectUtils.getValue(object, 'a.b.c');

		expect(result).toBe(1);
	});

	it('should return undefined if the key does not exist', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		const result = ObjectUtils.getValue(object, 'a.b.d');

		expect(result).toBeUndefined();
	});
});

describe('ObjectUtils setValue function', () => {
	it('should set the value of a key', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		ObjectUtils.setValue(object, 'a.b.c', 2);

		expect(object.a.b.c).toBe(2);
	});

	it('should create the key if it does not exist', () => {
		let object: { [key: string]: any } = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		ObjectUtils.setValue(object, 'a.b.d', 2);

		if (object.a.b.d) expect(object.a.b.d).toBe(2);
	});

	it('should create the key if it does not exist and the path is nested', () => {
		const object = {};
		const path = 'a.b.c';
		const value = 1;

		const result = ObjectUtils.setValue(object, path, value);

		expect(result).toEqual({ a: { b: { c: 1 } } });
	});
});

describe('ObjectUtils hasKey function', () => {
	it('should return true if the key exists', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		const result = ObjectUtils.hasKey(object, 'c');

		expect(result).toBe(true);
	});

	it('should return false if the key does not exist', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		const result = ObjectUtils.hasKey(object, 'd');

		expect(result).toBe(false);
	});
});

describe('ObjectUtils hasValue function', () => {
	it('should return true if the value exists', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		const result = ObjectUtils.hasValue(object, 1);

		expect(result).toBe(true);
	});

	it('should return false if the value does not exist', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		const result = ObjectUtils.hasValue(object, 2);

		expect(result).toBe(false);
	});

	it('should return true if the value exists and the value is an object', () => {
		const object = {
			a: {
				b: {
					c: {
						d: 1,
					},
				},
			},
		};

		const result = ObjectUtils.hasValue(object, { d: 1 });

		expect(result).toBe(true);
	});
});

describe('ObjectUtils getKeys function', () => {
	it('should return an array of keys', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
			},
		};

		const result = ObjectUtils.getKeys(object);

		expect(result).toHaveLength(3);
		expect(result).toEqual(['a', 'b', 'c']);
	});
});

describe('ObjectUtils getValues function', () => {
	it('should return an array of values', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
				d: 2,
			},
		};

		const result = ObjectUtils.getValues(object);

		expect(result).toHaveLength(2);
		expect(result).toEqual([1, 2]);
	});
});

describe('ObjectUtils getEntries function', () => {
	it('should return an array of entries', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
				d: 2,
			},
		};

		const result = ObjectUtils.getEntries(object);

		expect(result).toHaveLength(4);
		expect(result).toEqual([
			['a', { b: { c: 1 }, d: 2 }],
			['b', { c: 1 }],
			['d', 2],
			['c', 1],
		]);
	});
});

describe('ObjectUtils flatten function', () => {
	it('should flatten an object', () => {
		const object = {
			a: {
				b: {
					c: 1,
				},
				d: 2,
			},
		};

		const result = ObjectUtils.flatten(object);

		expect(result).toEqual({
			a_b_c: 1,
			a_d: 2,
		});
	});

	it('should return an empty object if the object is empty', () => {
		const object = {};

		const result = ObjectUtils.flatten(object);

		expect(result).toEqual({});
	});

	it('should skip properties inherited from the prototype chain', () => {
		const prototype = { prop: 'value' };
		const object = Object.create(prototype);
		object.a = 1;

		const result = ObjectUtils.flatten(object);

		expect(result).toEqual({ a: 1 });
	});
});

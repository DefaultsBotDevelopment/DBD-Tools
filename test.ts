export function setValue(object: Record<string, any>, path: string, value: any): Record<string, any> {
	const keys = path.split('.');
	const lastKey = keys.pop() as string;
	const targetObject = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), object);
	targetObject[lastKey] = value;
	return object;
}

export function getValue<T>(obj: Record<string, any>, path: string): T | undefined {
	return path.split('.').reduce((current, key) => (current && typeof current === 'object' && key in current ? current[key] : undefined), obj) as T | undefined;
}

let object = {
	one: {
		two: {
			three: 2,
			four: {
				five: 3,
			},
		},
	},
};

console.log(getValue(object, 'one.two.four')); // 2

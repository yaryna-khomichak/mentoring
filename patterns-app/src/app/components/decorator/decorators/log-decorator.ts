export function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const original = descriptor.value;
	if (typeof descriptor.value === 'function') {
		descriptor.value = function(...args: any[]) {
			console.log(`Arguments of ${propertyKey}: ${args}`);
			try {
				const result = original.apply(this, args);
				console.log(`Result: ${result}`);
				return result;
			} catch (e) {
				console.log(`Error: ${e}`);
				throw e;
			}
		};
	}

	return descriptor;
}

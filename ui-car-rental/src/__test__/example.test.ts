import {expect, test} from '@jest/globals';

test('adds 1 + 2 to equal 3', () => {
	const sum = (x: number, y:number) => {
		return x + y; 
	};
	expect(sum(1, 2)).toBe(3);
});
import { List, createList } from "./list";

describe("List", () => {
	let list: List<number>;
	beforeEach(() => {
		list = createList();
	});

	it("should create a list with 3 elements", () => {
		const a = [1, 3, 4];

		a.forEach((i) => {
			list.append(i);
		});

		let count = 0;
		list.forEach((i) => {
			expect(a[count]).toEqual(i);
			count++;
		});
	});
});

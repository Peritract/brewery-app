import each from 'jest-each';
import { getProportion } from './functions'

describe("getProportion", () => {

    each([
        [0.3333333333333333, 1, [1, 2, 3]],
        [0, 0, [1, 1, 1]],
        [NaN, 0, []]
    ]).test(`Returns %s when getting the proportion of %s in %s`, (expected, val, arr) => {
        expect(getProportion(arr, val)).toBe(expected);
    })
})

describe("getProportion", () => {

    test("Throws an error when not passed an array for arr", () => {
        expect(() => {
            getProportion("red", "blue");
        }).toThrow("arr must be an array")
    })
})


/**
 * 
 * Returns the proportion of an array that is a particular value
 * 
 * @param {*} arr - an array of elements
 * @param {*} val - the element to search for
 */
const getProportion = (arr, val) => {
    if (!Array.isArray(arr)){
        throw "arr must be an array";
    } else {
        return arr.filter(e => e == val).length / arr.length
    }
}

export { getProportion }
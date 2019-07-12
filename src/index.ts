/**
 * A method to split an array into an array of arrays with the size splitSize.
 * @param array - The array to split - Is not mutated by this function.
 * @param splitSize - Defines the max size of each internal array. Should be a positive number greater than 0
 * @returns A new array of arrays, split by the splitSize
 */
export function splitArray<T>(array: T[] | null | undefined, splitSize: number): T[][] {
  if (!array || splitSize <= 0) {
    return [];
  }

  const chunkedArray: T[][] = [];

  // Note that this iterates by splitSize, not by i++
  for (let i = 0; i < array.length; i += splitSize) {
    chunkedArray.push(array.slice(i, i + splitSize));
  }

  return chunkedArray;
}

import { splitArray, splitArrayLodash } from '../index';

describe('SplitArray function', () => {
  it('should handle null array', function() {
    expect(splitArray(null, 1)).toStrictEqual([]);
    expect(splitArrayLodash(null, 1)).toStrictEqual([]);
  });

  it('should handle undefined array', function() {
    expect(splitArray(undefined, 1)).toStrictEqual([]);
    expect(splitArrayLodash(undefined, 1)).toStrictEqual([]);
  });

  it('should handle empty array', function() {
    expect(splitArray([], 1)).toStrictEqual([]);
    expect(splitArrayLodash([], 1)).toStrictEqual([]);
  });

  it('should split array into multiple arrays of input size', function() {
    expect(splitArray([1, 2], 1)).toStrictEqual([[1], [2]]);
    expect(splitArrayLodash([1, 2], 1)).toStrictEqual([[1], [2]]);
  });

  it('should return two arrays when given an array of size 4 and split size of 2', function() {
    expect(splitArray([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]])
    expect(splitArrayLodash([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]])
  });

  it('should return two arrays with third element in remainder when given an array of size 3 and split size of 2', function() {
    expect(splitArray([1, 2, 3], 2)).toStrictEqual([[1, 2], [3]]);
    expect(splitArrayLodash([1, 2, 3], 2)).toStrictEqual([[1, 2], [3]]);
  });

  it('should return one array when given array size higher than the split size', function() {
    expect(splitArray([1, 2, 3], 5)).toStrictEqual([[1, 2, 3]]);
    expect(splitArrayLodash([1, 2, 3], 5)).toStrictEqual([[1, 2, 3]]);
  });

  it('should return one array when given array size equal to the split zie', function() {
    expect(splitArray([1, 2, 3], 3)).toStrictEqual([[1, 2, 3]]);
    expect(splitArrayLodash([1, 2, 3], 3)).toStrictEqual([[1, 2, 3]]);
  });
});

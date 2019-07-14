import { splitArrayBySize, splitArrayLodash } from '../index';

describe('SplitArray function', () => {
  describe('when given invalid inputs', function() {
    it('should handle null array', function() {
      expect(splitArrayBySize(null, 1)).toStrictEqual([]);
      expect(splitArrayLodash(null, 1)).toStrictEqual([]);
    });

    it('should handle undefined array', function() {
      expect(splitArrayBySize(undefined, 1)).toStrictEqual([]);
      expect(splitArrayLodash(undefined, 1)).toStrictEqual([]);
    });

    it('should handle empty array', function() {
      expect(splitArrayBySize([], 1)).toStrictEqual([]);
      expect(splitArrayLodash([], 1)).toStrictEqual([]);
    });

    it('should handle negative splitSize', function() {
      expect(splitArrayBySize([1], -1)).toStrictEqual([]);
      expect(splitArrayLodash([1], -1)).toStrictEqual([]);
    });

    it('should handle pathological splitSize inputs', function() {
      expect(splitArrayBySize([1, 2, 3], NaN)).toStrictEqual([]);
      expect(splitArrayBySize([1, 2, 3], undefined)).toStrictEqual([]);
      expect(splitArrayBySize([1, 2, 3], Infinity)).toStrictEqual([[1, 2, 3]]);
    });
  });

  it('should split array into multiple arrays of input size', function() {
    expect(splitArrayBySize([1, 2], 1)).toStrictEqual([[1], [2]]);
    expect(splitArrayLodash([1, 2], 1)).toStrictEqual([[1], [2]]);
  });

  it('should return two arrays when given an array of size 4 and split size of 2', function() {
    expect(splitArrayBySize([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]]);
    expect(splitArrayLodash([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]]);
  });

  it('should return two arrays with third element in remainder when given an array of size 3 and split size of 2', function() {
    expect(splitArrayBySize([1, 2, 3], 2)).toStrictEqual([[1, 2], [3]]);
    expect(splitArrayLodash([1, 2, 3], 2)).toStrictEqual([[1, 2], [3]]);
  });

  it('should return one array when given array size higher than the split size', function() {
    expect(splitArrayBySize([1, 2, 3], 5)).toStrictEqual([[1, 2, 3]]);
    expect(splitArrayLodash([1, 2, 3], 5)).toStrictEqual([[1, 2, 3]]);
  });

  it('should return one array when given array size equal to the split zie', function() {
    expect(splitArrayBySize([1, 2, 3], 3)).toStrictEqual([[1, 2, 3]]);
    expect(splitArrayLodash([1, 2, 3], 3)).toStrictEqual([[1, 2, 3]]);
  });

  it('should return multiple arrays with a large input', function() {
    expect(splitArrayBySize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
    expect(splitArrayLodash([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);

  });
});

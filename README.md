# Twig Coding Challenge

[![npm version](https://badge.fury.io/js/mikeporter-twig-coding-challenge.svg)](https://badge.fury.io/js/mikeporter-twig-coding-challenge)

My submission for the Twig coding challenge.

This library provides a function to split an array of type T[] into an array of arrays (T[][]) where the maximum size of 
an internal array is the splitSize given. 

If the array cannot be divided equally by the splitSize, the final array will contain the remainder.

### Example usage

Install via `npm install mikeporter-twig-coding-challenge`

Usage:
```javascript
import {splitArrayBySize} from 'mikeporter-twig-coding-challenge';

splitArrayBySize([1, 2, 3, 4], 2);
// [[1, 2], [3, 4]]

splitArrayBySize([1, 2, 3], 2);
// [[1, 2], [3]]
```

### Checking out project and running tests
```bash
git clone https://github.com/mikeporterdev/twig-coding-challenge
cd twig-coding-challenge
npm install
npm test
npm run compile
```

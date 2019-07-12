#Twig Coding Challenge

My submission for the Twig coding challenge.

This library provides a function to split an array of type T[] into an array of arrays (T[][]) where the maximum size of 
an internal library is the splitSize given. 

If the array cannot be divided equally by the splitSize, the final array will contain the remainder.

###Example usage

Install via `npm install mikeporter-twig-coding-challenge`

Usage:
```javascript
import {splitArray} from 'mikeporter-twig-coding-challenge';

splitArray([1, 2, 3, 4], 2);
// [[1, 2], [3, 4]]

splitArray([1, 2, 3], 2);
// [[1, 2], [3]]
```


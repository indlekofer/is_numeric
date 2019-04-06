# @indlekofer/is_numeric

[![npm version](https://badge.fury.io/js/%40indlekofer%2Fis_numeric.svg)](https://badge.fury.io/js/%40indlekofer%2Fis_numeric)

returns true for numbers (int, float) and strings containing only numbers (space is not a number).
false for boolean, undefined, null, empty strings, invalid strings, +/-infinity

## Usage

```js
import isNumeric from '@indlekofer/is_numeric';

console.log(isNumeric("100")); // -> true
```

## Params

  **data**: *string|number*  

## Return

  **boolean**  

/// ------------------------------- HANDY OPERATORS © HandyScript 9m/20d/23y -------------------------------

/**
 * the `is` function is used to compare values if they are truly equal
 * @param {Array[]} values
 * @example
 * is(1, 1) // true
 * is("hello", "hi") // false
 * * Objects are compared by their keys recursively
 * const obj1 = {name: "john", age: 20};
 * const obj2 = {name: "john", age: 20};
 * is(obj1, obj2) // true
 *
 * * Functions and Regular expressions are compared by their source code
 * const fn1 = () => console.log("hello");
 * const fn2 = () => console.log("hi");
 * is(fn1, fn2) // false
 * 
 * const reg1 = /hello/;
 * const reg2 = /hi/;
 * is(reg1, reg2) // false
 *
 * * Dates are compared by their millisecond representation
 * const date1 = new Date();
 * const date2 = new Date(date1.getTime());
 * is(date1, date2) // true

 */
export function is(...values: unknown[]): boolean {

  if (values.length < 2) {
    throw new Error("`is` function requires at least two arguments");
  }
  if (typeof values[0] !== typeof values[1]) return false;

  // eslint-disable-next-line @typescript-eslint/ban-types
  const isFunctionEqual = (...functions: Function[]): boolean => {
    if (functions.length < 2) {
      throw new Error("`isFunctionEqual` function requires at least two arguments");
    }
    
    let equal = false;
    const [firstFunction, ...restFunctions] = functions;

    for (const fnuc of restFunctions) {
      equal = firstFunction.toString() === fnuc.toString();
    }

    return equal;
  };

  const isDateEqual = (...dates: Date[]): boolean => {
    if (dates.length < 2) {
      throw new Error("`isDateEqual` function requires at least two arguments");
    }

    let equal = false;
    const [firstDate, ...restDates] = dates;

    for (const date of restDates) {
      equal = firstDate.getTime() === date.getTime();
    }

    return equal;
  };

  const isRegExpEqual = (...regexps: RegExp[]): boolean => {
    if (regexps.length < 2) {
      throw new Error("`isRegExpEqual` function requires at least two arguments");
    }

    let equal = false;
    const [firstRegExp, ...restRegexps] = regexps;

    for (const regexp of restRegexps) {
      equal = firstRegExp.toString() === regexp.toString();
    }

    return equal;
  };

  const isObjectEqual = (...objects: Record<string, unknown>[]): boolean => {
    if (objects.length < 2) {
      throw new Error("`isObjectEqual` function requires at least two arguments");
    }

    let equal = false;
    const [firstObject, ...restObjects] = objects;

    for (const object of restObjects) {
      const keys1 = Object.keys(firstObject);
      const keys2 = Object.keys(object);

      if (keys1.length !== keys2.length) return false;

      equal = keys1.every((key) => firstObject[key] === object[key]);
    }

    return equal;
  };

  const isArraysEqual = (...arrays: unknown[][]): boolean => {
    if (arrays.length < 2) {
      throw new Error("`isArraysEqual` function requires at least two arguments");
    }

    let equal = false;
    const [firstArray, ...restArrays] = arrays;

    for (const array of restArrays) {
      if (firstArray.length !== array.length) return false;

      equal = firstArray.every((value, index) => value === array[index]);
    }

    return equal;
  };


  const [firstValue, ...restValues] = values;

  switch (typeof firstValue) {
    // compare functions by their source code
    // eslint-disable-next-line @typescript-eslint/ban-types
    case "function": return isFunctionEqual(firstValue as Function, ...restValues as Function[]);

    // compare object by keys recursively
    case "object":
      if (firstValue === null) return restValues.every((value) => value === null);

      switch (firstValue.constructor) {
        // compare arrays by their values
        case Array: return isArraysEqual(firstValue as unknown[], ...restValues as unknown[][]);
        
        // compare dates by their millisecond representation
        case Date: return isDateEqual(firstValue as Date, ...restValues as Date[]);
        
        // compare regular expressions by their source code
        case RegExp: return isRegExpEqual(firstValue as RegExp, ...restValues as RegExp[]);

        default: return isObjectEqual(firstValue as Record<string, unknown>, ...restValues as Record<string, unknown>[]);
      }
    
    default: return restValues.every((value) => value === firstValue);
  }
}
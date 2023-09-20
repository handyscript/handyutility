/// ---------------------------------------------------------------------- ///
import * as Operators from "./utils/operators.js";
import * as Handy from "./utils/handy.js";
import * as Promises from "./utils/promises.js";

export { Operators, Handy, Promises };

/**
 * @description
 * The Utils object is a collection of all the utility functions
 */
const Utils = {
  /**
   * @description
   * The Operators object is a collection of all the utils operators
   */
  operators: Operators,

  /**
   * @description
   * The Handy object is a collection of all the handy utils functions
   */
  handy: Handy,

  /**
   * @description
   * The Promises object is a collection of all the promise utils functions
   */
  promises: Promises,
};

export default Utils;
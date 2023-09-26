<p align="center" width="100%">
<img width="100%" alt="Handy Utililty Cover" src="assets/HandyUtility-Banner.jpg"/>
</p>

<h1 align="center">Handy Utility</h1>

<p align="center">
A set of Javascript supplements utilities and functions
</p>

<p align="center">
<img alt="NPM DOWNLOADS" src="https://img.shields.io/npm/dw/handyutility?color=5319e7&style=flat-square">
<img alt="NPM LICENSE" src="https://img.shields.io/npm/l/handyutility?color=k&label=license&style=flat-square">
<img alt="NPM VERSION" src="https://img.shields.io/npm/v/handyutility?color=ff6905&label=npm&style=flat-square">
</p>

## Installation

You can install **Handy Utility** using npm:

```shell
npm install handyutility
```

Alternatively, you can use the **CDN** script to include the `hu.min.js` in your HTML file

```html
<script src="https://unpkg.com/browse/handyutility@latest/dist/hu.min.cjs"></script>
```

Alternatively, you can use the **CDN** script to include the `hu.min.js` in your HTML file

```html
<!-- VIA: jsdelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/handyutility@latest/dist/hu.min.js"></script>
<!-- VIA: unpkg CDN -->
<script src="https://unpkg.com/handyutility@latest/dist/hu.min.js"></script>
```

Otherwise, you can download the `hu.min.js` file from the [dist](./dist/hu.min.cjs) directory and include it in your HTML file, or [click here](https://cdn.jsdelivr.net/npm/handyutility@latest/dist/hu.min.cjs) to download it directly

```html
<script src="path/to/hu.min.js"></script>
```

## Usage

Once you have installed or included the **hu.min.js** file, you can start using the functions in your code.

```javascript
// Import the handyutility
import Utils from "handyutility";
// explicitly use the handy, operators and promises ...
import { Handy, Operators, Promises  } from "handyutility"

Utils.handy.IPify().then((ip) => {
  console.log(ip);
});

Handy.IPify().then((ip) => {
  console.log(ip);
});


```

## Utilities

### Handy

```javascript
Utils.handy.IPify()
```

Retrieve the IP address of the current machine.

```javascript
const url = new URL("https://www.google.com/search?q=handyscript");
Utils.handy.searchParamsSerializer(url: URL) // {q: "handyscript"}
```

Extract the search params from a URL

> There is more to discover ✨

### Operators

```javascript
Utils.operators.is(1, 1) // true
Utils.operators.is("hello", "hi") // false
// Objects are compared by their keys recursively
const obj1 = {name: "john", age: 20};
const obj2 = {name: "john", age: 20};
Utils.operators.is(obj1, obj2) // true

// Functions and Regular expressions are compared by their source code
const fn1 = () => console.log("hello");
const fn2 = () => console.log("hi");
Utils.operators.is(fn1, fn2) // false

const reg1 = /hello/;
const reg2 = /hi/;
Utils.operators.is(reg1, reg2) // false

// Dates are compared by their millisecond representation
const date1 = new Date();
const date2 = new Date(date1.getTime());
Utils.operators.is(date1, date2) // true
```

The `is` function is used to compare values if they are truly equal

> There is more to discover ✨

### Promises

```typescript
async function simulateAsyncOperation(attempt: number): Promise<number> {
  const randomSuccess = Math.random() < 0.5; // Simulate a success or failure randomly
  if (randomSuccess) {
    return attempt;
  } else {
    throw new Error(`Attempt ${attempt} failed`);
  }
}

async function main() {
  const maxAttempts = 5;
  const delayMs = 1000;

  try {
    const result = await Utils.promises.retry(async () => {
      const attempt = await simulateAsyncOperation(1); // Start with the first attempt
      if (attempt < maxAttempts) {
        throw new Error('Retry');
      }
      return attempt;
    }, maxAttempts, delayMs);

    console.log(`Operation succeeded on attempt ${result}`);
  } catch (error) {
    console.error(`Operation failed: ${error.message}`);
  }
}

main();
```

The `retry` function facilitates robust handling of transient failures in asynchronous operations, employing exponential backoff with a specified maximum retry limit

> There is more to discover ✨

## Contributing

Contributions are welcome, feel free to submit a pull request or an issue.

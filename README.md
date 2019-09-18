# JBKnowledge Styles

## Installation

```bash
npm install @jbknowledge/eslint-config
```

**package.json**
```json
{
  "eslintConfig": {
    "extends": ["@jbknowledge"]
  }
}
```

## Style Guide

### Table of Contents

### References

**Make `const`, not `var`**: `consts` are unreassignable which can prevent unintentional reassignment which is difficult to debug. [prefer-const](https://eslint.org/docs/rules/prefer-const), [no-const-assign](https://eslint.org/docs/rules/no-const-assign)

```js
// bad
var a = 1;

// good
const a = 1;
```

**Iff you must reassign, use `let`**: `lets` are blocked scoped unlike `var`. [no-var](https://eslint.org/docs/rules/no-var)

```js
// bad
var count = 1;
if (x) {
  count += 1;
}

// good
let count = 1;
if (x) {
  count += 1;
}
```

**Always declare one variable per line** [one-var](https://eslint.org/docs/rules/one-var)

```js
// bad
let foo = true,
    bar = false;

// good
let foo = true;
let bar = false;
```

### Objects

**Use object literal**: [no-new-object](https://eslint.org/docs/rules/no-new-object)

```js
// bad
const obj = new Object();

// good
const obj = {};
```

**Use property shorthand**: It is more readable and concise. [object-shorthand](https://eslint.org/docs/rules/object-shorthand)

```js
// bad
const obj = {
  a: a,
  b: function() {},
  [c]: function() {},
};

// good
const obj = {
  a,
  b() {},
  [c]() {},
  d: () => {}
};
```

**Prefer unquoted object properties**: It is easier to read, supported by syntax highlighters, etc. If none of the object's properties are invalid identifiers, none should be quoted.[quote-props](https://eslint.org/docs/rules/quote-props)

```js
// bad
const obj = { 
  'a': true,
  'a-a': false,
};

// good
const obj = { 
  a: true,
  'a-a': false,
};
```

**Use the spread operator instead of `Object.assign`**: The spread operator is stage 4 and should be used instead. [es/no-object-assign](https://mysticatea.github.io/eslint-plugin-es/rules/no-object-assign.html)

```js
// bad
const x = Object.assign({}, y);

// good
const x = { ...y };
```

**Use dot notation property accessors when possible**: [dot-notation](https://eslint.org/docs/rules/dot-notation)

```js
// bad
const x = foo['bar'];

// good
const x = foo.bar;
const y = foo[z]; // z is variable making square-brackets required
```

**Give objects room to breathe**: Large objects should be split into multiple lines. Small objects should be padded with whitespace. [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline), [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing), [key-spacing](https://eslint.org/docs/rules/key-spacing), [comma-spacing](https://eslint.org/docs/rules/comma-spacing)

```js
// bad
const a = {foo: 1};
const b = { foo: 1, bar: 2, baz: 3 };

// good
const a = { foo: 1 };
const b = {
  foo: 1,
  bar: 2,
  baz: 3
};
```

**Prefer destructuring**: [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

### Arrays

**Use array literals**: [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)

```js
// bad
const items = new Array();

// good
const items = [];
```

**Use array spreads to copy**:

```js
// bad
for(i = 0; i < original.length; i += 1) {
  copy[i] = original[i];
}

// good
const copy = [ ...original ];
```

**Use Array#push or the spread operator to append arrays**

```js
// bad
items[items.length] = 1;

// good
items.push(1);
const newItems = [...items, 1 ];
```

**Use return statements in array method callbacks**: [array-callback-return](https://eslint.org/docs/rules/array-callback-return)

```js
// bad
[1, 2, 3].map((x) => {
  doSomething(x);
});

// good
[1, 2, 3].map(x => doSomething(x));
[1, 2, 3].map((x) => {
  const y = doSomething(x);
  return doSomethingElse(y);
});
```

**Do not declare sparse arrays**: [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)

```js
// bad
const items = [,,'blue'];

// good
const items = ['blue'];
```

**Give arrays room to breathe**: [array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline), [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing), [array-element-newline](https://eslint.org/docs/rules/array-element-newline), [comma-spacing](https://eslint.org/docs/rules/comma-spacing)

```js
// bad
const items = [a,b];
const items = [ a, b, c, d ];

// good
const items = [ a, b ];
const items = [
  a, b, c, d
];
```

**Prefer destructuring**: [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

```js
// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

### Variables
<a name="variables--no-hoisting"></a><a name="1.1"></a>
- [1.1](#variables--no-hoisting) **No Hoisting**: When working with variables, you should pay close attention to the scope in which they are defined. eslint: [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)

  ```js
  function doTryCatch() {
      try {
          var build = 1;
      } catch (e) {
          var f = build;
      }
  }
  ```

>while hoisting is valid javascript, it can lead to confusion about where variables are coming from.

### Classes

<a name="classes--use-this"></a><a name="2.1"></a>
- [2.1](#classes--use-this) **Methods use `this`**: All class methods should be reliant on the class. If a method does not depend on `this`, then it can and should be defined externally to allow reuse. eslint: [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)

### Functions

<a name="functions--consistent-return"></a><a name="3.1"></a>
- [3.1](#functions--consistent-return) **Consistent returns**: All functions should have consistently typed return values. This will simplify the internal logic of consuming functions. eslint: [consistent-return](https://eslint.org/docs/rules/consistent-return)

### Conditionals

<a name="conditionals--1tbs"></a><a name="4.1"></a>
- [4.1](#conditionals--1tbs) **All conditionals should follow 1tbs**: All conditional blocks should be wrapped in braces for readability and error prevention. More information can be found [here](https://en.wikipedia.org/wiki/Indentation_style). eslint: [curly](https://eslint.org/docs/rules/curly), [brace-style](https://eslint.org/docs/rules/brace-style)

  ```js
  if (true) {
    doSomething();
  }
  ```

### Naming Conventions

**Avoid single letter names**: Be descriptive with your naming. eslint: [id-length](https://eslint.org/docs/rules/id-length)

```js
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

**Use camelCase** when naming objects, functions, and instances. eslint: [camelcase](https://eslint.org/docs/rules/camelcase)

```js
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

**Use PascalCase** only when naming constructors or classes. eslint: [new-cap](https://eslint.org/docs/rules/new-cap)

```js
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

**Use PascalCase** when you export a constructor / class / singleton / function library / bare object.

```js
const ExampleComponent = {
  // ...
};

export default ExampleComponent;
```

**No leading or trailing underscores**. eslint: [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle) 

From Airbnb's own documentation: 
> JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean “private”, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won’t count as breaking, or that tests aren’t needed. tl;dr: if you want something to be “private”, it must not be observably present.

```js
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// good
this.firstName = 'Panda';

// good, in environments where WeakMaps are available
// see https://kangax.github.io/compat-table/es6/#test-WeakMap
const firstNames = new WeakMap();
firstNames.set(this, 'Panda');
```

**Don't save references to `this`**. Instead, arrow functions or `bind()` should be used.

```js
// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
```

**A base filename should exactly match the name of its default export**.

```js
// file 1 contents
class CheckBox {
  // ...
}
export default CheckBox;

// file 2 contents
export default function fortyTwo() { return 42; }

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad
import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
```

**Use camelCase when you export-default a function**. Your filename should be identical to your function’s name.

```js
function exampleFunc() {
  // ...
}

export default exampleFunc;
```

**Acronyms and initialisms should always be all uppercased, or all lowercased**. Efforts should be made to avoid using acronyms at all.
> Why? Names are for readability, not to appease a computer algorithm.

```js
// bad
import SmsContainer from './containers/SmsContainer';

// bad
const HttpRequests = [
  // ...
];

// good
import SMSContainer from './containers/SMSContainer';

// good
const HTTPRequests = [
  // ...
];

// also good
const httpRequests = [
  // ...
];

// best
import TextMessageContainer from './containers/TextMessageContainer';

// best
const requests = [
  // ...
];
```

**You may optionally uppercase a constant** only if it 
1. is exported
2. is a const (it can not be reassigned), and 
3. the programmer can trust it (and its nested properties) to never change.

> Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable (and its properties) not to change.

- What about all const variables? - This is unnecessary, so uppercasing should not be used for constants within a file. It should be used for exported constants however.
- What about exported objects? - Uppercase at the top level of export (e.g. EXPORTED_OBJECT.key) and maintain that all nested properties do not change.

```js
// bad
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad
export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// ---

// allowed but does not supply semantic value
export const apiKey = 'SOMEKEY';

// better in most cases
export const API_KEY = 'SOMEKEY';

// ---

// bad - unnecessarily uppercases key while adding no semantic value
export const MAPPING = {
  KEY: 'value'
};

// good
export const MAPPING = {
  key: 'value'
};
```

### Testing

**Strive for 100% test coverage**: Tests should be written for all components. Aim to write many small, pure functions that are testable, and minimize side-effects. Whenever you fix a bug, *write a regression test*. A bug fixed without a regression test is almost certainly going to break again in the future.

## Contributors

`@jbknowledge/eslint-config` was built and is maintained by JBKLabs, [JBKnowledge Inc's](https://jbknowledge.com/) research and development team.

## Licensing

This package is licensed under Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.
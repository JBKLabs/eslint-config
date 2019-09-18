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

### Testing

**Strive for 100% test coverage**: Tests should be written for all components. Aim to write many small, pure functions that are testable, and minimize side-effects. Whenever you fix a bug, *write a regression test*. A bug fixed without a regression test is almost certainly going to break again in the future.

## Contributors

`@jbknowledge/eslint-config` was built and is maintained by JBKLabs, [JBKnowledge Inc's](https://jbknowledge.com/) research and development team.

## Licensing

This package is licensed under Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.
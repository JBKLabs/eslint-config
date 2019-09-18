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

**Give objects room to breathe**: Large objects should be split into multiple lines. Small objects should be padded with whitespace. [object-curly-newline]()

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

## Contributors

`@jbknowledge/eslint-config` was built and is maintained by JBKLabs, [JBKnowledge Inc's](https://jbknowledge.com/) research and development team.

## Licensing

This package is licensed under Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.
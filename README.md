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

### Variables
<a name="variables--no-hoisting"></a><a name="1.1"></a>
- [1.1](#variables--no-hoisting) **No Hoisting**: When working with variables, you should pay close attention to the scope in which they are defined.

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
- [2.1](#classes--use-this) **Methods use `this`**: All class methods should be reliant on the class. If a method does not depend on `this`, then it can and should be defined externally to allow reuse.

### Functions

<a name="functions--consistent-return"></a><a name="3.1"></a>
- [3.1](#functions--consistent-return) **Consistent returns**: All functions should have consistently typed return values. This will simplify the internal logic of consuming functions.

### Conditionals

<a name="conditionals--otbs"></a><a name="4.1"></a>
- [4.1](#conditionals--otbs) **All conditionals should follow otbs**: All conditional blocks should be wrapped in braces for readability and error prevention. More information can be found [here](https://en.wikipedia.org/wiki/Indentation_style).

```js
if (true) {
  doSomething();
}
```

## Contributors

`@jbknowledge/eslint-config` was built and is maintained by JBKLabs, [JBKnowledge Inc's](https://jbknowledge.com/) research and development team.

## Licensing

This package is licensed under Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.
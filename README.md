# eslint-config-typed-fp

An opinionated ESLint config to encourage pure(ish), typeful functional programming in TypeScript.

## Installation

```sh
yarn add --dev eslint-config-typed-fp \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-plugin-functional \
  eslint-plugin-total-functions \
  typescript
```

## Usage

1. Turn on TypeScript's [strict mode](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
2. Set up [ESLint + TypeScript](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md).
3. Update your `.eslintrc.js`:

```diff
module.exports = {
+  parser: "@typescript-eslint/parser",
  parserOptions: {
+    project: "./tsconfig.json",
+    ecmaVersion: 2018,
+    sourceType: "module"
  },
  extends: [
+  "typed-fp",
  ...
  ],
  plugins: [
+  "@typescript-eslint",
+  "functional",
+  "total-functions",
  ...
],
  rules: {
    ...
  }
};

```

## What's in the box?

Basically,
* the [recommended rules from ESLint](https://eslint.org/docs/rules/) itself,
* the [recommended rules from typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules),
* the [recommended rules from eslint-plugin-functional](https://github.com/jonaskello/eslint-plugin-functional#rulesets),
* the [recommended rules from my own eslint-plugin-total-functions](https://github.com/danielnixon/eslint-plugin-total-functions#rules), plus
* a selection of rules _not_ included in the recommended rulesets from all the above to encourage typed, functional programming.

See the `extends` and `rules` sections in [index.ts](https://github.com/danielnixon/eslint-config-typed-fp/blob/master/src/index.ts) for the details.

## Why typed FP?

TypeScript (in)famously considers slavish adherance to type-safety and soundness (at least at the cost of developer ergonomics) a [non-goal](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals#non-goals). With this ESLint config we take the opposite position.

Here's a selection of articles to motivate "why typed FP":

* [the case for immutability from immutable-js](https://github.com/immutable-js/immutable-js#the-case-for-immutability)
* [The abject failure of weak typing - Ken Scambler](http://rea.tech/the-abject-failure-of-weak-typing/)
* [No, dynamic type systems are not inherently more open - Alexis King](https://lexi-lambda.github.io/blog/2020/01/19/no-dynamic-type-systems-are-not-inherently-more-open/)
* [Parse, don’t validate - Alexis King](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
* [Types as axioms, or: playing god with static types - Alexis King](https://lexi-lambda.github.io/blog/2020/08/13/types-as-axioms-or-playing-god-with-static-types/)
* [There are more types than classes - Stephen Compall](https://typelevel.org/blog/2017/02/13/more-types-than-classes.html)
* [Dynamic Languages are Static Languages - Robert Harper](https://existentialtype.wordpress.com/2011/03/19/dynamic-languages-are-static-languages/)

## See Also

* https://github.com/danielnixon/eslint-plugin-total-functions
* https://github.com/danielnixon/readonly-types
* https://github.com/danielnixon/total-functions
* https://github.com/jonaskello/eslint-plugin-functional
* https://github.com/gcanti/fp-ts
* https://github.com/plantain-00/type-coverage
* https://github.com/immutable-js/immutable-js

# eslint-config-typed-fp

[![Build Status](https://travis-ci.org/danielnixon/eslint-config-typed-fp.svg?branch=master)](https://travis-ci.org/danielnixon/eslint-config-typed-fp)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdanielnixon%2Feslint-config-typed-fp%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/eslint-config-typed-fp.svg)](https://www.npmjs.com/package/eslint-config-typed-fp)

[![dependencies Status](https://david-dm.org/danielnixon/eslint-config-typed-fp/status.svg)](https://david-dm.org/danielnixon/eslint-config-typed-fp)
[![devDependencies Status](https://david-dm.org/danielnixon/eslint-config-typed-fp/dev-status.svg)](https://david-dm.org/danielnixon/eslint-config-typed-fp?type=dev)
[![peerDependencies Status](https://david-dm.org/danielnixon/eslint-config-typed-fp/peer-status.svg)](https://david-dm.org/danielnixon/eslint-config-typed-fp?type=peer)

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

1. Turn on TypeScript's [strict mode](https://www.typescriptlang.org/tsconfig#strict) and [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) option.
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
* [Static Optimizability](https://www.lihaoyi.com/post/FromfirstprinciplesWhyIbetonScalajs.html#static-optimizability) from _From first principles: Why I bet on Scala.js_ - Li Haoyi
* [From Rust to TypeScript - Alan Darmasaputra](https://valand.dev/blog/post/from-rust-to-typescript)
* https://counterexamples.org/

## See Also

* [TypeScript for Functional Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html)
* [Typed functional programming in TypeScript](https://gcanti.github.io/fp-ts/) (fp-ts)
* https://github.com/danielnixon/eslint-plugin-total-functions
* https://github.com/danielnixon/readonly-types
* https://github.com/danielnixon/total-functions
* https://github.com/jonaskello/eslint-plugin-functional
* https://github.com/gcanti/fp-ts
* https://github.com/plantain-00/type-coverage
* https://github.com/immutable-js/immutable-js

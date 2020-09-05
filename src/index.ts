export = {
  globals: {},
  env: {
    commonjs: true,
    es6: true,
  },
  overrides: [],
  plugins: ["@typescript-eslint", "functional", "total-functions"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:functional/recommended",
    "plugin:functional/external-recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:total-functions/recommended",
  ],
  rules: {
    // Additional rules that are not part of `eslint:recommended`.
    // See https://eslint.org/docs/rules/
    // eval is completely unsafe from a security point of view, but also from a type-safety point of view.
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-await-in-loop": "error",
    "no-new-wrappers": "error",
    // No 90s style coercion.
    eqeqeq: "error",
    "no-caller": "error",
    "require-unicode-regexp": "error",
    "no-loss-of-precision": "error",
    // Make typescript-eslint rules more aggressive.
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "never",
      },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
      },
    ],
    // Interfaces encourage OO, types encourage FP.
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    // Require unknown type annotation in catch blocks.
    // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
    "@typescript-eslint/no-implicit-any-catch": "error",
    // Don't need this given consistent-type-assertions bans type assertions entirely.
    "total-functions/no-unsafe-type-assertion": 0,
    // All methods on the `object` top type should be forbidden, they're an OOism.
    // TODO no-base-to-string catches `toString` at least, but `toLocaleString` and the rest should all be banned too.
    "@typescript-eslint/no-base-to-string": "error",
    // If someone happens to disable both consistent-type-assertions and no-unsafe-type-assertion, this rule will help show them that their
    // type assertion is unnecessary in at least one case (calls to `reduce`).
    // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    // Force array predicates to return something that could be either truthy and falsy.
    // TODO ideally this would be even stricter and require a actual boolean return type.
    // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    // See also https://github.com/microsoft/TypeScript/issues/19456
    "@typescript-eslint/no-unnecessary-condition": "error",
    // TODO replace tslint's no-any and no-unsafe-any
    // See https://github.com/typescript-eslint/typescript-eslint/issues/791
    // TODO new rules:
    // * [no-base-to-string] doesn't catch toLocaleString https://github.com/typescript-eslint/typescript-eslint/issues/2440
    // * Enforce array `some`/`every` predicates return boolean https://github.com/typescript-eslint/typescript-eslint/issues/2428
    // * Optional properties lead to unsoundness https://github.com/danielnixon/eslint-plugin-total-functions/issues/39
    // * Force mutable function parameters to be invariant https://github.com/danielnixon/eslint-plugin-total-functions/issues/41
    // * Ban index signatures entirely https://github.com/danielnixon/eslint-plugin-total-functions/issues/61
  },
  settings: {},
};

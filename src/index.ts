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
    "@typescript-eslint/no-implicit-any-catch": "error",
    // Don't need this given consistent-type-assertions bans type assertions entirely.
    "total-functions/no-unsafe-type-assertion": 0,
    // TODO replace tslint's no-any and no-unsafe-any
    // See https://github.com/typescript-eslint/typescript-eslint/issues/791
    // TODO new rules:
    // * Add a rule to enforce array `some`/`every` predicates return boolean https://github.com/typescript-eslint/typescript-eslint/issues/2428
    // * Optional properties lead to unsoundness https://github.com/danielnixon/eslint-plugin-total-functions/issues/39
    // * Force mutable function parameters to be invariant https://github.com/danielnixon/eslint-plugin-total-functions/issues/41
    // * Ban index signatures entirely https://github.com/danielnixon/eslint-plugin-total-functions/issues/61
  },
  settings: {},
};

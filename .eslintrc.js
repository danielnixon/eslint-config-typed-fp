module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "typed-fp",
    "plugin:sonarjs/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    "jest/globals": true,
    es6: true
  },
  plugins: ["jest", "sonarjs", "functional", "@typescript-eslint", "prettier", "total-functions"],
  rules: {
    "functional/functional-parameters": [
      "error",
      {
        "ignorePrefixSelector": [
          "CallExpression[callee.object.name='TE'][callee.property.name='tryCatch']",
          "CallExpression[callee.object.name='O'][callee.property.name='fold']",
          "CallExpression[callee.object.name='E'][callee.property.name='fromOption']"
        ]
      }
    ]
  }
};

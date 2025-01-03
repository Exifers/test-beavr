/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    ".eslintrc.base.js",
    "plugin:react-hooks/recommended"
  ],
  plugins: ["react-refresh", "react"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // https://www.npmjs.com/package/eslint-plugin-react#list-of-supported-rules
    "react/button-has-type": "error",
    "react/destructuring-assignment": "error",
    "react/display-name": "error",
    "react/forbid-dom-props": "error",
    "react/forbid-prop-types": "error",
    "react/hook-use-state": "error",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-fragments": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-key": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unsafe": "error",
    "react/no-unstable-nested-components": "error",
    "react/no-unused-class-component-methods": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-exact-props": "error",
    "react/prefer-stateless-function": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/state-in-constructor": "error",
    "react/static-property-placement": "error",
    "react/style-prop-object": "error",
  },
};

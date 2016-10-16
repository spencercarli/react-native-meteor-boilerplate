module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "arrow-body-style": 0,
    "react/jsx-no-bind": 0,
    "no-underscore-dangle": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": 0,
    "react/forbid-prop-types": 0,
    "arrow-parens": [1, "always"],
    "class-methods-use-this": 0,
    "no-case-declarations": 0,
    "import/no-named-as-default": 0,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
};

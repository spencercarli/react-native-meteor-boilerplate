module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "no-undef": 0,
    "no-else-return": 0,
    "arrow-body-style": 0,
    "no-unused-expressions": 0,
    "no-console": 0,
    "react/jsx-no-bind": 0,
    "no-underscore-dangle": 0,
    "react/jsx-first-prop-new-line": 0,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
};

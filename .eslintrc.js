// const fs = require('fs');
// const path = require('path');

// const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  // 'redux-saga
  plugins: ['react', 'react-hooks'],
// 'prettier-standard'
  extends: ['prettier', 'plugin:react/recommended', 'eslint:recommended'],
  rules: {
    'import/no-webpack-loader-syntax': 0,
    'react/display-name': 0,
    curly: ['error', 'all'],
    'no-console': ['error', { allow: ['error'] }],
    'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
    // 'prettier/prettier': ['error', prettierOptions]
  },
  globals: {
    GLOBAL: false,
    it: false,
    expect: false,
    describe: false
  }
};

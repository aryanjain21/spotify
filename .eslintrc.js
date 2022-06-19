// const fs = require('fs');
// const path = require('path');

// const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended", // Required for preset.
    "prettier",
  ],
  // 'redux-saga
  plugins: ['react', 'react-hooks', "simple-import-sort", "prettier"],
  rules: {
    /**
     * START: eslint default Rules
     * @description: Ref: https://eslint.org/docs/rules/
     */
    'import/no-webpack-loader-syntax': 0,
    'react/display-name': 0,
    curly: ['error', 'all'],
    'no-console': ['error', { allow: ['error'] }],
    'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
    // 'prettier/prettier': ['error', prettierOptions]
    "no-duplicate-imports": "error",
    "no-var": "error",
    "import/first": "error",
    "react/prop-types": 0,
    // "linebreak-style": ["error", "unix"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  globals: {
    GLOBAL: false,
    it: false,
    expect: false,
    describe: false
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      plugins: ["simple-import-sort"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Node.js built-ins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              [
                "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
              ],

              // `react` related packages come first.
              ["^react$"],

              // Side effect imports.
              ["^\\u0000"],

              ["^@?\\w"],

              // `lodash` related packages.
              ["^lodash$", "^lodash/"],

              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

              // Style imports.
              ["^.+\\.s?css$"],
            ],
          },
        ],
      },
    },
  ],
};

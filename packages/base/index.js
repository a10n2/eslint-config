module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    // warn
    'no-unused-vars': 'warn',
    'default-case': 'warn',
    'no-alert': 'warn',
    // error
    eqeqeq: 'error',
    'no-eval': 'error',
    'no-var': 'error',
    'no-await-in-loop': 'error',
    'no-duplicate-imports': 'error',
    'no-use-before-define': 'error',
    'default-case-last': 'error',
    'arrow-body-style': ['error', 'never'],
    // style warn
    'block-spacing': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'max-len': ['error', { code: 100, tabWidth: 2, comments: 65 }],
    // use 2-space
    indent: ['error', 2],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
  },
}

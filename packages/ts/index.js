module.exports = {
  extends: [
    '@a10n2/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // warn
    '@typescript-eslint/no-explicit-any': 'warn',
    // error
    '@typescript-eslint/member-ordering': [
      'error',
      { default: ['signature', 'method', 'constructor', 'field'] },
    ],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
  },
}

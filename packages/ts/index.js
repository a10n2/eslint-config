module.exports = {
  extends: [
    '@a10n2/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
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
    // off
    '@typescript-eslint/no-unsafe-argument': 'off',
  },
}

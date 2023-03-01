module.exports = {
  extends: [
    '@a10n2/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // warn
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    // error
    '@typescript-eslint/no-duplicate-enum-values': 'error',
  },
}

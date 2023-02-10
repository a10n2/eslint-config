module.exports = {
  extends: ['@a10n2/eslint-config-vue'],
  parserOptions: {
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue', '.tsx', '.jsx'],
  },
}

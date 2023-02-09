module.exports = {
  extends: "@a10n2/eslint-config-typescript",
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
}
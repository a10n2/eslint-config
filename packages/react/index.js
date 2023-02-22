module.exports = {
  extends: [
    '@a10n2/eslint-config-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // disable react unuse import by react 17
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
  },
  rules: {
    // warn
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'react/jsx-curly-newline': 2,
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'never',
        children: true,
        attributes: { allowMultiline: false, objectLiterals: 'always' },
      },
    ],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'never'],
    'react/jsx-indent': [
      2,
      2,
      { checkAttributes: true, indentLogicalExpressions: true },
    ],
    'react/jsx-indent-props': [
      2,
      { indentMode: 2, ignoreTernaryOperator: false },
    ],
    // error
    'react/hook-use-state': [1, { allowDestructuredState: true }],
    // react hook eslint rules
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
}

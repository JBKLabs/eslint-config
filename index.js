module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '~': '.',
          src: './src',
        },
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: ['jsx-a11y', 'react', 'import'],
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/media-has-caption': 0,
    'react/no-danger': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'implicit-arrow-linebreak': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'linebreak-style': 0,
    'function-paren-newline': 0,
    'no-underscore-dangle': 0,
    'max-len': 0,
    curly: ['error', 'all'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'import/prefer-default-export': 0,
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: [
        ['builtin', 'external'],
        'internal',
        ['parent', 'sibling', 'index'],
      ],
    }],
    'object-curly-newline': 0,
    'no-multiple-empty-lines': ['error', { max: 1 }],
  },
};

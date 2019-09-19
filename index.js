const fs = require('fs');
const readPkgUp = require('read-pkg-up');

const { package: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd())
});

const includeIfInstalled = (depName, ifTrue, ifFalse) =>
  [
    (name) =>
      pkg.peerDependencies &&
      (pkg.peerDependencies[name] ||
        pkg.peerDependencies['@jbknowledge/react-dev']),
    (name) =>
      pkg.dependencies &&
      (pkg.dependencies[name] || pkg.dependencies['@jbknowledge/react-dev']),
    (name) =>
      pkg.devDependencies &&
      (pkg.devDependencies[name] ||
        pkg.devDependencies['@jbknowledge/react-dev'])
  ].some((fn) => fn(depName))
    ? ifTrue
    : ifFalse;

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    './config/possible-errors.yml',
    './config/best-practices.yml',
    './config/variables.yml',
    './config/stylistic.yml',
    './config/plugin/es.yml',
    includeIfInstalled('prettier', './config/plugin/prettier.yml', ''),
    includeIfInstalled('react', './config/plugin/react.yml', '')
  ],
  settings: includeIfInstalled(
    'babel-plugin-module-resolver',
    {
      'import/resolver': {
        'babel-module': {
          alias: {
            '~': '.',
            src: './src'
          }
        }
      }
    },
    {}
  ),
  plugins: ['jsx-a11y', 'import'],
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/media-has-caption': 0,
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
    'function-paren-newline': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index']
        ]
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 1 }]
  }
};

const fs = require('fs');
const readPkgUp = require('read-pkg-up');

const { package: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd())
});

const ifInstalled = (depName) =>
  [
    (name) => pkg.peerDependencies && pkg.peerDependencies[name],
    (name) => pkg.dependencies && pkg.dependencies[name],
    (name) => pkg.devDependencies && pkg.devDependencies[name]
  ].some((fn) => fn(depName));

const ifAnyInstalled = (deps) => deps.some((name) => ifInstalled(name));

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
    ifAnyInstalled(['prettier', '@jbknowledge/react-dev'])
      ? './config/plugin/prettier.yml'
      : '',
    ifInstalled('react') ? './config/plugin/react.yml' : ''
  ],
  settings: ifAnyInstalled(['babel-plugin-module-resolver', '@jbknowledge/react-dev'])
    ? {
      'import/resolver': {
        'babel-module': {
          alias: {
            '~': '.',
            src: './src'
          }
        }
      }
    } : {},
  plugins: ['import'],
  parser: 'babel-eslint',
  rules: {
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

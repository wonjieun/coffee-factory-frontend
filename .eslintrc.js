module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'warn',
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};

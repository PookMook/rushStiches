module.exports = {
  env: {
      browser: true,
      node: true,
      es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
      },
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'prettier',
  ],
  rules: {
      'no-warning-comments': [
        'warn',
        { terms: ['todo', 'fixme'], location: 'anywhere' },
      ],
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
      'import/extensions': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
      'react/no-unescaped-entities': 'off',
      'import/no-cycle': ['off', { ignoreExternal: true }],
      'no-nested-ternary': 'off',
      'prefer-const': 'off',
      // needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
  },
  settings: {
      'import/resolver': {
          'babel-module': {
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
              moduleDirectory: ['node_modules', 'src'],
              paths: ['src'],
          },
      },
  },
};
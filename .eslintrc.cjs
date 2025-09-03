/* eslint-env node */
module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['apps/backend/**/*.{ts,js}'],
      env: { node: true, browser: false },
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['apps/frontend/**/*.{ts,tsx,js,jsx}'],
      env: { browser: true, node: false },
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}


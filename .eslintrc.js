module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    __dirname: 'readonly',
    __filename: 'readonly',
    exports: 'writable',
    module: 'readonly',
    require: 'readonly',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
  },
};

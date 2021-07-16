module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
    'prettier',
  ],
  rules: {
    'prettier-vue/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}

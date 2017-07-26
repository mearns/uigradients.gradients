module.exports = {
  env: {
    node: true
  },

  plugins: [
    'markdown'
  ],

  parserOptions: {
    ecmaVersion: 6
  },

  extends: 'airbnb-base',

  rules: {
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': ['error', 'never']
  },

  overrides: [
    {
      // It thinks these are app files, but actually just build tools.
      files: ['tools/**/*'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
      }
    },
    {
      files: ['**/*.json'],
      rules: {
        quotes: ['error', 'double'],
        'quote-props': ['error', 'always'],
        'no-unused-expressions': 'off',
        semi: 'off'
      }
    },
    {
      files: ['**/*.md'],
      rules: {
        'import/no-unresolved': 'off',
        'import/newline-after-import': 'off',
        'no-console': 'off'
      }
    }
  ]
};

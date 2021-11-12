module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    'template-curly-spacing': 'off',
    'jsx-a11y/href-no-hash': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never'
      }
    ],
    'import/named': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'implicit-arrow-linebreak': 0,
    indent: 0,
    'react/no-danger': 0,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line'
      }
    ],
    'function-paren-newline': [2, 'multiline'],
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    strict: 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    quotes: [2, 'single', 'avoid-escape'],
    'global-require': 0,
    'linebreak-style': 0,
    'comma-dangle': 0,
    camelcase: 0,
    'no-alert': 0,
    'no-console': 0,
    'max-len': 0,
    'func-names': 0,
    'arrow-parens': 0,
    radix: 0,
    'prefer-promise-reject-errors': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'no-await-in-loop': 0,
    'no-async-promise-executor': 0,
    'arrow-body-style': 0,
    'no-case-declarations': 0,
    'no-return-assign': 0,
    'react/static-property-placement': 0,
    'react/no-access-state-in-setstate': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/forbid-prop-types': 0,
    'react/button-has-type': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-fragments': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'react/no-array-index-key': 0,
    'react/no-did-update-set-state': 0,
    'react/no-deprecated': 0,
    'react/state-in-constructor': 0,
    'react/sort-comp': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['nesting', 'id']
        },
        allowChildren: true
      }
    ],
    'no-unused-vars': 0,
    'no-redeclare': 0,
    'no-mixed-operators': 0,
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ]
  },
  globals: {
    document: true,
    window: true,
    atob: true,
    btoa: true,
    test: true,
    describe: true,
    expect: true,
    it: true
  }
};

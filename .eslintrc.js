const { defineConfig } = require('eslint-define-config')
const vue = require('eslint-plugin-vue')
const prettier = require('eslint-plugin-prettier')
const prettierRecommended = require('eslint-config-prettier')

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-var': 'error', // Запретить использование var
    'prefer-const': 'warn', // Предпочитать const вместо let
    eqeqeq: 'warn', // Требовать строгое сравнение
    'no-multiple-empty-lines': ['warn', { max: 1 }], // Запретить более одного пустого ряда
    // Правила для Vue 3
    'vue/multi-word-component-names': 'off', // Разрешить однословные имена компонентов
    'vue/no-unused-components': 'warn', // Предупреждение о неиспользуемых компонентах
    'vue/no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
    'vue/require-default-prop': 'off', // Не требовать значения по умолчанию для props
    'vue/require-prop-types': 'warn', // Требовать типы для props
    'vue/order-in-components': [
      'warn',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'methods',
          'LIFECYCLE_HOOKS',
          'template',
          'render',
          'renderError',
        ],
      },
    ], // Порядок объявления свойств в компонентах
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    // Правила для форматирования кода
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
  },
})

import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'docs/**',
      'docs-src/**',
      'dist/**',
      'public/**',
      'custom-elements.json',
    ],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {ecmaVersion: 2020, sourceType: 'module'},
      globals: {...globals.browser},
    },
    plugins: {'@typescript-eslint': tseslint},
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'no-undef': 'off',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
    },
  },
  {
    files: ['rollup.config.js', 'eslint.config.js'],
    languageOptions: {globals: {...globals.node}},
  },
];

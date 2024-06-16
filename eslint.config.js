import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import typeScriptESLintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();

export default [
  {
    ignores: ['dist', 'styled-system', 'eslint.config.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends('plugin:react-hooks/recommended'),
  {
    languageOptions: {
      parser: typeScriptESLintParser,
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];

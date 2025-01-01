import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-console": "warn",
      //* Avoid Bugs
      "no-undef": "error",
      semi: "error",
      "semi-spacing": "error",
      //* Best Practices
      eqeqeq: "warn",
      "no-invalid-this": "error",
      "no-return-assign": "error",
      "no-unused-expressions": ["error", { allowTernary: true }],
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-constant-condition": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "req|res|next|__" }],
      //* Enhance Readability
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-mixed-spaces-and-tabs": "warn",
      "space-before-blocks": "error",
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      quotes: ["warn", "double"],
      //
      "max-len": ["error", { code: 200 }],
      "max-lines": ["error", { max: 1000 }],
      "keyword-spacing": "error",
      "multiline-ternary": ["error", "never"],
      "no-mixed-operators": "error",
      //
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
      "no-whitespace-before-property": "error",
      "nonblock-statement-body-position": "error",
      "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
      //* ES6
      "arrow-spacing": "error",
      "no-confusing-arrow": "error",
      "no-duplicate-imports": "error",
      "no-var": "error",
      "object-shorthand": "off",
      "prefer-const": "error",
      "prefer-template": "warn",
    },
  },
)

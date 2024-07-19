module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["./src/components/ui/**/*.{js,jsx,ts,tsx}"],
      rules: {
        "react/jsx-props-no-spreading": 0,
        "react/prop-types": 0,
        "no-use-before-define": 0,
        "react/jsx-no-constructed-context-values": 0,
      },
    },
    {
      files: [
        "./src/components/common/**/*.{js,jsx,ts,tsx}",
        "./src/components/forms/**/*.{js,jsx,ts,tsx}",
        "./src/components/modals/**/*.{js,jsx,ts,tsx}",
      ],
      rules: {
        "react/jsx-props-no-spreading": 0,
      },
    },
    {
      files: ["./src/**/*.{jsx,tsx}"],
      rules: {
        "react/react-in-jsx-scope": 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "simple-import-sort"],
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "prettier/prettier": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Side effect imports.
          ["^\\u0000"],
          // Internal components, packages.
          // eslint-disable-next-line no-useless-escape
          ["^(@/pages)(/.*|$)"],
          [
            "^(@/components/layouts)(/.*|$)",
            "^(@/components/common)(/.*|$)",
            "^(@/components)(/.*|$)",
          ],
          ["^(@)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.(css)$", "^.+\\.(scss)$"],
        ],
      },
    ],
    "import/prefer-default-export": 0,
    "react/require-default-props": 0,
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
};

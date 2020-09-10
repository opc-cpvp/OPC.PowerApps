module.exports = {
    env: {
        browser: true
    },
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "jsdoc",
        "import",
        "prettier"
    ],
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module"
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    rules: {
        // @typescript-eslint
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array"
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                accessibility: "explicit"
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                ignoreParameters: true
            }
        ],
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                path: "always",
                types: "prefer-import",
                lib: "always"
            }
        ],
        "@typescript-eslint/unified-signatures": "error",

        // eslint
        "arrow-body-style": "error",
        "complexity": "off",
        "curly": ["error", "all"],
        "eqeqeq": ["error", "smart"],
        "guard-for-in": "error",
        "import/no-deprecated": "warn",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "max-classes-per-file": ["error", 1],
        "max-len": [
            "error",
            {
                code: 140,
                ignoreComments: true,
                ignorePattern: `^import |^export (.*?)`,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": [
            "error",
            {
                allow: [
                    "log",
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-empty": "off",
        "no-eval": "error",
        "no-new-wrappers": "error",
        "no-restricted-imports": ["error", "rxjs/Rx"],
        "no-shadow": [
            "error",
            {
                hoist: "all"
            }
        ],
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "spaced-comment": [
            "error",
            "always",
            {
                markers: ["/"]
            }
        ]
    }
};
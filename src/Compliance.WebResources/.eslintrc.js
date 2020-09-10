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
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array"
            }
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    Object: {
                        message:
                            "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    Function: {
                        message:
                            "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    Boolean: {
                        message:
                            "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    Number: {
                        message:
                            "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    String: {
                        message:
                            "Avoid using the `String` type. Did you mean `string`?"
                    },
                    Symbol: {
                        message:
                            "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
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
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                ignoreParameters: true
            }
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
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
        "constructor-super": "error",
        "curly": ["error", "all"],
        "eqeqeq": ["error", "smart"],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
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
        "no-cond-assign": "error",
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
        "no-debugger": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
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
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
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
        ],
        "use-isnan": "error",
        "valid-typeof": "off"
    }
};
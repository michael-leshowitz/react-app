// standard with typescript preset: https://github.com/standard/eslint-config-standard-with-typescript
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        // Added this config to resolve "error while loading dot-notation"
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react"
    ],
    // syntax: off/0 means rule is off, warn/1 means rules gives a warn, error/2 means rule enforced by throwing error
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": "warn"
    }
}

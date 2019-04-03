module.exports = {
    extends: 'airbnb-base',
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
        mocha: true,
    },
    rules: {
        indent: [2, 4],
        'import/extensions': 0,
        'import/prefer-default-export': 1,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/no-duplicates': 0,
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'no-unused-expressions': [
            2,
            {
                allowShortCircuit: true,
            },
        ],
        'no-script-url': 1,
        'no-param-reassign': 1,
        'no-plusplus': 1,
        'no-restricted-globals': 1,
        'prefer-destructuring': 1,
    },
};

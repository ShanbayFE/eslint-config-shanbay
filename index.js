module.exports = {
    env: {
        browser: true,
        node: true,
    },
    rules: {
        indent: [2, 4],
        'import/extensions': 1,
        'no-unused-expressions': [2,{
            allowShortCircuit: true,
        }],
        'no-script-url': 1,
        'no-param-reassign': 1,
        'no-plusplus': 1,

        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': 0,
        'react/forbid-prop-types': 1,
        'react/prefer-stateless-function': 1,
        'react/no-array-index-key': 1,

        'jsx-a11y/label-has-for': 1,

        'import/prefer-default-export': 1,
        'import/extensions': 1,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['/usr/local/lib/node_modules'],
            },
        },
    },
};

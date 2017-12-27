const commonConfig = {
    globals: {
        $: true,
        wx: true,
        template: true,
    },
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

module.exports = {
    configs: {
        base: commonConfig,
        all: Object.assign({}, commonConfig, {
            rules: {
                'react/jsx-indent-props': [2, 4],
                'react/jsx-indent': [2, 4],
                'react/jsx-filename-extension': 0,
                'react/forbid-prop-types': 1,
                'react/prefer-stateless-function': 1,
                'react/no-array-index-key': 1,
                'react/jsx-curly-brace-presence': 1,
                'jsx-a11y/no-autofocus': 0,
                'jsx-a11y/label-has-for': 1,
                'jsx-a11y/click-events-have-key-events': 1,
                'jsx-a11y/anchor-is-valid': 0,
                'jsx-a11y/no-static-element-interactions': 1,
            },
        }),
    },
};

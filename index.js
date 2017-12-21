module.exports = {
    global: {
        $: true,
        wx: true,
        template: true,
    },
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
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': 0,
        'react/forbid-prop-types': 1,
        'react/prefer-stateless-function': 1,
        'react/no-array-index-key': 1,
        'jsx-a11y/label-has-for': 1,
        'jsx-a11y/click-events-have-key-events': 1,
        'jsx-a11y/anchor-is-valid': [
            1,
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight', 'to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['/usr/local/lib/node_modules'],
            },
            webpack: {
                config: 'webpack.config.eslint.js',
            },
        },
    },
};

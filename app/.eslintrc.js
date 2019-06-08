module.exports = {
    extends: ['vue', 'plugin:vue/recommended', 'prettier'],
    env: {
        browser: true,
    },
    globals: { Vue: true },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};

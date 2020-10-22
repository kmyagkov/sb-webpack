module.exports = (api) => {
  const env = api.env();
  api.cache.using(() => env === 'development');

  return {
    presets: [
      '@vue/babel-preset-app',
      [
        '@babel/env',
        {
          debug: false,
          spec: true,
          loose: false,
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties'
    ]
  };
};

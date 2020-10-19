module.exports = (api) => {
  // const env = api.env();
  // api.cache.using(() => env === 'development');

  api.cache.never();

  return {
    presets: [
      '@vue/babel-preset-app',
      [
        '@babel/env',
        {
          debug: false,
          spec: false,
          loose: false,
          modules: false
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  };
};

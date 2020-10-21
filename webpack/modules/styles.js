const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const loadCSS = ({ sourceMap } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap
  }
});

const loadProdCSS = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          loadCSS({ sourceMap: false }),
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[id].css',
      chunkFilename: 'css/[name].[id].css'
    })
  ]
});

const loadDevCSS = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          loadCSS({sourceMap: true}),
          'sass-loader'
        ]
      }
    ]
  }
});

module.exports = { loadDevCSS, loadProdCSS };

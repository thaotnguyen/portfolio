/**
 * To use this, ensure you have added `html-loader` as a dev dependency in your `package.json` first
 * Learn more: https://github.com/webpack-contrib/html-loader
 */
const { loaderByName, addBeforeLoader } = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
      });

      const fileLoader = {
        loader: require.resolve('file-loader'),
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
      };

      addBeforeLoader(webpackConfig, loaderByName('file-loader'), fileLoader);

      return webpackConfig;
    },
  },
};

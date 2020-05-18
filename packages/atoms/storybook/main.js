const path = require('path');
const pkgDir = require('pkg-dir');

const rootPath = pkgDir.sync(process.cwd()) || process.cwd();

module.exports = {
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: { include: [path.resolve(__dirname, '../src')] },
        loaderOptions: {
          prettierConfig: { singleQuote: true }
        }
      }
    }
  ],

  webpackFinal: async (config) => {
    if (!config) config = {};
    if (!config.module) config.module = {};
    if (!config.node) config.node = {};
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};
    if (!config.module.rules) config.module.rules = [];
    if (!config.resolve.extensions) config.resolve.extensions = [];
    config.module.rules.push({
      test: /\.(j|t)sx?$/,
      include: [
        path.resolve(rootPath, 'src'),
        path.resolve(rootPath, 'storybook')
      ],
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: { babelrc: true }
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    });
    config.module.rules.push({
      test: /\.story\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' }
        }
      ],
      enforce: 'pre'
    });
    config.resolve.extensions.push('.jsx', '.ts', '.tsx');
    config.resolve.alias['react-native'] = 'react-native-web';
    config.node = {
      child_process: 'empty',
      fs: 'empty',
      ...config.node
    };
    return config;
  }
};

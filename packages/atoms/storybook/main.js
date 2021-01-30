const fs = require('fs');
const path = require('path');
const pkgDir = require('pkg-dir');

const rootPath = pkgDir.sync(process.cwd()) || process.cwd();

module.exports = {
  stories: ['../src/**/*.@(story|stories).@(md|@(j|t)s)?(x)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
    '@storybook/addon-jest/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    'storybook-addon-designs/register',
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
    if (!config.watchOptions) config.watchOptions = {};
    config.watchOptions.ignored = '**/.*';
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      include: [
        path.resolve(rootPath, 'src'),
        path.resolve(rootPath, 'storybook'),
        pkgDir.sync(
          fs.realpathSync(require.resolve('native-base-shoutem-theme'))
        ),
        pkgDir.sync(fs.realpathSync(require.resolve('react-native-drawer'))),
        pkgDir.sync(fs.realpathSync(require.resolve('react-native-easy-grid'))),
        pkgDir.sync(
          fs.realpathSync(require.resolve('react-native-safe-area-view'))
        ),
        pkgDir.sync(fs.realpathSync(require.resolve('react-native-tab-view'))),
        pkgDir.sync(
          fs.realpathSync(require.resolve('react-native-vector-icons'))
        ),
        pkgDir.sync(fs.realpathSync(require.resolve('react-native-web'))),
        pkgDir.sync(fs.realpathSync(require.resolve('react-navigation'))),
        pkgDir.sync(fs.realpathSync(require.resolve('static-container'))),
        pkgDir.sync(
          fs.realpathSync(
            require.resolve('react-native-keyboard-aware-scroll-view')
          )
        ),
        pkgDir.sync(
          fs.realpathSync(
            require.resolve('@codler/react-native-keyboard-aware-scroll-view')
          )
        ),
        pkgDir.sync(
          fs.realpathSync(require.resolve('@react-native-picker/picker'))
        ),
        path.resolve(
          pkgDir.sync(
            fs.realpathSync(require.resolve('@react-native-picker/picker'))
          ),
          'js'
        )
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
      test: /\.ttf$/,
      loader: 'url-loader',
      include: fs.realpathSync(require.resolve('react-native-vector-icons'))
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
    config.resolve.alias.react = fs.realpathSync(require.resolve('react'));
    config.resolve.alias[
      'react-native/Libraries/Components/UnimplementedViews/UnimplementedView'
    ] = fs.realpathSync(
      require.resolve('react-native-web/dist/modules/UnimplementedView')
    );
    config.resolve.alias['react-native'] = fs.realpathSync(
      require.resolve('react-native-web')
    );
    config.resolve.alias['react-dom'] = fs.realpathSync(
      require.resolve('react-dom')
    );
    config.node = {
      child_process: 'empty',
      fs: 'empty',
      ...config.node
    };
    return config;
  }
};

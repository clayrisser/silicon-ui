const fs = require('fs');
const path = require('path');

module.exports = (api) => {
  api.cache(true);
  if (fs.existsSync(path.resolve(__dirname, 'node_modules/.tmp/action/expo'))) {
    return {
      presets: ['babel-preset-expo']
    };
  }
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3,
          modules: 'commonjs',
          spec: true,
          useBuiltIns: 'usage',
          targets: {
            node: '6',
            browsers: [
              'ie >= 11',
              'last 3 chrome major versions',
              'last 3 chromeandroid major versions',
              'last 3 edge major versions',
              'last 3 firefox major versions',
              'last 3 ios major versions',
              'last 3 safari major versions'
            ]
          }
        }
      ],
      '@babel/preset-flow',
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    plugins: [
      'babel-plugin-macros',
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-runtime',
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.pegjs']
        }
      ],
      [
        'babel-plugin-module-resolver',
        {
          root: ['./'],
          alias: {
            '~': './src',
            '~tests': './tests'
          }
        }
      ]
    ],
    ignore: ['**/*.d.ts', '**/*.d.tsx', 'src/@types']
  };
};

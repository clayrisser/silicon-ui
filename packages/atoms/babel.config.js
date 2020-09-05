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
          useBuiltIns: 'usage',
          targets: {
            node: '6'
          }
        }
      ],
      '@babel/preset-flow',
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-runtime'
    ]
  };
};

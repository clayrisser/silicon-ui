module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3,
          useBuiltIns: 'usage',
          targets: {
            node: '6'
          }
        }
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
      'babel-preset-expo'
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-optional-chaining'
    ]
  };
};

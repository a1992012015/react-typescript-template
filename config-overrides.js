const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

/* config-overrides-overrides.js */
module.exports = function override(config, env) {
  // 添加模块热更新
  config = rewireReactHotLoader(config, env);

  // 目录映射
  config.resolve.alias = {
    ...config.resolve.alias,
    '@services': path.resolve(__dirname, 'src/services/'),
    '@store': path.resolve(__dirname, 'src/store/'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
    '@utils': path.resolve(__dirname, 'src/utils/')
  };

  return config;
};

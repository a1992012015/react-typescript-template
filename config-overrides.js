const rewireReactHotLoader = require('react-app-rewire-hot-loader');

/* config-overrides-overrides.js */
module.exports = function override(config, env) {
  // 添加模块热更新
  config = rewireReactHotLoader(config, env);
  return config;
};

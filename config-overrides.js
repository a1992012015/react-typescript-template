const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const apiMocker = require("mocker-api");
const path = require("path");

/* config-overrides-overrides.js */
module.exports = {
  webpack: function override(config, env) {
    // 添加模块热更新
    config = rewireReactHotLoader(config, env);

    // 目录映射
    config.resolve.alias = {
      ...config.resolve.alias,
      "@services": path.resolve(__dirname, "src/services/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@interfaces": path.resolve(__dirname, "src/interfaces/"),
      "@utils": path.resolve(__dirname, "src/utils/")
    };

    return config;
  },

  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);

      config.before = (app) => {
        apiMocker(app, path.resolve(__dirname, "mockers/index.js"), {
          // proxy: {
          //   "/api/*": "https://prod-tftv-mall.tokenpad.io"
          // },
          changeHost: true
        });
      };

      return config;
    };
  }
};


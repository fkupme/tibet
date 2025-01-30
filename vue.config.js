const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  lintOnSave: true,
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
});
const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  lintOnSave: true,
  transpileDependencies: true,
  publicPath: '/',
  chainWebpack: (config) => {
    config.plugin('html').tap(([options]) => [
      { ...options, title: 'РумТибет — туры по Тибету' },
    ])
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
});
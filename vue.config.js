const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  /*configureWebpack: {
    output: {
      filename: 'app.js',
      chunkFilename: 'chunk-vendors.js',
    },
  },*/
  css: {
    extract: {
      filename: 'css/app.css',
    },
  },
})

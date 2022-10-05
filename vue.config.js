module.exports = {
  lintOnSave:false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8090",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};

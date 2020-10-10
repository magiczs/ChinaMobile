module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.26.37:3005',
        pathRewrite: { '^/api': '' },
      },
    },
  },
}

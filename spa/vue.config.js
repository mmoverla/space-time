module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/global.scss";`
      }
    }
  },
  pwa: {
    name: 'Space time',
    workboxOptions: {
      navigateFallback: '/',
    },
  }
}


export const optimization = devMode => ({
  minimize: !devMode,
  // Split Chunks Plugin
  // https://webpack.js.org/plugins/split-chunks-plugin/
  splitChunks: devMode ? {} : {
    cacheGroups: {
      // Concatenate all CSS into one chunk to aid MiniCssExtractPlugin.
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      },
    },
    chunks: 'all',
    name: devMode,
  },
})

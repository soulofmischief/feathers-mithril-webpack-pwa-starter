import { CleanWebpackPlugin } from 'clean-webpack-plugin'


export default new CleanWebpackPlugin({
  dangerouslyAllowCleanPatternsOutsideProject: true,
  dry: false,
  root:     __dirname,
  verbose:  true,
})

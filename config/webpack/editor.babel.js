
import { alias } from '../alias'
import webpack from 'webpack'
import { config } from 'Config/config'
import { paths } from 'Config/paths'


export default {
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify({
        ...config.get( 'client' ),
        ...config.get( 'server' ),
      }),

      'process.env.NODE_CONFIG_DIR': JSON.stringify( paths.appConfig ),
    }),
  ],

  resolve: { alias },
}

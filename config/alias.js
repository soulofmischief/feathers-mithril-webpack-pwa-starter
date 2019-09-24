const rxPaths = require( 'rxjs/_esm5/path-mapping' )
const path = require( 'path' )
const paths = require( './paths' )


module.exports = {
  Client: path.resolve( paths.client, 'client' ),
  Config: path.resolve( paths.config ),
  Components: path.resolve( paths.client, 'components' ),
  Data: path.resolve( paths.client, 'data' ),
  Flow: path.resolve( paths.root, 'flow' ),
  Hooks: path.resolve( paths.client, 'hooks' ),
  Lib: path.resolve( paths.client, 'lib' ),
  Models: path.resolve( paths.client, 'models' ),
  Styles: path.resolve( paths.client, 'stylesheets' ),
  Theme: path.resolve( paths.client, 'stylesheets/themeExport.scss' ),
  Rootlib: path.resolve( paths.root, 'lib' ),
  Router: path.resolve( paths.client, 'router' ),
  ServerHooks: path.resolve( paths.server, 'hooks' ),

  // Map RxJS imports to es6 versions
  ...rxPaths(),
}

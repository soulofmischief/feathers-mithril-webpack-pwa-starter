const rxPaths = require( 'rxjs/_esm5/path-mapping' )
const path = require( 'path' )
const { paths } = require( './paths' )


const { client, server } = paths


module.exports.alias = {
  // Root
  Config:  paths.config,
  External:  paths.external,
  Flow:    paths.flow,
  Resources: paths.resources,
  RootLib: paths.lib,

  // Client
  Components: client.components,
  Styles:     client.stylesheets,
  Client:     path.resolve( client.root, 'client' ),
  Data:       path.resolve( client.root, 'data' ),
  Hooks:      path.resolve( client.root, 'hooks' ),
  Lib:        path.resolve( client.root, 'lib' ),
  Models:     path.resolve( client.root, 'models' ),
  Theme:      path.resolve( client.stylesheets, 'themeExport.scss' ),
  Router:     path.resolve( client.root, 'router' ),

  // Server
  ServerHooks: server.hooks,

  // Map RxJS imports to es6 versions
  ...rxPaths(),
}

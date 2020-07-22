const path = require( 'path' )


const
  config   = path.resolve( __dirname, '.' ),
  root     = path.resolve( __dirname, '..' ),
  dist     = path.resolve( root, 'dist' ),

  // Packages
  packages = path.resolve( root, 'packages' ),
  client   = path.resolve( packages, 'client' ),
  local    = path.resolve( packages, 'local' ),
  server   = path.resolve( packages, 'server' )


module.exports.paths = {
  dist,
  root,
  external:  path.resolve( root, 'external' ),
  flow:      path.resolve( root, 'flow' ),
  lib:       path.resolve( root, 'lib' ),
  resources: path.resolve( root, 'resources' ),

  // Config
  config,
  appConfig: path.resolve( config, 'application' ),

  // Shared
  shared: path.resolve( root, 'shared' ),

  // Packages
  local,

  client: {
    components:  path.resolve( client, 'components' ),
    output:      path.resolve( dist, 'client' ),
    resources:   path.resolve( client, 'resources' ),
    root:        client,
    stylesheets: path.resolve( client, 'stylesheets' ),
    templates:   path.resolve( client, 'templates' ),
  },

  server: {
    data:   path.resolve( server, 'data' ),
    hooks:  path.resolve( server, 'hooks' ),
    output: path.resolve( dist, 'server' ),
    root:   server,
  },
}

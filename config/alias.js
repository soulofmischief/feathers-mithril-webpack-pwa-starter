const path = require( 'path' )
const paths = require( './paths' )


module.exports = {
  Client: path.resolve( paths.client, 'client' ),
  Components: path.resolve( paths.client, 'components' ),
  Data: path.resolve( paths.client, 'data' ),
  Flow: path.resolve( paths.root, 'flow' ),
  Lib: path.resolve( paths.client, 'lib' ),
  Models: path.resolve( paths.client, 'models' ),
  Styles: path.resolve( paths.client, 'stylesheets' ),
  Theme: path.resolve( paths.client, 'stylesheets/themeExport.scss' ),
  Router: path.resolve( paths.client, 'router' ),
}
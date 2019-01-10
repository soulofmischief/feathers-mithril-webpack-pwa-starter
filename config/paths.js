const path = require( 'path' )


module.exports = {
  client: path.resolve( __dirname, '../packages/client' ),
  output: path.resolve( __dirname, '../dist/client' ),
  root: path.resolve( __dirname, '../' ),
  server: path.resolve( __dirname, '../packages/server' ),
  serverOutput: path.resolve( __dirname, '../dist/server' ),
}

const { paths } = require( 'Config/paths' )

process.env.NODE_CONFIG_DIR = paths.appConfig

module.exports.config = require( 'config' )

const { paths } = require( './paths' )

process.env.NODE_CONFIG_DIR = paths.appConfig

module.exports.config = require( 'config' )

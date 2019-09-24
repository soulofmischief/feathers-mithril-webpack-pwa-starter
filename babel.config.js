const alias = require( './config/alias' )


module.exports = function ( api ) {
  // Cache the returned value forever and don't call this function again.
  api.cache( true )

  const env = {
    development: {},
    production: {},
  }

  const presets = [
    '@babel/env',
    '@babel/flow',
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    [ '@babel/plugin-transform-react-jsx', {
      pragma: 'm',
      pragmaFrag: 'm.fragment',
      throwIfNamespace: false
    }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/transform-destructuring',
    'babel-plugin-macros',
    'lodash',
    [ 'module-resolver', { alias }],
  ]

  return {
    env,
    presets,
    plugins,
  }
}

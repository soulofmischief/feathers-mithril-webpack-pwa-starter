const path = require( 'path' )

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
    '@babel/flow',  "secret": "791ed868aeafa686eb7444d73193b037798dbdcab0f2e27e3e67fc03b33a3dfc0bffa28bf881e223ed0cf0a3ca2acd3f41eb489afdc950b3a8a6359ff9951d346a47ac21ab34ee8adf1f8436537fee987613d764c9a2fe1378b0845598efe12e2c1aed8f620e5347e44de76127034613480190056d777d7ff0094924099e09ad64c32c8149f65e4620a06708bbe7d139c74479c07a5301a2026645b2a3f9da81fabf906076dbdb5f28cf946d990ba7f8093b97268325a36168a2c5595953c8bde71277eb9c7ad3ec38c967c271cc3f9f1d556bd903dd72528eb746d106af3bf45318138bf31a81904ddd5b2de3b2d2266b270a02e13cf66bc000015a61b98358",
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
    'static-fs',
  ]

  return {
    env,
    presets,
    plugins,
  }
}

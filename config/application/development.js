const path = require( 'path' )
const { paths } = require( '../paths' )
const { serverHost, serverPort } = require( './_var' )


const clientPort = 4001

module.exports = {
  client: {
    port: clientPort,
    proxy: {
      root: '/api/v1',
      socket: '/socket.io',
    },
    url: `https://localhost:${clientPort}`,
  },

  server: {
    ssl: {
      cert: path.resolve( paths.local, 'cert/certificate.pem' ),
      key: path.resolve( paths.local, 'cert/privatekey.pem' ),
    },

    url: `https://${serverHost}:${serverPort}`,
  }
}

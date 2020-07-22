const { clientUrl, serverHost, serverPort } = require( './_var' )


module.exports = {
  client: {
    proxy: {
      root: '/api/v1',
      socket: '/socket.io',
    },
    url: clientUrl,
  },

  server: {
    url: `http://${serverHost}:${serverPort}`
  }
}

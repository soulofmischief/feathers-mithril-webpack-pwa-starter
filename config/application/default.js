const { paths } = require( '../paths' )
const { clientUrl, serverHost, serverPort } = require( './_var' )


const name = 'Messages'

// Shared configuration
const shared = {
  idField: '_id',
}

module.exports = {
  app: {
    name,
    shortName: name,
    title: name,
  },

  client: {
    ...shared,
    root: '/',
  },

  server: {
    ...shared,

    api: {
      version: 1,
    },

    authentication: {
      authStrategies: [ 'jwt', 'local' ],
      entity: 'user',

      jwtOptions: {
        header: { typ: 'access' },
        audience: clientUrl,
        issuer: 'feathers',
        algorithm: 'HS256',
        expiresIn: '1w'
      },

      local: {
        usernameField: 'username',
        passwordField: 'password'
      },

      //eslint-disable-next-line max-len
      secret: 'cax9faAM9iTzRQ6KjsF4sWRw/iodjVR7YCrK1VjZ2wueYKIv0Y+BrpckxtWEEpTv1WdCqbX5Z3jhaZCBg1+oJk4ZetbxebVAbFmN+pl7mKW0mWk5dB7Z6F7S//UD5eGcJCa7YG49AMLkNOlc0JsD546gCAvgsUwkfYViy1E+jTkmSC0miB7J1UB2YUX1NgzNiNMiorq5p++8VAYTqknIJnu2zFEoFh/wkF21pZxl8pvb3+7a+gJ5NEfPfCbFQN1ajry5W64clW1BTFTbRozv0teB2JbLpnsqtpWp3Aw+h92Q79yUReg2o9OYmO5rbE+fWviIuwOkHaozULTCwPFB/g==',

      service: 'users'
    },
    host: serverHost,
    memory: {
      id: '_id'
    },
    messages: {
      maxLength: 400,
    },
    nedb: paths.server.data,
    port: serverPort,
    protocol: 'https',
    public: paths.server.output,
    paginate: {
      default: 10,
      max: 50
    },
  },
}

import { isNonEmpty, isString } from '../../hooks/common/verification'
import { populateUser } from '../../hooks/populate-user'
import processMessage from '../../hooks/process-message'
import { trim } from '../../hooks/trim'


const { authenticate } = require( '@feathersjs/authentication' ).hooks


module.exports = {
  before: {
    all: [authenticate( 'jwt' )],
    find: [],
    get: [],
    create: [
      isString( 'text', 'Message is invalid'  ),
      trim( 'text' ),
      isNonEmpty( 'text', 'Message is empty'  ),
      processMessage()
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}

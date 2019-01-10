const assert = require( 'assert' )
const app = require( '../../app' )

describe( '\'testService\' service', () => {
  it( 'registered the service', () => {
    const service = app.service( 'test-service' )

    assert.ok( service, 'Registered the service' )
  })
})

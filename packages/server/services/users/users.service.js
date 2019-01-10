// Initializes the `users` service on path `/users`
import createService from 'feathers-nedb'
import hooks from './users.hooks'
import createModel from '../../models/users.model'


export default function ( app ) {
  const Model = createModel( app )
  const paginate = app.get( 'paginate' )

  const options = {
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use( '/users', createService( options ))

  // Get our initialized service so that we can register hooks
  const service = app.service( 'users' )

  service.hooks( hooks )
}

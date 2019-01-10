import messages from './messages/messages.service'
import users from './users/users.service'


export default function ( app ) {
  app.configure( messages )
  app.configure( users )
}

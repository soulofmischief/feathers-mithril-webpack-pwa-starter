// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = ( options = {}) => {
  return async context => {
    let { data } = context

    // Get authenticated user
    const
      user = context.params.user,
      text = data.text
        // Truncate message
        .substring( 0, Number( process.env.MESSAGE_MAX_LENGTH ))

    // Extract wanted parameters into new object )
    context.data = {
      text,
      // Set the user id
      userId: user._id,
      // Add the current date
      createdAt: new Date().getTime()
    }

    // Best practice: hooks should always return the context
    return context
  }
}

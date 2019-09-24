import path from 'path'
import dotenv from 'dotenv-safe'
import paths from '../../paths'


// Configure environment variables
dotenv.config({
  path: path.resolve( paths.root,
    `.env.${ process.env.NODE_ENV || 'development' }`
  )
})

// @flow strict
import { goTo } from 'Router/hooks'


export const Status = {
  // Page not found -> Redirect to Home
  '/:404...': { onmatch() { goTo.home()}},
}

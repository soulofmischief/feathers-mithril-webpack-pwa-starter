// @flow strict
import { goTo } from '../paths'


export const Status = {
  // Page not found -> Redirect to Home
  '/:404...': { onmatch() { goTo.home()}},
}

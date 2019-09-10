import { combineReducers } from 'redux'
import { countries } from './countries'
import { regions } from './regions'
import { theme } from './theme'

export default combineReducers({
  countries,
  regions,
  theme
})

import { combineReducers } from "@reduxjs/toolkit"

import navigation from './slices/navigation'
import schedule from './slices/schedule'
import config from './slices/config'
import user from './slices/user'

const rootReducer = combineReducers({
  navigation,
  schedule,
  config,
  user,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
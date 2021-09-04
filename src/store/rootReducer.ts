import { combineReducers } from "@reduxjs/toolkit"

import navigation from './slices/navigation'
import schedule from './slices/schedule'
import config from './slices/config'
import user from './slices/user'
import qoute from './slices/qoute'

const rootReducer = combineReducers({
  navigation,
  schedule,
  config,
  user,
  qoute,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
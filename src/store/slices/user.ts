import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { UniverData, User, UserData } from "../../types";

type ConfigState = {
  isLoading: boolean
  error: {
    message: string
    payload: any
  } | null
  user: User | null
  userData: UserData | null
}

const initialState: ConfigState = {
  isLoading: false,
  error: null,
  user: null,
  userData: null,
}

export const requestGetUser = createAsyncThunk(
  'user/request',
  api.user.getUser
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action)
    {
      state.userData = action.payload
    },
  },
  extraReducers(builder)
  {
    builder
      .addCase(requestGetUser.pending, (state,action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(requestGetUser.rejected, (state,action) => {
        state.isLoading = false
        state.error = {
          message: 'Произошла ошибка :(',
          payload: action.meta.arg
        }
      })
      .addCase(requestGetUser.fulfilled, (state,action) => {
        state.isLoading = false
        state.error = null        
        state.user = action.payload
      })
  },
})

export const { setUserData } = userSlice.actions
export default userSlice.reducer
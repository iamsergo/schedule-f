import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { User, UserData } from "../../types";

type ConfigState = {
  isLoading: boolean
  isUniverLoading: boolean
  isScheduleLoading: boolean
  error: {
    message: string
    payload: any
  } | null
  user: User | null
  userData: UserData | null
  isLoaderShowing: boolean
}

const initialState: ConfigState = {
  isLoading: false,
  isLoaderShowing: true,
  isUniverLoading: false,
  isScheduleLoading: false,
  error: null,
  user: null,
  userData: null,
}

export const requestGetUser = createAsyncThunk(
  'user/request',
  api.user.getUser
)

export const requestUpdateUserUniver = createAsyncThunk(
  'user/update/univer',
  api.user.updateUserUniver
)

export const requestDeleteUserUniver = createAsyncThunk(
  'user/delete/univer',
  api.user.deleteUserUniver
)

export const requestUpdateUserSchedule = createAsyncThunk(
  'user/update/schedule',
  api.user.updateUserSchedule
)

export const requestDeleteUserSchedule = createAsyncThunk(
  'user/delete/schedule',
  api.user.deleteUserSchedule
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action)
    {
      state.userData = action.payload
    },
    setIsLoaderShowing(state, action)
    {
      state.isLoaderShowing = action.payload
    },
  },
  extraReducers(builder)
  {
    builder
      .addCase(requestGetUser.pending, (state) => {
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

      .addCase(requestUpdateUserUniver.pending, (state) => {
        state.isUniverLoading = true
        state.error = null
      })
      .addCase(requestUpdateUserUniver.rejected, (state,action) => {
        state.isUniverLoading = false
        state.error = {
          message: 'При обновлении университета произошла ошибка :(',
          payload: action.meta.arg
        }
      })
      .addCase(requestUpdateUserUniver.fulfilled, (state,action) => {
        state.isUniverLoading = false
        state.error = null        
        state.user = action.payload
      })

      .addCase(requestDeleteUserUniver.pending, (state) => {
        state.isUniverLoading = true
        state.error = null
      })
      .addCase(requestDeleteUserUniver.rejected, (state,action) => {
        state.isUniverLoading = false
        state.error = {
          message: 'При обновлении университета произошла ошибка :(',
          payload: action.meta.arg
        }
      })
      .addCase(requestDeleteUserUniver.fulfilled, (state,action) => {
        state.isUniverLoading = false
        state.error = null        
        state.user = action.payload
      })

      .addCase(requestUpdateUserSchedule.pending, (state) => {
        state.isScheduleLoading = true
        state.error = null
      })
      .addCase(requestUpdateUserSchedule.rejected, (state,action) => {
        state.isScheduleLoading = false
        state.error = {
          message: 'При обновлении расписания произошла ошибка :(',
          payload: action.meta.arg
        }
      })
      .addCase(requestUpdateUserSchedule.fulfilled, (state,action) => {
        state.isScheduleLoading = false
        state.error = null        
        state.user = action.payload
      })

      .addCase(requestDeleteUserSchedule.pending, (state) => {
        state.isScheduleLoading = true
        state.error = null
      })
      .addCase(requestDeleteUserSchedule.rejected, (state,action) => {
        state.isScheduleLoading = false
        state.error = {
          message: 'При обновлении расписания произошла ошибка :(',
          payload: action.meta.arg
        }
      })
      .addCase(requestDeleteUserSchedule.fulfilled, (state,action) => {
        state.isScheduleLoading = false
        state.error = null        
        state.user = action.payload
      })
  },
})

export const { setUserData, setIsLoaderShowing } = userSlice.actions
export default userSlice.reducer
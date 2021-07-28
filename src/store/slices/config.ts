import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { UniverData } from "../../types";

type ConfigState = {
  isLoading: boolean
  error: {
    message: string
    payload: any
  } | null
  univerList: UniverData[]
}

const initialState: ConfigState = {
  isLoading: false,
  error: null,
  univerList: [],
}

export const requestConfigUnivers = createAsyncThunk(
  'config/univers',
  api.config.getUniverList
)

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers(builder)
  {
    builder
      .addCase(requestConfigUnivers.pending, (state,action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(requestConfigUnivers.rejected, (state,action) => {
        state.isLoading = false
        state.error = {
          message: 'Ошибка при запросе университетов :(',
          payload: action.meta.arg
        }
      })
      .addCase(requestConfigUnivers.fulfilled, (state,action) => {
        state.isLoading = false
        state.error = null
        state.univerList = action.payload
      })
  },
})

export const {} = configSlice.actions
export default configSlice.reducer
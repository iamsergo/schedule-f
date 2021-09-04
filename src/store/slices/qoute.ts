import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Qoute } from "../../types";
import api from "../../api";

type QouteState = {
  isLoading: boolean
  error: {
    message: string
    payload: any
  } | null
  qoute: Qoute | null
}

const initialState: QouteState = {
  isLoading: false,
  error: null,
  qoute: null,
}

export const requestQoute = createAsyncThunk(
  'qoute/request',
  api.qoute.getQoute,
)

const qouteSlice = createSlice({
  name: 'qoute',
  initialState,
  reducers: {},
  extraReducers(builder)
  {
    builder
      .addCase(requestQoute.pending, state => {
        state.isLoading = true
      })
      .addCase(requestQoute.fulfilled, (state, action) => {
        state.isLoading = false
        state.qoute = action.payload as Qoute | null
      })
  },
})

export const {} = qouteSlice.actions
export default qouteSlice.reducer
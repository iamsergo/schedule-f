import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { DayRange, Univer, WeekRange } from "../../types";
import { getCurrentDay, getCurrentWeek, getDaysStats } from "../../utils";

type ConfigState = {
  isLoading: boolean
  error: {
    message: string
    payload: any
  } | null
  univerList: Univer[]
  currentUniver: Univer | null
  
  passDays: number
  countDays: number
  toEndDays: number
  toEndPercent: number
  currentDay: DayRange
  currentWeek: WeekRange
  config: { [key:string]: boolean }
}

const initialState: ConfigState = {
  isLoading: false,
  error: null,
  univerList: [],
  currentUniver: null,

  passDays: 0,
  countDays: 0,
  toEndDays: 0,
  toEndPercent: 0,
  currentDay: 0,
  currentWeek: 0,
  config: {},
}

export const requestConfigUnivers = createAsyncThunk(
  'config/univers',
  api.config.getUniverList
)

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setCurrentUniver(state, action)
    {
      let currentUniver = action.payload
      if(!currentUniver)
      {
        state.currentUniver = null
        return
      }
      
      currentUniver = state.univerList.find(univer => univer.id === currentUniver.id)
      state.currentUniver = currentUniver
      state.currentDay = getCurrentDay()
      state.currentWeek = getCurrentWeek(currentUniver.weeks)

      const { passDays, countDays, toEndDays } = getDaysStats(
        currentUniver.startDate,
        currentUniver.endDate,
      )
      state.countDays = countDays
      state.passDays = passDays
      state.toEndDays = toEndDays
      state.toEndPercent = passDays / countDays * 100
    },
    setConfig(state,action)
    {
      state.config = action.payload
    },
  },
  extraReducers(builder)
  {
    builder
      .addCase(requestConfigUnivers.pending, (state) => {
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

export const { setCurrentUniver, setConfig } = configSlice.actions
export default configSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HrefTitle, Schedule } from "../../types"
import api from "../../api"
import { RootState } from "../rootReducer"

type ScheduleHistoryRecord = {
    id: string,
    data: Schedule
  }

type ScheduleState = {
  isLoading: boolean
  error: {
    message: string,
    payload: any,
  } | null
  schedule: Schedule | null
  scheduleHistory: ScheduleHistoryRecord[]
  scheduleHistoryHrefs: string[]

  isSearchLoading: boolean
  searchError: {
    message: string,
    payload: any,
  } | null
  searchedSchedules: HrefTitle[]
}

export const requestSchedule = createAsyncThunk(
  'schedule/request',
  async ({ univer, tail: href }: {
    univer: string,
    tail: string,
  }, thunkAPI): Promise<{record: ScheduleHistoryRecord, isUniq: boolean }> => {
    const state = (thunkAPI.getState() as RootState)
    const scheduleHistory = state.schedule.scheduleHistory
    const schedule = scheduleHistory.find(schedule => schedule.id === href)

    if(schedule)
    {
      return { record: schedule, isUniq: false}
    }
    else
    {
      const schedule = await api.schedule.getSchedule({ univer, tail: href })
      return {
        record: { id: href, data: schedule },
        isUniq: true,
      }
    }
  }
)

export const requestSearchSchedule = createAsyncThunk(
  'schedule/search/request',
  api.schedule.searchSchedule
)

const initialState: ScheduleState = {
  isLoading: false,
  error: null,
  schedule: null,
  scheduleHistory: [],
  scheduleHistoryHrefs: [],

  isSearchLoading: false,
  searchError: null,
  searchedSchedules: [],
}

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    scheduleHistoryBack(state)
    {
      state.scheduleHistoryHrefs.pop()
      const currentScheduleHref = state.scheduleHistoryHrefs[state.scheduleHistoryHrefs.length - 1]
      if(currentScheduleHref)
      {
        const currentSchedule = state.scheduleHistory.find(schedule => schedule.id === currentScheduleHref)!
        state.schedule = currentSchedule.data
      }
      else
      {
        state.schedule = null
      }
    },
    clearScheduleHistory(state)
    {
      state.scheduleHistoryHrefs = []
      state.schedule = null
    },
  },
  extraReducers(builder)
  {
    builder
      .addCase(requestSchedule.pending, (state,action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(requestSchedule.rejected, (state,action) => {
        state.isLoading = false
        state.error = {
          message: 'Ошибка при запросе расписания :(',
          payload: action.meta.arg
        }
      })
      .addCase(requestSchedule.fulfilled, (state,action) => {
        state.isLoading = false
        state.error = null

        const { isUniq, record } = action.payload

        if(isUniq)
        {
          state.scheduleHistory.push(record)
        }

        state.scheduleHistoryHrefs.push(record.id)
        state.schedule = record.data
      })

      .addCase(requestSearchSchedule.pending, (state,action) => {
        state.isSearchLoading = true
        state.searchError = null
      })
      .addCase(requestSearchSchedule.rejected, (state,action) => {
        state.isSearchLoading = false
        state.searchError = {
          message: 'Ошибка при запросе расписания :(',
          payload: action.meta.arg
        }
      })
      .addCase(requestSearchSchedule.fulfilled, (state,action) => {
        state.isSearchLoading = false
        state.searchError = null
        state.searchedSchedules = action.payload
      })
  },
})

export const { scheduleHistoryBack, clearScheduleHistory, } = scheduleSlice.actions
export default scheduleSlice.reducer
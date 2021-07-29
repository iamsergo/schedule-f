import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HrefTitle, Schedule, Stats } from "../../types"
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
  lessonStats: {
    title: string
    stats: Stats
    fromWhoms: HrefTitle[]
  } | null
  scheduleHistory: ScheduleHistoryRecord[]
  scheduleHistoryHrefs: string[]

  q: string
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
    const userSchedule = state.user.user?.schedule
    
    const schedule = scheduleHistory.find(schedule => schedule.id === href)
    if(schedule)
    {
      return { record: schedule, isUniq: false}
    }
    else if(userSchedule && userSchedule.href === href)
    {
      return {
        record: { id: href, data: userSchedule },
        isUniq: true,
      }
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
  lessonStats: null,
  scheduleHistory: [],
  scheduleHistoryHrefs: [],

  q: '',
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
    clearSearchedSchedules(state)
    {
      state.searchedSchedules = []
    },
    setLessonStats(state,action)
    {
      state.lessonStats = action.payload
    },
  },
  extraReducers(builder)
  {
    builder
      .addCase(requestSchedule.pending, (state) => {
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

      .addCase(requestSearchSchedule.pending, (state) => {
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

export const {
  scheduleHistoryBack,
  clearScheduleHistory,
  clearSearchedSchedules,
  setLessonStats,
} = scheduleSlice.actions
export default scheduleSlice.reducer
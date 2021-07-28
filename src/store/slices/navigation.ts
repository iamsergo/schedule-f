import { createSlice } from "@reduxjs/toolkit";
import { MAIN_PANEL, SCHEDULE_PANEL } from "../../constants";
import { PanelType } from "../../types";

type NavigationState = {
  activePanel: PanelType
  history: PanelType[]
}

const initialState: NavigationState = {
  // activePanel: SCHEDULE_PANEL,
  activePanel: MAIN_PANEL,
  history: [SCHEDULE_PANEL],
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActivePanel(state, action)
    {
      state.activePanel = action.payload
    },
  },
})

export const { setActivePanel } = navigationSlice.actions
export default navigationSlice.reducer
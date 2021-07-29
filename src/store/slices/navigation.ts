import { createSlice } from "@reduxjs/toolkit";
import { MAIN_PANEL } from "../../constants";
import { PanelType } from "../../types";

type NavigationState = {
  activePanel: PanelType
  history: PanelType[]
  activeModal: string | null
}

const initialState: NavigationState = {
  activePanel: MAIN_PANEL,
  history: [MAIN_PANEL],
  activeModal: null,
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActivePanel(state, action)
    {
      state.activePanel = action.payload
    },
    setActiveModal(state, action)
    {
      state.activeModal = action.payload
    }
  },
})

export const { setActivePanel, setActiveModal } = navigationSlice.actions
export default navigationSlice.reducer
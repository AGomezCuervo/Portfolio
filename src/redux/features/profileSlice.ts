import { createSlice } from "@reduxjs/toolkit";
import {RootState} from "../store";
import englishData from "../../utils/languages/englishData.json";
import spanishData from "../../utils/languages/spanishData.json";

interface profileState {
  language: "English" | "Spanish";
  data: typeof englishData
}

const initialState: profileState = {
  language: "English",
  data: englishData
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeLanguage: (state) => {
      if(state.language === "English") {
        state.language = "Spanish";
        state.data = spanishData;
      } else {
        state.language = "English";
        state.data = englishData;
      }
    }
  }
})

export default profileSlice.reducer;
export const {changeLanguage} = profileSlice.actions;
export const selectLanguage = (state:RootState) => state.profile.language;
export const selectData = (state:RootState) => state.profile.data;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LocalityState {
  pointOfDeparture: string;
  pointOfArrival: string;
}

const initialState: LocalityState = {
  pointOfDeparture: "Уфа",
  pointOfArrival: "",
};

export const localitySlice = createSlice({
  name: "locality",
  initialState,
  reducers: {},
});

export default localitySlice.reducer;

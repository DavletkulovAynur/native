import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TPoint } from "./types";

export interface ILocalityState {
  pointOfDeparture: TPoint | null;
  pointOfArrival: TPoint | null;
}

const initialState: ILocalityState = {
  pointOfDeparture: {
    name: "Уфа",
    id: "1",
  },
  pointOfArrival: null,
};

export const localitySlice = createSlice({
  name: "locality",
  initialState,
  reducers: {
    updatePointOfDeparture: (state, action: PayloadAction<TPoint | null>) => {
      state.pointOfDeparture = action.payload;
    },
    updatePointOfArrival: (state, action: PayloadAction<TPoint | null>) => {
      state.pointOfArrival = action.payload;
    },
  },
});

export const { updatePointOfDeparture, updatePointOfArrival } = localitySlice.actions;

export default localitySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "בני ברק",
  Latitude: 32.0833,
  Longitude: 34.8333
}

const usersReducer = createSlice({
  name: "location",
  initialState,

  reducers: {
    locationAdded: (state: any, action) => {
      state.name = action.payload.name;
      state.Latitude = action.payload.Latitude;
      state.Longitude = action.payload.Longitude;
    },
  },
});

export const { locationAdded } = usersReducer.actions;
export default usersReducer.reducer;

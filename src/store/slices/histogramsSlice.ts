import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SearchOptions } from "@types";
import axios from "axios";
import { BASE_URL } from "constants";

export const search = createAsyncThunk<null, SearchOptions>(
  "search/histogramSearch",
  async (params) => {
    try {
      console.log("json", JSON.stringify(params));

      const { data } = await axios.post(
        `${BASE_URL}/api/v1/objectsearch/histohrams`,
        JSON.stringify(params)
      );

      console.log("data", data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  status: "idle",
  data: null,
};

const histogramSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(search.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(search.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default histogramSlice.reducer;

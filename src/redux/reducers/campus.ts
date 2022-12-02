import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCampusById } from "../../api/campus";
import type { Campus } from "../../types/Campus";

interface CampusState {
  campus: Campus | null;
}

const initialState: CampusState = {
  campus: null,
};

export const fetchCampus = createAsyncThunk("campus/fetchCampus", async (id: string) => {
  try {
    const response = await getCampusById(id);
    return response.data;
  } catch {
    return null;
  }
});

const campus = createSlice({
  name: "campus",
  initialState,
  reducers: {
    clearCampus() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCampus.fulfilled, (state, action) => {
      state.campus = action.payload;
    });
  },
});

export const { clearCampus } = campus.actions;

export const campusReducer = campus.reducer;

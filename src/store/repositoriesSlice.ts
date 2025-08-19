import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRepositories = createAsyncThunk(
  "repositories/fetchRepositories",
  async (username: string, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

interface RepositoriesState {
  data: Repository[];
  loading: boolean;
  error: string | null;
}

const initialState: RepositoriesState = {
  data: [],
  loading: false,
  error: null,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default repositoriesSlice.reducer;

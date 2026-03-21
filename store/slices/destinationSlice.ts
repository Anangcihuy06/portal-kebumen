import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Destination, DestinationState } from '@/types';

const initialState: DestinationState = {
  destinations: [],
  featured: [],
  currentDestination: null,
  loading: false,
  error: null,
};

const destinationSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    fetchDestinationsStart: (_state) => {
      _state.loading = true;
      _state.error = null;
    },
    fetchDestinationsSuccess: (state, action: PayloadAction<Destination[]>) => {
      state.loading = false;
      state.destinations = action.payload;
      state.featured = action.payload.slice(0, 4);
    },
    fetchDestinationsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchDestinationDetailStart: (state, _action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
      state.currentDestination = null;
    },
    fetchDestinationDetailSuccess: (state, action: PayloadAction<Destination>) => {
      state.loading = false;
      state.currentDestination = action.payload;
    },
    fetchDestinationDetailFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDestinationsStart,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
  fetchDestinationDetailStart,
  fetchDestinationDetailSuccess,
  fetchDestinationDetailFailure,
} = destinationSlice.actions;

export default destinationSlice.reducer;

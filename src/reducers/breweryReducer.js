import { createSlice } from '@reduxjs/toolkit'

const initState = {
    saved: []
  }
  
  const brewerySlice = createSlice({
    name: 'breweries',
    initialState: initState,
    reducers: {
      add: (state, action) => {
        state.saved.push(action.payload)
      },
      remove: (state, action) => {
        state.saved = state.saved.filter(e => e.id != action.payload.id)
      }
    }
  })

  export const { add, remove } = brewerySlice.actions;
  export default brewerySlice.reducer;
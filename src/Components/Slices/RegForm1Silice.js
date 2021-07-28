import { createSlice } from '@reduxjs/toolkit'

export const RegSlice = createSlice({
  name: 'register',
  initialState: {
   data:null
  },
  reducers: {
    setUserData : (state,action) => {
      state.register  =action.payload
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { setUserData } = RegSlice.actions

export default RegSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
 

 
 

export const RegSlice = createSlice({
  name: 'register',
  initialState: {
  //  fname:null,
  // lname:null,
  //  email:null,
  // pass:null,
  //  message:null,
  //  error:null,
 
},
  reducers: {
    setUserData : (state,action) => {
 
         state.register=action.payload
         let regData=state.register
         console.log(regData)
        
       

   



      // axios.post('https://nodeprojectapi.herokuapp.com/register',regData).then(res=>{
      //   console.log(res.data);
      // }).catch(err=>{console.log(err);})


    },
   extraReducers:{
     


   }


  }
})

// Action creators are generated for each case reducer function
export const { setUserData } = RegSlice.actions

  

export default RegSlice.reducer
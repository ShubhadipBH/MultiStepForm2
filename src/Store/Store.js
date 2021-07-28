import { configureStore } from "@reduxjs/toolkit";
 
import SetUserReducer from "../Components/Slices/RegSlice";
  import setTestSliceData from '../Components/Slices/TestSlice'
import { setReset } from "../Components/Slices/TestSlice";
export default configureStore({
  reducer: {
    userdata:SetUserReducer,
    TestReducer:setTestSliceData,
    resetReducer:setReset
  }  
})
import { createSlice } from '@reduxjs/toolkit'
 

const initialState = {
    fname:null,
    lname:null,
    email:null,
    pass:null,
    phone:null,
    state:null,
    city:null,
    zip:null,
    message:null,
    error:null,
    formCounter:null
  
}

const TestSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setTestSliceData : (state,action) => {

            state.fname=action.payload.fname
            state.lname=action.payload.lname
            state.email=action.payload.email
            state.pass=action.payload.pass
            state.phone=action.payload.phone
            state.zip=action.payload.zip
            state.state=action.payload.state
            state.city=action.payload.city
            state.formCounter=action.payload.formCounter
        },
        setReset:(state,action)=>{
                    if (action.payload="reset")
                    state.fname=""
                    state.lname=""
                    state.email=""
                    state.pass=""
                    state.phone=""
                    state.zip=""
                    state.state=""
                    state.city=""
                    state.formCounter=""

        }
    
    
    }
});

export const {setTestSliceData,setReset} = TestSlice.actions
export default TestSlice.reducer



//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 - GITLAB TOKEN
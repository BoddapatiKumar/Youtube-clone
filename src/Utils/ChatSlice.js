import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            //after every 25 messages we will delete one message
            state.messages.splice(25,1)
            state.messages.unshift(action.payload);
        }
    }

})

export const{addMessage}=chatSlice.actions
export default chatSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState = {
    todos: [
        {
            id:uuidv4(),
            context:"Learn Redux",
            done:false
        }
    
    ]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add(state,action){
            state.todos.push({id:uuidv4(),...action.payload})
        }

    }
})

export const {add} = todoSlice.actions;
export default todoSlice.reducer;
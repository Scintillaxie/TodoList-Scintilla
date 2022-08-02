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
        },
        toggle(state,action){
            state.todos[action.payload].done = !state.todos[action.payload].done;
        },
        deleteItem(state,action){
            state.todos.splice(action.payload,1);
        }

    }
})

export const {add,toggle,deleteItem} = todoSlice.actions;
export default todoSlice.reducer;
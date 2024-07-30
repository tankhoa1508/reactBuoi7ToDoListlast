import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import userReducer from "./userSlice";
import studentReducer from "./studentSlice";
import listReducer from "./listSlice";
const store =configureStore({
    reducer:{
        count: countReducer,
        user: userReducer,
        student: studentReducer,
        students: listReducer
    }
})
export default store;
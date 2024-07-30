import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    students: [
        { id: 1, name: "hoang", checked: false },
        { id: 2, name: "cá", checked: true },
        { id: 3, name: "lợn", checked: true }
    ],
    checkedAll: false
}
const listSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudent(state, action){
            let idMax = state.students.reduce((max_value, student) => Math.max(max_value, student.id), -Infinity)
            state.students = [...state.students, {id: state.students.length===0?1:idMax+1, name: action.payload, checked:false }]
        },
        deleteStudent(state, action){
            state.students = state.students.filter(st=>st.id!==action.payload)
        }
    }
})

export const{addStudent, deleteStudent} = listSlice.actions;
export default listSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    student: {
        name: "hoàng",
        math: 10,
        pro: 10,
        dtb: 0
    },
    checked: false
}
const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        changeAVG(state){
            state.student.dtb = (state.student.math+state.student.pro)/2
        },
        rechecked(state){
            state.checked = !state.checked
        }
    }
})

export const {changeAVG, rechecked} = studentSlice.actions
export default studentSlice.reducer;
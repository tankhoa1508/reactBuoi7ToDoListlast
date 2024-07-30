import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value: 4,
}
const countSlide = createSlice({
    name: "count",
    initialState,
    reducers: {
        countUp(state){
            state.value+=1;
        },
        countDown(state){
            state.value-=1
        }
    }
})
export const{countUp, countDown} = countSlide.actions
export default countSlide.reducer;
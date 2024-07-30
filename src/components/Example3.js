import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rechecked, changeAVG } from '../redux/studentSlice'
export default function Example3() {
    const student = useSelector(state=>state.student.student)
    const checked = useSelector(state=>state.student.checked)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Student' name: {student.name}</h1>
        <h1>Math: {student.math}</h1>
        <h1>Pro: {student.pro}</h1>
        <h1>avg: {student.dtb}</h1>
        <h1>Checked: {checked? "true":"false"} </h1>
        <button onClick={()=>dispatch(rechecked())}>rechecked</button>
        <button onClick={()=>dispatch(changeAVG())}>AVG</button>
    </div>
  )
}

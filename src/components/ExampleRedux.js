import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { countDown, countUp } from '../redux/countSlice'
export default function ExampleRedux() {
    const dispatch=useDispatch()
    const count = useSelector((state)=>state.count.value)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(countDown())}>Count down</button>
        <button onClick={()=>dispatch(countUp())}>Count up</button>
    </div>
  )
}

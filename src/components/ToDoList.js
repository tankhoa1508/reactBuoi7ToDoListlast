import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent, addStudent } from '../redux/listSlice'
import Add from './Add'

export default function ToDoList() {
    const [flag, setFlag] = useState();
    const students =useSelector(state=>state.students.students)
    const dispatch = useDispatch()
    const handle_add = (name)=>{
        dispatch(addStudent(name))
    }
    const filterStudent = (list,flag)=>{
        if(flag==="CHECKED") {
            return list.filter(st=>st.checked)
        }
        else if(flag==="NOCHECKED") {
            return list.filter(st=>!st.checked)
        }
        else {
            return list;
        }
    }
    console.log("render")
  return (
    <div>
        <Add
        handle_add={handle_add}
        />
        {
            filterStudent(students, flag).map((st, index)=>(
                <div key={index}>
                    <p>{st.name}</p>
                    <button onClick={()=>dispatch(deleteStudent(st.id))}>X</button>
                </div>
            ))
        }
        <button onClick={()=>setFlag("CHECKED")}>CHECKED</button>
        <button onClick={()=>setFlag("NOCHECKED")}>NOCHECKED</button>
        <button onClick={()=>setFlag("CLEAR")}>CLEAR</button>
    </div>
  )
}

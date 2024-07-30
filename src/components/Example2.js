import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changeName } from '../redux/userSlice';

export default function Example2() {
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user.user)
  return (
    <div>
        <h1>User 's name: {user.name}</h1>
        <h1>User 's age: {user.age}</h1>
        <button onClick={()=>dispatch(changeAge(21))}>Change age</button>
        <button onClick={()=>dispatch(changeName("văn hoàng"))}>Change name</button>
    </div>
  )
}

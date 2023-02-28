import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../redux/TaskSlice/TaskSlice'

const Task = ({ task }) => {
  const dispatch=useDispatch()
  const [onUpdate, setOnUpdate] = useState(false);
  const [newtask, setNewtask] = useState(task);
  return (
    <>
      {onUpdate ?
      <>
      <input type="text" defaultValue={task.name} onChange={(e) => setNewtask({ ...newtask, name: e.target.value })}></input>
      <button onClick={()=>{
        dispatch(updateTask(newtask))
        setOnUpdate(false)
      }}>Confirm</button>
      <button onClick={()=>setOnUpdate(false)}>Cancel</button> 
      </>
      : <div className={task.done ? 'done' : 'not-done'} onClick={() => dispatch(updateTask({...newtask,done:!task.done}))} >
        <h3>{task.id}</h3>
        <h3>{task.name}</h3>
        <h3>{task.done ? "Done" : "Not Yet"}</h3>
        <button onClick={()=>setOnUpdate(true)}>Update</button>
        <button onClick={()=>dispatch(deleteTask(task))}>X</button>
      </div>}
    </>
  )
}

export default Task
import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
  const tasks = useSelector((store) => store.task)
  console.log(tasks)
  return (
    <>

      {tasks.map((el, i) => (
        <div key={i} style={{ backgroundColor: el.done ? "#32CD32" : "#FF0000" }}>
          <Task task={el} />
        </div>
      ))}

    </>
  )
}

export default ListTask

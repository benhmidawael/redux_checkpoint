import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
  const tasks = useSelector((store) => store.task)
  console.log(tasks)
  return (
    <>

      {tasks.map((el, i) => (
        <div key={i} className='list'>
          <Task task={el} />
        </div>
      ))}

    </>
  )
}

export default ListTask

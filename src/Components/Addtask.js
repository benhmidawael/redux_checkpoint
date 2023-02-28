import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/TaskSlice/TaskSlice';

const Addtask = () => {
    const [newtask, setNewtask] = useState({id:0,name:"",done:false});

      const dispatch=useDispatch()
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "80%" }}>
                    <input
                        placeholder="Task Name"
                        type="text"
                        style={{ width: "50%", height: "30px", margin: "10px 0", textAlign: "center" }}
                        onChange={(e) => (setNewtask({ ...newtask, name: e.target.value ,done:false, id:Math.floor(Math.random()*100)}))}
                    />
                    <button  onClick={()=>dispatch(addTask(newtask))}>
                        Add Task
                    </button>
            </div>
        </>
    )
}

export default Addtask
// import React from 'react'
// import { useState } from 'react'
// import './index.css'

// export default function TodoGenerator(props) {
//     const [value, setValue] = useState('')
//     const {addTodo} = props;
//     const submitValue = () => { 
//         addTodo(value)
//         setValue('');
//      }
//   return (
//     <div className='generator'>
//         <input className='generator__text' type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
//         <input className='generator__btn' type="button" value="add" onClick={submitValue}/>
//     </div>
//   )
// }

import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { add } from "../../todoSlice"

function TodoGenerator(){
  const [context, setContext] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setContext(event.target.value);
  }

  const handleClick = () =>{
    const todo = {
      context:context,
      done:false
    }
    dispatch(add(todo))
  }

  return (
        <div className='generator'>
            <input className='generator__text' type="text" onChange={handleChange}/>
            <input className='generator__btn' type="button" value="add" onClick={handleClick}/>
        </div>
  )
}

export default TodoGenerator;

import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { add } from "../../todoSlice"
import "./index.css";


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
